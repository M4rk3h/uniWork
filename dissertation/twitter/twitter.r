#install.packages("twitteR")
library(twitteR)

# Change the next four lines based on your own consumer_key, consume_secret, access_token, and access_secret. 
consumer_key <- "RZyKt9rsw0btvU3HpfDKsZg7X"
consumer_secret <- "eQeXrgylP7xRY2s28VfiHj6mNw0LkBjKcjXTEEBpYFR7USnFBL"
access_token <- "755358007-0i1lZzq2D7PqGaYOEXcltvVdFoj4NVZumSEpiEy7"
access_secret <- "hhSfTxkNzXIHvpKaGCsiIqqMEEFryObljd8wllohz6Cen"


tw = twitteR::searchTwitter('#twinpeaks', n = 1e4, since = '2006-01-01', retryOnRateLimit = 1e3)
d = twitteR::twListToDF(tw)

# Export the file
write.csv(d, file = "C:/Users/MarkBaber/Documents/GitHub/uniWork/dissertation/twitter/twitterData.csv")