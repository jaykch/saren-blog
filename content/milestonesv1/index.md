---
title: "Milestones"
date: "2021-05-12"
image: "banner.png"
tags: ['announcement','company']
author: "Jay Kumar"
---

Saren Milestones
-----------
I have finished building the first version and vision of our milestones and framework for the next year for both Saren
and Cerberus. It is a very abstract version of the work we will be doing, expect more details on each milestone in
future announcements.

### Cerberus

Coingecko/CMC style decentralised dapp for coin listings (already live). For cerberus milestones please read further
into this blog.

### Shill my coins

Reddit style forum for shilling coins from Cerberus. A Shill button will be added to each coin page on Cerberus where on
clicking, you would be able to create a reddit style post on a separate shill my coin Dapp. Users would need 100k SAR
tokens (Subject to change) to be able to shill their coins. Post creator’s eth wallet value would be displayed on the
header so users would gain interest in what top wallets have to say. Each post will have a specific format for a better
UI experience.

In future, profile pages, rewards, tipping and other features will be added to this dapp. We aim to release beta in the
next quarter.

### Untitled Decentralised Subscription Protocol

A subscription protocol that will let users subscribe to their favorite creators in a decentralized manner. 2.5%
(Subject to change) of the revenue would go to sar holders and another 2.5% would be deposited into the smart contract
for development and maintenance of the protocol.

### Saren developer grants

A decentralized entity will be set up that would have monthly allocation generated from revenue of Cerberus
(advertisements and paid api). Sar holders will be able to propose and vote on monthly grants handed out by this entity
(like Uniswap grants but democratized through SAR votes).

The idea behind Saren is to give back to the community and this project along with the subscription protocol is very
close to my heart. I will be focussing my efforts on these two primarily once I have set up a team for Cerberus and
Shill my coins.

### Future

A DAO will be setup with a governance protocol where SAR holders will be able to propose and vote on future features and
implementations.

Cerberus Milestones
-----------
Please treat these as an abstract of our direction for Cerberus. There is a lot that goes into each of these features
and we aim to deliver all of this by Q2 2022.

### Milestone – 1 (Completed)

* Decentralised Uniswap listings
* Twitter feed
* Coingecko imports
* Wallet Viewer
* Table wallet view
* Web3 integration

### Milestone – 2 (Partly completed)

* Voting
* Comments
* Improved wallet api
* Filter by categories
* Pancake swap listings
* Performance upgrades (more servers, more bots for data collection, reduce loading times, paging, lazy loading etc.)

### Milestone – 3

* Dextools style charts
* Night mode
* Multiple wallet viewer
* Tags
* Trending
* Ratings

### Milestone – 4

* Proof of engagement token (separate from SAR that would be given out to Cerberus users daily)
* Automated Advertisements
* Fully automated listings (automated approvals and voting)
* Tiered SAR holders – NFT badges for 10k 50k 100k 500k 1M Saren holders
* Community engagement features like – top voted, most searched, most liquidity etc.
* Saren token list (like coingecko and cmc token list) as viewed **[here](https://tokenlists.org/)**
* Saren icons (a github repo much like
  the **[trustwallet repo](https://github.com/trustwallet/assets/tree/master/blockchains/ethereum))** Uniswap uses for
  their icons
    - **Note:** Trustwallet charges 1BNB for this service which is fully automated and should be free. As soon as an
      alternative is provided, Uniswap could be convinced to use that instead and we will be able to partner with them.

### 2022-Future

* Advanced analytics for Saren holders (same tiered mechanism as specified above)
* NUPL rating (Net unrealized profit and loss)
* Trending from twitter, google, reddit etc.
* Liquidity pool token Import
* Charts for wallet
* Wallet history
* Tax reports
* iOS/Android application
* Paid api for price feeds, market data etc. (paid in SAR tokens)

Migration to Uniswap V3
-----------
Finally, we will be migrating our liquidity to uniswap v3. V3 allows us to select a price curve to add liquidity to.
This is a much more efficient way to add liquidity as we would not need to add more eth if the price moves too high
for **$SAR**.

We will add a price range from ~$0.01 to ~$0.1 and additionally add $Eth for < $0.01 and $SAR for > $0.1. This way if
the price falls below 1 cent, the eth will refund the sellers and if it falls over 10 cents the sar will be sold.
Additionally, price ranges will be adjusted as we reach new floors to maximise fees. Fees generated from the liquidity
will be used as a revenue stream to fund more development.

This switch will take place on **Monday, 17th of May 2021**. Feel free to ask any questions regarding this migration in
our discord or telegram.

**Note:** For more information on how Uniswap v3 works, please visit
their **[docs](https://docs.uniswap.org/concepts/introduction/liquidity-user-guide)**.