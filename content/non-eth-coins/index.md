---
title: Non ERC20 Coins
date: '2021-01-08'
image: "banner.jpg"
tags: ['story','feature']
author: "Jay Kumar"
---

Architecture
-----------

After finishing the ERC20 list. I now wanted to check analytics for other coins I was holding. Coins like bitcoin and polkadot. 
I knew how to get the data for it but I had been using contract address as the id for all my coins so far. So now I had to use a different key for the ID in order to maintain consistency within the app.
I decided to use the symbol for the ID and left the contract address as the ID for the previous coins. 

At some point in the future I probably will redo the entire server with better architecture and visit the key again.

Additional Features
-------------

Subsequently, I decided to add trending to my app to get trending and most searched coins. By this point the app started getting interest and I was getting emails from people with suggestions.
One of the suggestions I really liked was adding favourites. It needed to be user specific but I did not want to store any user data. 

As a user myself, I hated the idea of having to log in just for my favourites every time. I am pretty lazy so I knew I would never do it, I just wanted the favourites to be there as soon as I open the site.
Furthermore, I believe in simplistic design, and user accounts just sounded to cluttered to me. 
I decided to store the favourites in local storage and using react hooks, I loaded the favourites as soon as someone opened the site, if they had any favourites that is. 
This seemed to be the fastest and least complicated solution for me as both a designer and a user.

Conclusion
-------------

As I was adding these features, the project kept getting bigger and bigger. I started it as just a webpage to view what coins I held and now I had all this data of over 500 coins. 
It really started to motivate me into creating something bigger and maybe build it into a DAPP.

**Note:** The current site is not much different than this update, to view this update just load - https://cerberus.saren.io/