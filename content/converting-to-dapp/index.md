---
title: Converting to a Decentralised App
date: '2021-01-09'
image: "banner.jpg"
tags: ['story','feature']
author: "Jay Kumar"
---

Connecting to an ETH wallet
-----------

At this stage, I felt like I had all the information I needed to help me with my trading. 
One of the things that felt missing was the ability to connect my wallet through metamask and automatically get all the coins inside it. 
Sure I could save the wallet using the save button after search but for some reason I can't explain, it felt better to be able to connect my ledger to the app instead of relying on some sort of hack.

I started with adding web3 to the app. 
Afterwards, I added a redux action to connect to any browser wallet using web3 through a connect button in the header which would automatically change to the wallet address once it's loaded.
I also added functionality to detect if there is any wallet already connected (for example: if you were already logged into Uniswap using metamask, you did not have to now connect to my app as well). 

Conclusion
-------------

I was surprised at how easy this was to do. When I was thinking about making it a DAPP I thought it would take me a couple of days to code it,
but web3 was super easy and within an hour I had a button to connect my app to metamask. It was strange, a feature that was making me anxious to get back into coding this would only take so little time. 