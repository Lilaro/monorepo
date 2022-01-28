const fetch = require('node-fetch')
const fs = require('fs')
const util = require('util')
const streamPipeline = util.promisify(require('stream').pipeline)
const childProcess = require('child_process')
const checksum = require('./checksum')

exports.default = async function (context) {
  const platform = Array.from(context.platformToTargets.keys())[0].name
  if (platform !== 'linux') {
    console.log('skipping changing build envs')
    return
  }

  const response = await fetch('https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage')
  if (!response.ok) throw new Error(`${response.statusText}`)
  const targetPath = `${context.outDir}/appimagetool-x86_64.AppImage`
  await streamPipeline(response.body, fs.createWriteStream(targetPath))
  fs.chmodSync(targetPath, 0o755)
  console.log('artifactsPaths', context.artifactPaths[0])
  console.log('artifactsPaths', context.artifactPaths[1])
  console.log('artifactsPaths', context.artifactPaths[2])
  childProcess.execSync(`${context.artifactPaths[0]} --appimage-extract`)
  childProcess.execSync(`mv ./squashfs-root ${context.outDir}/squashfs-root`)
  const data = fs.readFileSync(`${context.outDir}/squashfs-root/AppRun`, 'utf8').split('\n')
  console.log('data', data)
  const index = data.findIndex(text => text === 'BIN="$APPDIR/quiet"')
  if (index !== -1) {
    data[index - 1] = 'export LD_PRELOAD="${APPDIR}/usr/lib/libssl.so"'
    fs.writeFileSync(`${context.outDir}/squashfs-root/AppRun`, data.join('\n'), 'utf8')
  } else throw new Error('no path to channge')
  childProcess.execSync(`${targetPath} ${context.outDir}/squashfs-root`)
  fs.unlinkSync(`${context.artifactPaths[0]}`)
  const appName = context.artifactPaths[0].split('/').pop()
  if (appName) {
    childProcess.execSync(`mv ./Quiet-x86_64.AppImage ${context.outDir}/${appName}`)
  } else throw new Error('no file name')
  console.log('env added')
  console.log(`${context.outDir}/alpha-linux.yml`)
  // alpha-linux or linux
  // const ymlData = fs.readFileSync(`${context.outDir}/alpha-linux.yml`, 'utf8').split('\n')
  console.log(`${context.outDir}/${appName}`)
  const checksu = await checksum(`${context.outDir}/${appName}`)
  console.log('checksum', checksu)
  return `${context.outDir}/${appName}`
}
