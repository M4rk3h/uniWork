#installs TwitteR
install.packages("twitteR")
#loads TwitteR 
library(twitteR) 
library(dplyr)
library(tidytext)
library(ggplot2)

# Change the next four lines based on your own consumer_key, consume_secret, access_token, and access_secret. 
myKey <- "JDqXGuZJo30VpV1BNeeUK98Nd"
mySecret <- "tzPKQvUaCeGHpLVKHFPA8xC8dXhybwQbErtpHOhVpC7oOOmkmx"
myAccessToken <- "755358007-C5LoiSufkyre0gBrKSuVJTdA2Pgz3fU8oHNqZW9q"
MyAccessSecret <- "KOStBWtiLthtTfy6qHXkfPw0VMfO2U86mODSW7jYQeke0"

# Set auth
setup_twitter_oauth(myKey,mySecret,myAccessToken,MyAccessSecret)
# Get tweets for GilmoreGirls
sixNations = twitteR::searchTwitter('#SixNations2020', n=3000, lang="en")
# Put the tweets into variable Ggirls
sixNationsTweets = twitteR::twListToDF(sixNations)
# Create a tibble
tibbleSN <- tibble(Text = sixNationsTweets[,1])
# Unnest and join with Affin
affinSN <- tibbleSN %>% unnest_tokens(word, Text) %>% inner_join(get_sentiments("afinn"))
# Most popular word
# Try with bing
countSN <- tibbleSN %>% unnest_tokens(word, Text) %>% inner_join(get_sentiments("afinn")) %>% count(word, sort = TRUE)
## Positives
snPositives <- affinSN %>% filter(value >= 0) 
## Negatives
snNegatives <- affinSN %>% filter(value <= 0) %>% count(word, sort = TRUE)
## WordCloud
library(wordcloud)
library(reshape2)
## Create WordCloud
snCloud <- countSN %>% with(countSN, !(word =="word")) %>% with (wordcloud(word, n, max.words = 500))

# Export the file
write.csv(tibbleSN, file = "six-nations.csv")