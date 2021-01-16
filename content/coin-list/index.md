---
title: Coin List
date: '2021-01-07'
image: "banner.jpg"
tags: ['story','feature']
author: "Jay Kumar"
---

New Features?
-----------

Now that I was satisfied with the analytics I was getting out of the coin page,I wanted to see more details about more coins.
Coins that I didn't own but wanted to, check up on old coins I had which did good and bad. I needed more perspective and insight on my own trading trends to see where I can improve better.

I was already getting data of other ERC20 tokens using their contract address, I thought maybe if I add the contract address as id in database and then fetch all this data, I could do it.
I could make a list of all the coins I wanted to see analytics of, add them to a database as ID, and fill their object with its data constantly and keep it updated. Much like a cache, but in a database.

Design
-----------

Once I had the data, it was time to display it. I wanted to do it in a very simplistic way but also it needed to be super fast. 
Being a millennial, my attention span is already low, I knew it would start to really annoy me if it was slow to load, and I did not want to wait for all the coins to load every time I changed the page.
I knew I could optimise the queries and get all the data super quick, now displaying it all together without the UI crashing was a challenge.

Although, I only had 200 coins in mind at first, I wanted to eventually take it to the next level with maybe thousand coins or more. I ended up using the Ant Design library and importing a table for it.
I have used it in a lot of my earlier projects and its super fast to get it up and running, I could do lazy loading and paging easily if I wanted to.


Conclusion
-------------

After I had an idea on how I was going to display it in my head. it was pretty straight forward to code it. I added options to sort using multiple criteria, like rank and market cap etc. 
But also the ability to sort together, I added priority to first rank then volume and so on, so if both rank and volume is selected it would first take the rank then the volume. 
I also added the ability to select how many coins you want to see in the table, if I had a portrait screen I could change it to 100 and if it was a normal widescreen I could switch to 50.