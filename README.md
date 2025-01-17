<p align="center">
  <a href="#">
    
  </a>
  <p align="center">
   <img width="150" height="150" src="https://avatars.githubusercontent.com/u/59660937?s=200&v=4" alt="Logo">
  </p>
  <h1 align="center"><b>Quiet</b></h1>
  <p align="center">
  Encrypted p2p team chat with no servers, just Tor.
    <br />
<!--    <a href="https://tryquiet.org"><strong>tryquiet.org »</strong></a> -->
<!--    <br /> -->
    <a href="https://github.com/TryQuiet/monorepo/releases"><strong>releases »</strong></a>
    <br />
    <a href="https://github.com/orgs/TryQuiet/projects/1#column-14685906"><strong>priorities »</strong></a>
    <br />
    <a href="https://github.com/TryQuiet/monorepo/wiki/Quiet-FAQ"><strong>faq »</strong></a>
    <br />
   </p>
</p>
Quiet is an alternative to team chat apps like Slack, Discord, and Element that does not require trusting a central server or running one's own. In Quiet, all data syncs directly between a team's devices over [Tor](https://torproject.org)—no server required. 
<br/>
<br/>

> NOTE: Quiet is not audited and should not be used when privacy and security are critical. It lacks basic features and probably won't replace your Slack or Discord yet. That said, it works surprisingly well and we use it daily as a Slack replacement.


Quiet is for fans of software freedom, decentralization and privacy tech, and for anyone craving a future where humanity can collaborate effectively online without trusting our communities, networks, and data to giant corporations.

<p align="center">
  <img src="https://user-images.githubusercontent.com/213678/169164985-c1ced511-c49d-4500-b301-24bb8113ffb2.png" alt="Screenshot">
  <br />
  <br />
</p>


## How it works 

While apps like Slack, Discord, and Signal use central servers, Quiet syncs messages directly between a team's devices, over Tor, with no server required.

Each group of people (Quiet calls them "communities") gets their own insular network, so that data from one community never touches the devices of Quiet users in *other* communities. Not even in encrypted form!

Message syncing is taken care of by a project called [OrbitDB](https://orbitdb.org), which works like a mashup of Git, a [gossip protocol](https://en.wikipedia.org/wiki/Gossip_protocol), and [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent); it broadcasts new messages, syncs the latest messages, and fetches files. 

Invites, access, and usernames are granted by a community owner, i.e. whoever creates the community. The owner hands out an "invitation code" which invitees use to connect to the owner's device, register a username, and get a standard cryptographic certificate so they can prove to other peers they're part of the community.

See our [FAQ](https://github.com/TryQuiet/monorepo/wiki/Quiet-FAQ) for answers to common questions and a comparison of Quiet with similar apps.

## Technical overview

This is a concise technical summary of the main points.  

1. **Granting access:** community owners use standard PKI ([PKI.js](https://pkijs.org/)) to grant access, with each community owner serving as the community's [certificate authority](https://en.wikipedia.org/wiki/Certificate_authority); this is handled by Quiet and transparent to users. 
2. **Authentication:** a valid signed certificate from the community owner is required to connect to peers, receive connection from peers, and for messages to be visible to other peers.
3. **Networking:** peers connect via [Tor onion services](https://en.wikipedia.org/wiki/Tor_(network)#Onion_services), exclusively with their fellow community members.
4. **Privacy:** Tor encrypts all data in transit, and a Quiet user's device connects only to the devices of their fellow community members, so all messages are encrypted to recipients. 
4. **Syncing:** IPFS and [OrbitDB](https://orbitdb.org), an [IPFS](https://ipfs.io/)-based [CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type), ensure that all data (messages, user data, etc) syncs between peers with [eventual consistency](https://arxiv.org/abs/2012.00472).
5. **Identity:** a valid certificate from the community owner on account creation establishes a username, which the owner attests is unique; in future versions, Quiet will warn all members if community owners are caught issuing non-unique usernames, to protect against impersonation by malicious or compromised owners. (See: [#119](https://github.com/TryQuiet/monorepo/issues/119))
6. **Invitation:** to invite new members, community owners provide (via some other secure channel) an onion address that points to a registration API which accepts a certificate signing request, responds with a signed certificate, and provides sufficient peer information to connect to other peers; in future versions this onion address will expire. (See: [#536](https://github.com/TryQuiet/monorepo/issues/536))
7. **Account recovery:** owners must back up their data (e.g. by copying a folder, or someday with a wallet-style passphrase) and members request new accounts from owners.
8. **Removal:** TBD, but likely a combination of expiring invitation onion addresses, certificate revocation, and message-layer encryption with updated keys.
9. **Multiple device support:** TBD.
10. **Mobile push notifications:** barring a major victory for consumer rights, iOS notifications require using a centralized push notification service that connects to Apple, but message data can still be encrypted; in proof-of-concept, Quiet works well as an always-on background app on Android, so Android versions will likely not require a push notification server.
11. **Stack:** Our backend is in Node.js (on iOS/Android we use [nodejs-mobile](https://github.com/nodejs-mobile)); we use Electron on desktop and React Native on mobile.

## Our Mission

We are building Quiet to sharpen the tools that open societies use to hold power accountable. Each year, movements use the Internet to hold power accountable in breathtaking new ways. But the rise of big tech has made the Internet *itself* seem like *yet another* unaccountable power. The medium that brought us *Occupy* Wall Street now looks like regular old Wall Street. We believe this happened because software became too dependent on company-run infrastructure, which undermined the role [free software](https://en.wikipedia.org/wiki/Free_software) has historically played in holding the software industry accountable. Our goal is to fix that.

In the 2000s, when key dominant tech products had viable free software competitors that were radically pro-user (products like [Firefox](https://en.wikipedia.org/wiki/Firefox), [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent), [VLC](https://www.videolan.org/), [Handbrake](https://en.wikipedia.org/wiki/HandBrake), or [Linux](https://en.wikipedia.org/wiki/Linux)) there was a limit to how much big tech could abuse users before users fled.

But software for communication and collaboration seemed to require servers, whose cost grew with the software's popularity, so the question "who runs the server?" became a dilemma for free software projects. Should the project itself run the server? What about when costs grew too high? Should users run the server? But only a small niche of hobbyists have servers! Should an organization run the server? If so, then that organization now controls the data and relationships that make the product useful, limiting the freedom to [fork](https://en.wikipedia.org/wiki/Fork_(software_development)#Forking_of_free_and_open-source_software) and flee that makes free software so accountable and desirable. Reddit, for example, [was once free software](https://www.reddit.com/r/changelog/comments/6xfyfg/an_update_on_the_state_of_the_redditreddit_and/), but because forking Reddit's *code* would never have resulted in anything more than an empty website (since all the conversations and relationships that make Reddit what it is sit on *company-run servers*) Reddit being free software never gave Reddit's users any real power to hold it accountable. 

[Federation](https://en.wikipedia.org/wiki/Federation_(information_technology)) is a proposed solution this dilemma, but Gmail shows its limits. After all, email is the most well-known federated product, but Google can still build must-have features like spam filtering on the server side, and Gmail controls a user's email address, so exiting Gmail means updating dozens or hundreds of accounts created with that address. Exiting Gmail might be easier than exiting Facebook or Instagram, but no Gmail competitor can make exiting Gmail as easy and delightful an experience as Firefox made exiting Internet Explorer, because Gmail controls infrastructure, where Internet Explorer never did. So while federation does help, we must do better if we want to hold big tech accountable.

Regulation is an even weaker proposed solution. Even when regulation works—and a quick look at the media, telecom, energy, or banking industries will illustrate its limits—regulation tends to create a cozy relationship between industry and regulators that makes industries easy targets for government subversion. For example, the highly-regulated telecom industry [bends](https://www.theguardian.com/world/2013/jun/06/nsa-phone-records-verizon-court-order) [over](https://www.vice.com/en/article/wx8jax/researchers-find-powerful-ss7-cellphone-location-surveillance-in-europe-middle-east-australia) [backwards](https://en.wikipedia.org/wiki/Room_641A) every time governments want help carrying out unpopular mass surveillance. Is this what we want from big tech?

We're building Quiet because we believe that, for a broad and growing class of software, the best answer to the "who runs the server?" dilemma is "no one." Eliminate the server; in terms accountability, it is a burden and a weakness. By eliminating servers from software's [attack surface](https://en.wikipedia.org/wiki/Attack_surface), software can be more private and secure. By eliminating exponentially growing server costs and the expertise-intensive work of scaling servers, software can be built by smaller teams under less financial pressure to betray users. Most importantly, by eliminating the server operator's control of relationships and data, users will be free to fork and exit, so they will once again have real power to hold software accountable.

We're building Quiet to spark a new phase of the free software movement where it is easy and normal to build apps this way. We want to make a private alternative to Slack & Discord that people love, to figure out the best and easiest technical approach along the way, and—by doing all this—to blaze a trail that other free software teams building other products can follow. Once *we* can build a good alternative to Slack or Discord that doesn't use servers, *others* can build alternatives to Google Docs, Figma, Asana, Trello, 1Password, and so on, all the way up to someday—and this is technically much more difficult—building alternatives to Facebook, Twitter, and Instagram. Big tech's users will be free to flee, and the Internet can stop being yet another unaccountable power, and keep being the breathtaking medium for holding power accountable that open societies need.

Join us, and let's figure this out.

## Contributing to Quiet

To get started hacking on Quiet, follow the instructions for [Quiet Desktop](https://github.com/TryQuiet/monorepo/tree/master/packages/desktop#readme) or [Quiet Mobile](https://github.com/TryQuiet/monorepo/tree/master/packages/mobile#readme). (If you're new to the project, start with Quiet Desktop, as it's more stable and vastly easier to start hacking on.)

Desktop and mobile versions share a common Node.js [backend](https://github.com/TryQuiet/monorepo/tree/master/packages/backend) and React [state manager](https://github.com/TryQuiet/monorepo/tree/master/packages/state-manager), with [Tor](https://torproject.org) binaries for each platform and architecture, using Electron and React Native and for their respective frontends.

We use a [Github project](https://github.com/orgs/TryQuiet/projects/1) to prioritize issues.
