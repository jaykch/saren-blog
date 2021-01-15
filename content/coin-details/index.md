---
title: Coin Details
date: '2021-01-05'
image: "banner.jpg"
tags: ['story','feature']
author: "Jay Kumar"
---

New Features
-----------

After using the app for a while I realised, there needs to be a better way to view the information I needed. I use it mostly on desktop so wanted something that on clicking the coin would show me details of it.
The initial hover animation was nice, but it was not very practical in use. I decided to make a sort of HUD that would display all the information I needed in one place quickly.
While I was building it I realised, this information is not enough, although it was good enough to view it quickly but when iw as researching, I needed to look at more information to analyse if I needed to sell something or buy more of it. 

Coin HUD
-----------

The coin HUD I designed to display the balance of that coin in the wallet, changes in price, current price and when the price was last updated. 
I also built a hodl strength rating that would tell me how many people hold that token compared to other coins. This was specially useful to know if the company had a lot of following or just a handful of whales. 
This along with the market cap and volume was a good overview of my current holdings. 

Coin Page
---------------------------

Next thing I wanted to do was to build a coin page. 
I built a template that would dynamically change depending on the coin data provided, this can be easily done in gatsby, so I still did not feel like I needed to switch to a full stack app. 
I started by adding displaying tags of each coin, weather it is a dex, oracle, a smart contract platform, etc. 
Additionally, I added a vew description button that would give me a sort of short about me for each coin. 

Next I added change intervals like 24h 7d 14d, 30d, 90d change and so on. I was doing most of my trading on Uniswap and wanted to save the time it took me to open Uniswap and find a specific coin in its list,
this led me to add a trade button which would automatically take me to the Uniswap pair of ETH/{specified coin from that page}. 
Furthermore, I wanted details like, 24hr high and lows, all time high, when was the last all time high?
I put all this stuff in a market info box along with other external data I needed.

Finally, I added a markets table which would give me details of all the markets that coin is available, the volume there, current price etc.

A short video of this version is here - https://www.youtube.com/watch?v=XCYZMSBMj4g

Note: coin card is missing from this demo but can be viewed in the current version as it has not been updated since