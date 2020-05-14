## Season 1 - Sentiment Analysis - Twin Peaks
## Mark Baber
## Load Libraries
library(dplyr)
library(tidytext)
library(tidyverse)
library(tidyr)
library(stringr)
library(readr)
library(textdata)
## Season 1
## Import Datasets
s1e1 <- read.csv("s1e1-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s1e2 <- read.csv("s1e2-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s1e3 <- read.csv("s1e3-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s1e4 <- read.csv("s1e4-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s1e5 <- read.csv("s1e5-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s1e6 <- read.csv("s1e6-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s1e7 <- read.csv("s1e7-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s1e8 <- read.csv("s1e8-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)

## create a tibble with the Episode ([,1]) & Words ([,2])
tibs1e1 <- tibble(Episode = s1e1[,1], Words = s1e1[,2])
tibs1e2 <- tibble(Episode = s1e2[,1], Words = s1e2[,2])
tibs1e3 <- tibble(Episode = s1e3[,1], Words = s1e3[,2])
tibs1e4 <- tibble(Episode = s1e4[,1], Words = s1e4[,2])
tibs1e5 <- tibble(Episode = s1e5[,1], Words = s1e5[,2])
tibs1e6 <- tibble(Episode = s1e6[,1], Words = s1e6[,2])
tibs1e7 <- tibble(Episode = s1e7[,1], Words = s1e7[,2])
tibs1e8 <- tibble(Episode = s1e8[,1], Words = s1e8[,2])

## Use Inner_Join with afinn
afinns1e1 <- tibs1e1 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
afinns1e2 <- tibs1e2 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
afinns1e3 <- tibs1e3 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
afinns1e4 <- tibs1e4 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
afinns1e5 <- tibs1e5 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
afinns1e6 <- tibs1e6 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
afinns1e7 <- tibs1e7 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
afinns1e8 <- tibs1e8 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))

## Unnest the words before dictionary
tokenS1E1 <- tibs1e1 %>% unnest_tokens(word, Words)
tokenS1E2 <- tibs1e2 %>% unnest_tokens(word, Words)
tokenS1E3 <- tibs1e3 %>% unnest_tokens(word, Words)
tokenS1E4 <- tibs1e4 %>% unnest_tokens(word, Words)
tokenS1E5 <- tibs1e5 %>% unnest_tokens(word, Words)
tokenS1E6 <- tibs1e6 %>% unnest_tokens(word, Words)
tokenS1E7 <- tibs1e7 %>% unnest_tokens(word, Words)
tokenS1E8 <- tibs1e8 %>% unnest_tokens(word, Words)

## Use Dictionary bing
bings1e1 <- tibs1e1 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("bing"))
bings1e2 <- tibs1e2 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("bing"))
bings1e3 <- tibs1e3 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("bing"))
bings1e4 <- tibs1e4 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("bing"))
bings1e5 <- tibs1e5 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("bing"))
bings1e6 <- tibs1e6 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("bing"))
bings1e7 <- tibs1e7 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("bing"))
bings1e8 <- tibs1e8 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("bing"))
## Count afinn
countafinns1e1 <- count(afinns1e1, vars = "Episode")
countafinns1e2 <- count(afinns1e2, vars = "Episode")
countafinns1e3 <- count(afinns1e3, vars = "Episode")
countafinns1e4 <- count(afinns1e4, vars = "Episode")
countafinns1e5 <- count(afinns1e5, vars = "Episode")
countafinns1e6 <- count(afinns1e6, vars = "Episode")
countafinns1e7 <- count(afinns1e7, vars = "Episode")
countafinns1e8 <- count(afinns1e8, vars = "Episode")
## Count bing
countbings1e1 <- count(bings1e1, vars = "Episode")
countbings1e2 <- count(bings1e2, vars = "Episode")
countbings1e3 <- count(bings1e3, vars = "Episode")
countbings1e4 <- count(bings1e4, vars = "Episode")
countbings1e5 <- count(bings1e5, vars = "Episode")
countbings1e6 <- count(bings1e6, vars = "Episode")
countbings1e7 <- count(bings1e7, vars = "Episode")
countbings1e8 <- count(bings1e8, vars = "Episode")
## POSITIVES
## afinn Filter Positive
positiveafinns1e1 <- afinns1e1 %>% filter(value >= 0)
positiveafinns1e2 <- afinns1e2 %>% filter(value >= 0)
positiveafinns1e3 <- afinns1e3 %>% filter(value >= 0)
positiveafinns1e4 <- afinns1e4 %>% filter(value >= 0)
positiveafinns1e5 <- afinns1e5 %>% filter(value >= 0)
positiveafinns1e6 <- afinns1e6 %>% filter(value >= 0)
positiveafinns1e7 <- afinns1e7 %>% filter(value >= 0)
positiveafinns1e8 <- afinns1e8 %>% filter(value >= 0)
## bing Filter Positive
positivebings1e1 <- bings1e1 %>% filter(sentiment == 'positive')
positivebings1e2 <- bings1e2 %>% filter(sentiment == 'positive')
positivebings1e3 <- bings1e3 %>% filter(sentiment == 'positive')
positivebings1e4 <- bings1e4 %>% filter(sentiment == 'positive')
positivebings1e5 <- bings1e5 %>% filter(sentiment == 'positive')
positivebings1e6 <- bings1e6 %>% filter(sentiment == 'positive')
positivebings1e7 <- bings1e7 %>% filter(sentiment == 'positive')
positivebings1e8 <- bings1e8 %>% filter(sentiment == 'positive')
## afinn Count Positives
countPAs1e1 <- count(positiveafinns1e1, vars = "Episode")
countPAs1e2 <- count(positiveafinns1e2, vars = "Episode")
countPAs1e3 <- count(positiveafinns1e3, vars = "Episode")
countPAs1e4 <- count(positiveafinns1e4, vars = "Episode")
countPAs1e5 <- count(positiveafinns1e5, vars = "Episode")
countPAs1e6 <- count(positiveafinns1e6, vars = "Episode")
countPAs1e7 <- count(positiveafinns1e7, vars = "Episode")
countPAs1e8 <- count(positiveafinns1e8, vars = "Episode")
## bing Count Positives
countPBs1e1 <- count(positivebings1e1, vars = "Episode")
countPBs1e2 <- count(positivebings1e2, vars = "Episode")
countPBs1e3 <- count(positivebings1e3, vars = "Episode")
countPBs1e4 <- count(positivebings1e4, vars = "Episode")
countPBs1e5 <- count(positivebings1e5, vars = "Episode")
countPBs1e6 <- count(positivebings1e6, vars = "Episode")
countPBs1e7 <- count(positivebings1e7, vars = "Episode")
countPBs1e8 <- count(positivebings1e8, vars = "Episode")
## NEGATIVES
## afinn Filter Negative
negativeafinns1e1 <- afinns1e1 %>% filter(value <= 0)
negativeafinns1e2 <- afinns1e2 %>% filter(value <= 0)
negativeafinns1e3 <- afinns1e3 %>% filter(value <= 0)
negativeafinns1e4 <- afinns1e4 %>% filter(value <= 0)
negativeafinns1e5 <- afinns1e5 %>% filter(value <= 0)
negativeafinns1e6 <- afinns1e6 %>% filter(value <= 0)
negativeafinns1e7 <- afinns1e7 %>% filter(value <= 0)
negativeafinns1e8 <- afinns1e8 %>% filter(value <= 0)
## bing Filter Negative
negativebings1e1 <- bings1e1 %>% filter(sentiment == 'negative')
negativebings1e2 <- bings1e2 %>% filter(sentiment == 'negative')
negativebings1e3 <- bings1e3 %>% filter(sentiment == 'negative')
negativebings1e4 <- bings1e4 %>% filter(sentiment == 'negative')
negativebings1e5 <- bings1e5 %>% filter(sentiment == 'negative')
negativebings1e6 <- bings1e6 %>% filter(sentiment == 'negative')
negativebings1e7 <- bings1e7 %>% filter(sentiment == 'negative')
negativebings1e8 <- bings1e8 %>% filter(sentiment == 'negative')
## afinn Count Negatives
countNAs1e1 <- count(negativeafinns1e1, vars = "Episode")
countNAs1e2 <- count(negativeafinns1e2, vars = "Episode")
countNAs1e3 <- count(negativeafinns1e3, vars = "Episode")
countNAs1e4 <- count(negativeafinns1e4, vars = "Episode")
countNAs1e5 <- count(negativeafinns1e5, vars = "Episode")
countNAs1e6 <- count(negativeafinns1e6, vars = "Episode")
countNAs1e7 <- count(negativeafinns1e7, vars = "Episode")
countNAs1e8 <- count(negativeafinns1e8, vars = "Episode")
## bing Count Negatives
countNBs1e1 <- count(negativebings1e1, vars = "Episode")
countNBs1e2 <- count(negativebings1e2, vars = "Episode")
countNBs1e3 <- count(negativebings1e3, vars = "Episode")
countNBs1e4 <- count(negativebings1e4, vars = "Episode")
countNBs1e5 <- count(negativebings1e5, vars = "Episode")
countNBs1e6 <- count(negativebings1e6, vars = "Episode")
countNBs1e7 <- count(negativebings1e7, vars = "Episode")
countNBs1e8 <- count(negativebings1e8, vars = "Episode")
## Top 10 Positive words
## afinn
s1e1Posafinn <- positiveafinns1e1 %>% count(word) %>% arrange(desc(n))
s1e2Posafinn <- positiveafinns1e2 %>% count(word) %>% arrange(desc(n))
s1e3Posafinn <- positiveafinns1e3 %>% count(word) %>% arrange(desc(n))
s1e4Posafinn <- positiveafinns1e4 %>% count(word) %>% arrange(desc(n))
s1e5Posafinn <- positiveafinns1e5 %>% count(word) %>% arrange(desc(n))
s1e6Posafinn <- positiveafinns1e6 %>% count(word) %>% arrange(desc(n))
s1e7Posafinn <- positiveafinns1e7 %>% count(word) %>% arrange(desc(n))
s1e8Posafinn <- positiveafinns1e8 %>% count(word) %>% arrange(desc(n))
## bing
s1e1Posbing <- positivebings1e1 %>% count(word) %>% arrange(desc(n))
s1e2Posbing <- positivebings1e2 %>% count(word) %>% arrange(desc(n))
s1e3Posbing <- positivebings1e3 %>% count(word) %>% arrange(desc(n))
s1e4Posbing <- positivebings1e4 %>% count(word) %>% arrange(desc(n))
s1e5Posbing <- positivebings1e5 %>% count(word) %>% arrange(desc(n))
s1e6Posbing <- positivebings1e6 %>% count(word) %>% arrange(desc(n))
s1e7Posbing <- positivebings1e7 %>% count(word) %>% arrange(desc(n))
s1e8Posbing <- positivebings1e8 %>% count(word) %>% arrange(desc(n))
## Top 10 Negative words
## afinn
s1e1Negafinn <- negativeafinns1e1 %>% count(word) %>% arrange(desc(n))
s1e2Negafinn <- negativeafinns1e2 %>% count(word) %>% arrange(desc(n))
s1e3Negafinn <- negativeafinns1e3 %>% count(word) %>% arrange(desc(n))
s1e4Negafinn <- negativeafinns1e4 %>% count(word) %>% arrange(desc(n))
s1e5Negafinn <- negativeafinns1e5 %>% count(word) %>% arrange(desc(n))
s1e6Negafinn <- negativeafinns1e6 %>% count(word) %>% arrange(desc(n))
s1e7Negafinn <- negativeafinns1e7 %>% count(word) %>% arrange(desc(n))
s1e8Negafinn <- negativeafinns1e8 %>% count(word) %>% arrange(desc(n))
## bing
s1e1Negbing <- negativebings1e1 %>% count(word) %>% arrange(desc(n))
s1e2Negbing <- negativebings1e2 %>% count(word) %>% arrange(desc(n))
s1e3Negbing <- negativebings1e3 %>% count(word) %>% arrange(desc(n))
s1e4Negbing <- negativebings1e4 %>% count(word) %>% arrange(desc(n))
s1e5Negbing <- negativebings1e5 %>% count(word) %>% arrange(desc(n))
s1e6Negbing <- negativebings1e6 %>% count(word) %>% arrange(desc(n))
s1e7Negbing <- negativebings1e7 %>% count(word) %>% arrange(desc(n))
s1e8Negbing <- negativebings1e8 %>% count(word) %>% arrange(desc(n))

