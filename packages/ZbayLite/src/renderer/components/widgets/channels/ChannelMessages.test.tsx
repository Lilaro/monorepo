import React from 'react'
import { DateTime } from 'luxon'
import { shallow } from 'enzyme'

import { MuiThemeProvider } from '@material-ui/core/styles'
import { now, createMessage } from '../../../testUtils'
import { ChannelMessages } from './ChannelMessages'
import theme from '../../../theme'
import { DisplayableMessage } from '../../../zbay/messages.types'

describe('ChannelMessages', () => {
  it('renders component', async () => {
    const message = await createMessage()
    const displayMessage = new DisplayableMessage(message)

    jest.spyOn(DateTime, 'utc').mockImplementationOnce(() => now)
    const messages = [displayMessage]
    const contentRect = {
      bounds: {
        height: 200
      }
    }
    const result = shallow(
      <MuiThemeProvider theme={theme}>
        <ChannelMessages
          messages={messages}
          contentRect={contentRect}
        />
      </MuiThemeProvider>
    )
    expect(result).toMatchSnapshot()
  })
})