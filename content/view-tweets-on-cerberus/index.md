---
title: "View tweets on Cerberus"
date: "2021-04-02"
image: "banner.png"
tags: ['announcement','feature']
author: "Jay Kumar"
---

Manually checking tweets on page
-----------

Up until now I have had to manually check for each coins updates on their Twitter feed. I don't use social media that
often as I don't get much time, so for me it is particularly painful to go and find the twitter handle then go to
Twitter then search a companies page and look for the recent tweets. This gave me the idea that I could directly
integrate the tweets on **[Cerberus](https://cerberus.saren.io)**.

Building a scalable solution
----------
Although, I could grab every tweet mentions the ticker or companies handle, there would be 100s of tweets that contain a
lot of noise and useless information. I had to filter out somehow if there are any new announcements for the company.

I decided I would go for the top 10 tweets in the last 7 days. After going through countless Twitter feeds over the
years, I feel like this is the best way to filter latest announcements for a coin.

I also want to be able to go to the exact tweet from **[Cerberus](https://cerberus.saren.io)** so I decided to make it
clickable as well.

Feature
------------------
<img src="https://blog.saren.io/assets/view-tweets-on-cerberus/twitter-feed.svg" alt="Twitter Feed"/>

The tweets feature shows each tweet in text and is clickable. You can view up to 10 tweets from the last 7 days. Number
of comments, likes and retweets can also be viewed from the **[Cerberus](https://cerberus.saren.io)** UI. I want to
make **[Cerberus](https://cerberus.saren.io)**  as simple to use as possible and this solution fits perfectly with the
design language. 

