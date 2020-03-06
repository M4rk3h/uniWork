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

# Get tweets for GoT
gotTweets = twitteR::searchTwitter('#GameOfThrones', n=3000, lang="en")

# Put the tweets into variable got 
gotCsv = twitteR::twListToDF(gotTweets)

# Get tweets for GilmoreGirls
gGirl = twitteR::searchTwitter('#GilmoreGirls', n=3000, lang="en")

# Put the tweets into variable Ggirls
gGirlz = twitteR::twListToDF(gGirl)

# Export the file
write.csv(gotCsv, file = "GoT-tweets.csv")
write.csv(gGirlz, file = "gGirls-tweets.csv")

# Create a tibble

tibbleGOT <- tibble(Text = gotCsv[,1])
tibbleGG  <- tibble(Text = gGirlz[,1])

# Unnest and join with Affin
affinGOT <- tibbleGOT %>% unnest_tokens(word, Text) %>% inner_join(get_sentiments("afinn"))

affinGG <- tibbleGG %>% unnest_tokens(word, Text) %>% inner_join(get_sentiments("afinn"))

# Most popular word
# Try with bing
countGot <- tibbleGOT %>% unnest_tokens(word, Text) %>% inner_join(get_sentiments("afinn")) %>% count(word, sort = TRUE)
countGG  <- tibbleGG  %>% unnest_tokens(word, Text) %>% inner_join(get_sentiments("afinn")) %>% count(word, sort = TRUE)

## Positives
gotPositives <- affinGOT %>% filter(value >= 0) 
gotPosCount <- gotPositives %>% count(word, sort = TRUE)
ggPositives <- affinGG %>% filter(value >= 0) 
ggPosCount <- ggPositives %>% count(word, sort = TRUE)
## Negatives
gotNegatives <- affinGOT %>% filter(value <= 0) %>% count(word, sort = TRUE)
gotNegCount <- gotNegatives %>% count(word, sort = TRUE)
ggNegatives <- affinGG %>% filter(value <= 0) %>% count(word, sort = TRUE) 
ggNegCount <- ggNegatives 

library(wordcloud)
library(reshape2)

gotCloud <- countGot %>% with(countGot, !(word =="word")) %>% with (wordcloud(word, n, max.words = 100))
ggCloud <- countGG %>% with(countGG, !(word =="word")) %>% with (wordcloud(word, n, max.words = 100))