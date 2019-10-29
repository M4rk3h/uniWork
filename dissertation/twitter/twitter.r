#install.packages("twitteR")
library(twitteR)

# Change the next four lines based on your own consumer_key, consume_secret, access_token, and access_secret. 
consumer_key <- "ntFFMzu9lUgvQEx6QPipUK4Q9"
consumer_secret <- "fsD4iPE9LZl741zV4qq53CETenq1MKLMy1dNKbQgpvWa3EcYWz"
access_token <- "755358007-4BpQwTZmdsXCfku18GPjpTDLki5uhjA275CloRcF"
access_secret <- "ZkeTMqGDeMCXgCLoGU9ayBrq17qmGeGbVPG22ndFJ73rT"

setup_twitter_oauth(consumer_key, consumer_secret, access_token, access_secret)
tw = twitteR::searchTwitter('#twinpeaks', n = 1e4, since = '2016-11-08', retryOnRateLimit = 1e3)
d = twitteR::twListToDF(tw)