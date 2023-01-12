---
layout: post
title: Discord Text Data Analysis
---
A data analysis project, finding out which words and phrases a person uses too often or too rarely compared to the average English speaker. 

## Motivation
I am passionate about improving my English writing and speaking skills. One of the bad habits I try to avoid when writing is using certain words and phrases too often without a good reason.

Therefore, I wanted to find out which words I was using too commonly (or too rarely) compared to the average English speaker. This data analysis project aims to find out just that.

## Process

1. Data Gathering & Storage
    1. I requested for my Discord message data as a ZIP archive of text files. Discord is an instant messaging platform which I have been actively using for more than 2 years now, so this is a good source of text data ![asdf](/images/discord-request-data.png)
    1. Setup a PostgreSQL database Docker container.
    1. Created the discord-to-postgresql Python library to parse the text data within the zipfile and store it in a PostgreSQL database
    1. Downloaded a sample of English text from Google BigQuery's public [Reddit comments dataset](https://www.reddit.com/r/bigquery/comments/kyjqbt/there_used_to_be_a_dataset_of_reddit_comments_on/) and filtered out the comments with 300 or more words. This sample of English messages will be used as comparison.
    1. Imported the sample to the already set-up PostgreSQL database.
1. Data Cleaning & Analysis
    1. Installed Jupyter notebook and wrote Python code to query all data from the PostgreSQL database & transform it to a list of sentences.
    1. Used the [clean-text](https://github.com/jfilter/clean-text) library for cleaning the sentences of any non-alphabetical characters https://github.com/jfilter/clean-text
    1. Used the [Natural Language Toolkit](https://www.nltk.org/) for tokenizing & lemmatizing, aka converting the sentences to lists of words and converting the words into their root forms.
    1. Generated frequency tables of all the words & phrases appearing within both datasets. (shown in the Results section)


### Architecture

![Project Architecture Image](/images/architecture-discord.png)

## Results

### Most used words

![1-grams results table image](/images/1grams.png)

The 3rd column is what we're interested in. Some words like "just" and "like" I indeed end up using a lot in conversations. Best not to use those words too often.

### Most used phrases

![2-grams results table image](/images/2grams.png)



![3-grams results table image](/images/3grams.png)