## Save Season 1 afinns
# Positive
write.csv(s1e1Posafinn, file = "top-ten/season1/Posafinns1e1.csv")
write.csv(s1e2Posafinn, file = "top-ten/season1/Posafinns1e2.csv")
write.csv(s1e3Posafinn, file = "top-ten/season1/Posafinns1e3.csv")
write.csv(s1e4Posafinn, file = "top-ten/season1/Posafinns1e4.csv")
write.csv(s1e5Posafinn, file = "top-ten/season1/Posafinns1e5.csv")
write.csv(s1e6Posafinn, file = "top-ten/season1/Posafinns1e6.csv")
write.csv(s1e7Posafinn, file = "top-ten/season1/Posafinns1e7.csv")
write.csv(s1e8Posafinn, file = "top-ten/season1/Posafinns1e8.csv")
# Negative
write.csv(s1e1Negafinn, file = "top-ten/season1/Negafinns1e1.csv")
write.csv(s1e2Negafinn, file = "top-ten/season1/Negafinns1e2.csv")
write.csv(s1e3Negafinn, file = "top-ten/season1/Negafinns1e3.csv")
write.csv(s1e4Negafinn, file = "top-ten/season1/Negafinns1e4.csv")
write.csv(s1e5Negafinn, file = "top-ten/season1/Negafinns1e5.csv")
write.csv(s1e6Negafinn, file = "top-ten/season1/Negafinns1e6.csv")
write.csv(s1e7Negafinn, file = "top-ten/season1/Negafinns1e7.csv")
write.csv(s1e8Negafinn, file = "top-ten/season1/Negafinns1e8.csv")
## Save Season 1 bings
# Positive
write.csv(s1e1Posbing, file = "top-ten/season1/Posbings1e1.csv")
write.csv(s1e2Posbing, file = "top-ten/season1/Posbings1e2.csv")
write.csv(s1e3Posbing, file = "top-ten/season1/Posbings1e3.csv")
write.csv(s1e4Posbing, file = "top-ten/season1/Posbings1e4.csv")
write.csv(s1e5Posbing, file = "top-ten/season1/Posbings1e5.csv")
write.csv(s1e6Posbing, file = "top-ten/season1/Posbings1e6.csv")
write.csv(s1e7Posbing, file = "top-ten/season1/Posbings1e7.csv")
write.csv(s1e8Posbing, file = "top-ten/season1/Posbings1e8.csv")
# Negative
write.csv(s1e1Negbing, file = "top-ten/season1/Negbings1e1.csv")
write.csv(s1e2Negbing, file = "top-ten/season1/Negbings1e2.csv")
write.csv(s1e3Negbing, file = "top-ten/season1/Negbings1e3.csv")
write.csv(s1e4Negbing, file = "top-ten/season1/Negbings1e4.csv")
write.csv(s1e5Negbing, file = "top-ten/season1/Negbings1e5.csv")
write.csv(s1e6Negbing, file = "top-ten/season1/Negbings1e6.csv")
write.csv(s1e7Negbing, file = "top-ten/season1/Negbings1e7.csv")
write.csv(s1e8Negbing, file = "top-ten/season1/Negbings1e8.csv")


## Season One has all episodes tokenized.
seasonOne <- bind_rows(tokenS1E1,tokenS1E2,tokenS1E3,tokenS1E4,tokenS1E5,tokenS1E6,tokenS1E7,tokenS1E8)

## Positive Words, with value and count
affinPosS1 <- seasonOne %>% inner_join(get_sentiments('afinn')) %>%
  count(word, value, sort = TRUE) %>% ungroup() %>% filter(value >= 1)
## Negative Words, with value and count
affinNegS1 <- seasonOne %>% inner_join(get_sentiments('afinn')) %>%
  count(word, value, sort = TRUE) %>% ungroup() %>% filter(value <= -1)
## Count the bing words.
countBingS1 <- seasonOne %>% inner_join(get_sentiments('bing')) %>%
  count(word, sentiment, sort = TRUE) %>% ungroup()

## Save them both out
write.csv(affinPosS1, file = "top-ten/#APS1.csv")
write.csv(affinNegS1, file = "top-ten/#ANS1.csv")
write.csv(countBingS1, file = "top-ten/#BS1.csv")