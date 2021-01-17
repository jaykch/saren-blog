---
title: Charts and UI fixes
date: '2021-01-10'
image: "banner.jpg"
tags: ['story','feature']
author: "Jay Kumar"
---


Version 1
-----------
Now was the time to just wrap up everything and finish the initial version. 
When I started this app, I had no idea it was going to be a full-blown DAPP with all the information I would need to help me with my trading.
I had a lot of fun building it and made a few good contacts along the way, nothing special, just really cool guys who were interested in my project.
There were a lot of bugs, and I had a huge to-do list to go through, but I was fairly confident I could do it all within a week. 

Now that my university sem was over, I could spend an entire week on this to finish the charts and fix all the bugs.

Chart Data
-----------
I started with gathering 24h chart data. I wanted this completely separate from the other data I was collection, so I ended up building a brand-new server just for this.
As I was building it, I realised how easy it was to get all the interval data like 90 day, 30 day and so on. 
I ended up building 2 servers, one would collect the 24h chart data and update it every 15 minutes, and the other would collect all the other intervals sequentially for all coins every 2 hours.

Design
-----------

I really liked the Uniswap info chart design, they were just way more intuitive than the regular candlestick charts. I opened their github to figure out which library they were using. 
I had never used Re-Charts before, but their API looked fairly straight-forward and sure enough, it was a very pleasant experience to build these charts with [Recharts](https://recharts.org/en-US).

Bug Fixes and Improvements
----------

I had accumulated a list of many bugs and issues over the course of the past few months. Some major ones are mentioned below:
* Better regex for URL display in market info section.
* Better regex for description of each coin to include new lines.
* Entire wallet UI was broken on Tablet.
* New and improved table mode for Wallet.
* Empty coins crashing the wallet.

Fixing these was tedious but sure enough, I got through it and finalised it.

Conclusion
-------------

Overall I had a blast building this app and somewhat proud that I was using my own app exclusively instead of any other for all my trading needs. 
Of course, I still had to use binance and Uniswap for the actual trading, but I am glad I can do all the research through my app.

The app can be viewed [here](https://cerberus.saren.io).