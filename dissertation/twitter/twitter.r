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
# 
tw = twitteR::searchTwitter('#simpsons', n=3000, lang="en")
#
d = twitteR::twListToDF(tw)
# Export the file
write.csv(d, file = "simpsonsTest.csv")
# Read the simpsonsTest
simpsonsTest <- read.csv("simpsonsTest.csv", stringsAsFactors = FALSE)
# Create a tibble
simpsonsTib <- tibble(No = simpsonsTest[,1], Words =simpsonsTest[,2])
# Unnest and join with Affin
simpsonsAffin <- simpsonsTib %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))

# Most popular word
simpsonsAffinCounted <- simpsonsTib %>% 
  unnest_tokens(word, Words) %>% 
  inner_join(get_sentiments("afinn")) %>%
  count(word, sort = TRUE)

simpsonsTopTen <- simpsonsAffinCounted %>%
  str(head)
                         
  

## scatter
qplot(word, n, data = simpsonsAffinCounted)

## Ggplot
ggplot(simpsonsAffinCounted, aes(word, n)) +
  geom_col(show.legend = TRUE);




