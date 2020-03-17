#installs TwitteR
install.packages("twitteR")
install.packages("tidyverse")
install.packages("textdata")
#loads TwitteR 
library(twitteR) 
library(dplyr)
library(tidytext)
library(ggplot2)
library(tidyverse)
library(tidyr)
library(stringr)
library(readr)
library(textdata)

# Change the next four lines based on your own consumer_key, consume_secret, access_token, and access_secret. 
myKey <- "L4RX6Eqv2AF8FUkJpifKenFa2"
mySecret <- "hfvFd3aYrYptmkhKeQxEF6hjg8iQkyeP0hFTnKMc4ntD2zegVp"
myAccessToken <- "755358007-sWNj4mGBoTZYaNoKxFpo7oyVMxnFRiWYWqpXFifI"
MyAccessSecret <- "z5jYKRCmr0CNUUQZZOVyuRRPHnXLcdY3DcScIQBr40n7V"

# Set auth
setup_twitter_oauth(myKey,mySecret,myAccessToken,MyAccessSecret)
# Get tweets 
tps1 = twitteR::searchTwitter('#TwinPeaks', n=3000, lang="en")
# Put the tweets into variable 
tpTweets = twitteR::twListToDF(tps1)
# Create a tibble
tibbleTP <- tibble(Text = tpTweets[,1])
# Unnest and join with Affin
affinTP <- tibbleTP %>% unnest_tokens(word, Text) %>% inner_join(get_sentiments("afinn"))
# Most popular word
# Try with bing
countTP <- tibbleTP %>% unnest_tokens(word, Text) %>% inner_join(get_sentiments("afinn")) %>% count(word, sort = TRUE)
## Positives
TPPositives <- affinTP %>% filter(value >= 0) %>% count(word, sort = TRUE)
## Negatives
TPNegatives <- affinTP %>% filter(value <= 0) %>% count(word, sort = TRUE)
## WordCloud
library(wordcloud)
library(reshape2)
## Create WordCloud
TPCloud1 <- countTP %>% with(countTP, !(word =="word")) %>% with (wordcloud(word, n, max.words = 500))
TPCloud2 <- TPPositives %>% with(TPPositives, !(word =="word")) %>% with (wordcloud(word, n, max.words = 500))
TPCloud3 <- TPNegatives %>% with(TPNegatives, !(word =="word")) %>% with (wordcloud(word, n, max.words = 500))
# Export the file
write.csv(tibbleSN, file = "six-nations.csv")