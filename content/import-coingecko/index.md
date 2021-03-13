---
title: Import coins from coingecko
date: '2021-03-10'
image: "banner.jpg"
tags: ['announcement','feature']
author: "Jay Kumar"
---

Issues with late coin updates
-----------

Lately a lot of new coins have been popping up. It is understandable since it is a bull run, but as the only person doing development on this project it was starting to get out of hand.
I needed a way where the community could update the app themselves instead of me or anyone in future having the ability to add new coins. It was a simple process for me to do anyway so I decided to build a simple API and front end so that
anyone can import a coin as long as it's on coingecko. This gave me the idea of giving even more power over the app to the community.

Moving towards decentralising cerberus
-----------

I have decided to commit to eventually decentralise the entire app. For one, it would be a lot less overhead. Instead of hiring people to add new coins and asking projects to pay up like coingecko and coinmarket cap,
I would rather the community add projects themselves. I think it is the better way and would make cerberus a timeless app. Eventually I want to open source Cerberus code so 
devs can just update the site as well.

After pondering over how to go about doing this, I decided to start working on a node, which links to all exchanges and has a config file, the coin creators can update the config file with symbols and exchange names and run the node which
would automatically list their coin to Cerberus. This is more like an end-game feature, but I know it is not impossible to do. Would take a lot of community contribution, but I think it is the right way to do it.
Giving people back the power instead of charging projects to list them. 

I can make it so they need to hold some of Saren tokens to be able to add new coins, this way it would increase the token value and benefit the Saren community.

How to import any coin from coingecko
---------------------------

* Click on import coins in the top menu or go to [this link](https://cerberus.saren.io/add).
* Enter the name or symbol of the coin in the search bar.
* In the table with the results, go to the coin you think is the one you are looking for and click on the preview button next to it.
* Check the symbol and price of the coin to make sure it is the coin you are looking for.
* Click the confirm button and wait for the notification that it has been added to the system.
* Wait 2 minutes and refresh cerberus, the coin should be there.

This feature can be viewed [here](https://cerberus.saren.io/add).

If you have any issues using this feature make sure to let me know on the form [here](https://saren.io/#contact).