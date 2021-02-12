---
title: Migrating from AWS to Digital Ocean
date: '2021-02-07'
image: "banner.png"
tags: ['story','feature']
author: "Jay Kumar"
---


Issues with AWS
-----------
At my last job I used AWS quite frequently. It was a shopify E-commerce, and I had to sync the orders with a MongoDB Atlas cluster to be able to run custom analytics on it on demand.
I got quite good at firing up new ec2 instances for all sorts of stuff, making data scrapers, deploying full-stack dashboards, monitoring server usages, firewalls etc.

I was quite comfortable using AWS so for Cerberus I decided to use AWS as well. One thing I did not realise was although AWS had the best service, the data transfer in and out of instances
was capped at 30 GB. With all the coins being updated every 5 minutes, I was doing TerraBytes of data, specially the market tickers for charts, they were in 100s of MegaBytes for each coin.
I started looking for solutions but almost all major services had the same limitations, they would start charging you per GB of transfer after the initial threshold (30 GB in this case).

Database Limitations
-----------
Mongo Atlas has its internal limitations, and they throttle you after 10 GB of transfer on the free M0 cluster. They go up to 50 GB for the M5 cluster which is I think $29 USD (long time ago so don't remember).
I had to upgrade to M10 as it is not a shared cluster, which means you have unlimited data transfer. This was costing me $89 a month, and they were using AWS to host it. 

You do have a choice in atlas on choosing AWS, Azure or Google Cloud before you fire up a cluster. Little did I know they were going to charge me data transfer fees anyway, so all that 
unlimited data transfer was all for naught. I got a bill of $450 on 1'st of February 2021. Now I am just a uni student so this is a lot of money for me. Personally I found this a bit cheeky
on their part and kind of disingenuous. 

Now I really wanted to migrate because I was really not in favour of AWS after they had banned parler, it was not anything political but a point of principal for me. 
I started getting involved in Crypto because of censorship, and I had planned moving away from AWS a while ago. I guess this was the reason I needed to finally take the plunge. 

Migration
-----------
I did some experimenting with Digital Ocean before when I was running a [SWARM](https://www.swarmnetwork.org/) masternode back in 2018. I really liked the transparency in their invoice and the UI.
I looked up MongoDB documentation and decided to host it myself. I realised I could do it for $5 a month on the lowest Digital Ocean droplet what I was paying Mongo and AWS $450 for.
Specially with constantly adding new coins, the data transfer kept increasing. 

I also decided to switch all my data scrapers (that collect all the coin data) to Digital Ocean. Might as well migrate completely to DO. 

Conclusion
-------------

I was paying around $700-$800 a month on server costs as of January 2021 on the Saren projects.
Switching to Digital Ocean I have brought it down to $40 a month for 8 servers. In hindsight AWS seemed like the best option, but they don't have any transparency on how they calculate data transfers etc.
Digital Ocean has charts that you can live monitor the data transfer and overall it had a much better UI experience. As a predominantly Front-End developer I would cringe every time I saw
the AWS dashboard, I mean they have billions of dollars, I bet their development budged is over $50 M a year, but still the incompetence is baffling to me.