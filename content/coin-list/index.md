---
title: Coin List
date: '2021-01-07'
image: "banner.jpg"
tags: ['story','feature']
author: "Jay Kumar"
---

New Features?
-----------

I started this app back in August 2020 as I was looking for an Ethereum portfolio app that you just put your public key in, and it gives you all the details in one place.
At first, I was using delta, but their prices weren't always up to date, and a lot of coins I was trading were just not on there.

I needed an app that could show me all the coins I hold but also tell me all the details like price action, market data, where to buy etc. in the same place. I used Zerion, but it always took too long to load or failed to load in some cases.
I thought I would give it a go and began building a simple webpage that gets all your tokens, and then calls the Coingecko api to give you all the details about it.

Design
-----------

When I was designing it, I really needed something to be super simple, where I don't have to think at all while using it, as simplistic user experience as possible.
I started by just showing cards where you just hover over any of them to get details about it. For the CSS, I decided to follow what Uniswap was doing, as it was the best looking crypto app I had seen so far.

To speed up development, I used Gatsby.js and built it as a purely front-end application.
At the time, I did not need any server side code and was happy to change it into a full stack app once I needed a database.
It allowed me to get a prototype up and running in a couple of days and start getting feedback on it.

Once I finished the cards view, I decided to add a table view as it would be easier to view, and I wanted the ability to sort my holdings based on price change, market cap, volume etc.
To do this quickly, I installed ant design and used its prebuilt components for faster development.

Wallet Search and Save
---------------------------

Subsequently, after finishing up the table view I decided I wanted the ability to search for any wallet instead of hard coding my public key and wanted the ability to save any wallet, 
so I don't have to search for it over and over again every time I refresh the page.
Although Etherscan can be used for this, the prices of low cap coins are mostly unavailable. 

Additionally, I wanted a better view and more organised way of looking at the coins in any eth wallet.
The idea behind it was to find public keys of good traders and follow closely how they trade to notice any useful trends I could use in my own trading strategy.


Conclusion
-------------

I really enjoyed making this first iteration and shared it with people I knew who were into Crypto.
I got a few feature requests by them and overall they really liked what I was doing which motivated me to continue working on this app.

You can view the video to the initial prototype here - https://www.youtube.com/watch?v=w_I0iFwtzW8 