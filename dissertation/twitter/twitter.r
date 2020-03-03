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

tibbleGOT <- tibble(Text = gotTweets[,2])
tibbleGG  <- tibble(Text = gilmore[,2])

colnames(tibbleGG)[colnames(tibbleGG) == "Text"] <- "Text"

# Unnest and join with Affin
affinGOT <- tibbleGOT %>% unnest_tokens(word, Text) %>% inner_join(get_sentiments("afinn"))

affinGG <- tibbleGG %>% unnest_tokens(word, Text$text) %>% inner_join(get_sentiments("afinn"))



# Most popular word
# Try with bing
countGot <- tibbleGOT %>% unnest_tokens(word, Text) %>% inner_join(get_sentiments("afinn")) %>% count(word, sort = TRUE)
countGG  <- tibbleGG  %>% unnest_tokens(word, Text) %>% inner_join(get_sentiments("afinn")) %>% count(word, sort = TRUE)

simpsonsTopTen <- simpsonsAffinCounted %>%
  str(head)
                         
## scatter
# limit top 5 words
plotOne <- qplot(word, n, data = simpsonsAffinCounted)

## Ggplot
plotTwo <- ggplot(simpsonsAffinCounted, aes(word, n)) + geom_col(show.legend = TRUE);