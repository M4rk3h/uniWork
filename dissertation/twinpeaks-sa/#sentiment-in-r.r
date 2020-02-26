library(dplyr)
library(tidytext)
library(tidyverse)
library(tidyr)
library(stringr)
library(readr)


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

## Use Inner_Join with Affin
affins1e1 <- tibs1e1 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins1e2 <- tibs1e2 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins1e3 <- tibs1e3 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins1e4 <- tibs1e4 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins1e5 <- tibs1e5 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins1e6 <- tibs1e6 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins1e7 <- tibs1e7 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins1e8 <- tibs1e8 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))

## Count
counts1e1 <- count(affins1e1, vars = "Episode")
counts1e2 <- count(affins1e2, vars = "Episode")
counts1e3 <- count(affins1e3, vars = "Episode")
counts1e4 <- count(affins1e4, vars = "Episode")
counts1e5 <- count(affins1e5, vars = "Episode")
counts1e6 <- count(affins1e6, vars = "Episode")
counts1e7 <- count(affins1e7, vars = "Episode")
counts1e8 <- count(affins1e8, vars = "Episode")

## Filter Positive
positives1e1 <- affins1e1 %>% filter(value >= 0)
positives1e2 <- affins1e2 %>% filter(value >= 0)
positives1e3 <- affins1e3 %>% filter(value >= 0)
positives1e4 <- affins1e4 %>% filter(value >= 0)
positives1e5 <- affins1e5 %>% filter(value >= 0)
positives1e6 <- affins1e6 %>% filter(value >= 0)
positives1e7 <- affins1e7 %>% filter(value >= 0)
positives1e8 <- affins1e8 %>% filter(value >= 0)

## Count Positives
countPs1e1 <- count(positives1e1, vars = "Episode")
countPs1e2 <- count(positives1e2, vars = "Episode")
countPs1e3 <- count(positives1e3, vars = "Episode")
countPs1e4 <- count(positives1e4, vars = "Episode")
countPs1e5 <- count(positives1e5, vars = "Episode")
countPs1e6 <- count(positives1e6, vars = "Episode")
countPs1e7 <- count(positives1e7, vars = "Episode")
countPs1e8 <- count(positives1e8, vars = "Episode")

## Filter Negative
negatives1e1 <- affins1e1 %>% filter(value <= 0)
negatives1e2 <- affins1e2 %>% filter(value <= 0)
negatives1e3 <- affins1e3 %>% filter(value <= 0)
negatives1e4 <- affins1e4 %>% filter(value <= 0)
negatives1e5 <- affins1e5 %>% filter(value <= 0)
negatives1e6 <- affins1e6 %>% filter(value <= 0)
negatives1e7 <- affins1e7 %>% filter(value <= 0)
negatives1e8 <- affins1e8 %>% filter(value <= 0)

## Count Negatives
countNs1e1 <- count(negatives1e1, vars = "Episode")
countNs1e2 <- count(negatives1e2, vars = "Episode")
countNs1e3 <- count(negatives1e3, vars = "Episode")
countNs1e4 <- count(negatives1e4, vars = "Episode")
countNs1e5 <- count(negatives1e5, vars = "Episode")
countNs1e6 <- count(negatives1e6, vars = "Episode")
countNs1e7 <- count(negatives1e7, vars = "Episode")
countNs1e8 <- count(negatives1e8, vars = "Episode")

## Season 2
## Import Datasets
s2e1 <- read.csv("s2e1-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e2 <- read.csv("s2e2-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e3 <- read.csv("s2e3-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e4 <- read.csv("s2e4-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e5 <- read.csv("s2e5-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e6 <- read.csv("s2e6-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e7 <- read.csv("s2e7-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e8 <- read.csv("s2e8-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e9 <- read.csv("s2e9-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e10 <- read.csv("s2e10-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e11 <- read.csv("s2e11-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e12 <- read.csv("s2e12-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e13 <- read.csv("s2e13-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e14 <- read.csv("s2e14-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e15 <- read.csv("s2e15-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e16 <- read.csv("s2e16-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e17 <- read.csv("s2e17-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e18 <- read.csv("s2e18-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e19 <- read.csv("s2e19-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e20 <- read.csv("s2e20-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e21 <- read.csv("s2e21-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s2e22 <- read.csv("s2e22-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)

## create a tibble with the Episode ([,1]) & Words ([,2])
tibs2e1 <- tibble(Episode = s2e1[,1], Words = s2e1[,2])
tibs2e2 <- tibble(Episode = s2e2[,1], Words = s2e2[,2])
tibs2e3 <- tibble(Episode = s2e3[,1], Words = s2e3[,2])
tibs2e4 <- tibble(Episode = s2e4[,1], Words = s2e4[,2])
tibs2e5 <- tibble(Episode = s2e5[,1], Words = s2e5[,2])
tibs2e6 <- tibble(Episode = s2e6[,1], Words = s2e6[,2])
tibs2e7 <- tibble(Episode = s2e7[,1], Words = s2e7[,2])
tibs2e8 <- tibble(Episode = s2e8[,1], Words = s2e8[,2])
tibs2e9 <- tibble(Episode = s2e9[,1], Words = s2e9[,2])
tibs2e10 <- tibble(Episode = s2e10[,1], Words = s2e10[,2])
tibs2e11 <- tibble(Episode = s2e11[,1], Words = s2e11[,2])
tibs2e12 <- tibble(Episode = s2e12[,1], Words = s2e12[,2])
tibs2e13 <- tibble(Episode = s2e13[,1], Words = s2e13[,2])
tibs2e14 <- tibble(Episode = s2e14[,1], Words = s2e14[,2])
tibs2e15 <- tibble(Episode = s2e15[,1], Words = s2e15[,2])
tibs2e16 <- tibble(Episode = s2e16[,1], Words = s2e16[,2])
tibs2e17 <- tibble(Episode = s2e17[,1], Words = s2e17[,2])
tibs2e18 <- tibble(Episode = s2e18[,1], Words = s2e18[,2])
tibs2e19 <- tibble(Episode = s2e19[,1], Words = s2e19[,2])
tibs2e20 <- tibble(Episode = s2e20[,1], Words = s2e20[,2])
tibs2e21 <- tibble(Episode = s2e21[,1], Words = s2e21[,2])
tibs2e22 <- tibble(Episode = s2e22[,1], Words = s2e22[,2])

## Use Inner_Join with Affin
affins2e1 <- tibs2e1 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e2 <- tibs2e2 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e3 <- tibs2e3 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e4 <- tibs2e4 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e5 <- tibs2e5 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e6 <- tibs2e6 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e7 <- tibs2e7 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e8 <- tibs2e8 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e9 <- tibs2e9 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e10 <- tibs2e10 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e11 <- tibs2e11 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e12 <- tibs2e12 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e13 <- tibs2e13 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e14 <- tibs2e14 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e15 <- tibs2e15 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e16 <- tibs2e16 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e17 <- tibs2e17 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e18 <- tibs2e18 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e19 <- tibs2e19 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e20 <- tibs2e20 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e21 <- tibs2e21 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins2e22 <- tibs2e22 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))

## Count
counts2e1 <- count(affins2e1, vars = "Episode")
counts2e2 <- count(affins2e2, vars = "Episode")
counts2e3 <- count(affins2e3, vars = "Episode")
counts2e4 <- count(affins2e4, vars = "Episode")
counts2e5 <- count(affins2e5, vars = "Episode")
counts2e6 <- count(affins2e6, vars = "Episode")
counts2e7 <- count(affins2e7, vars = "Episode")
counts2e8 <- count(affins2e8, vars = "Episode")
counts2e9 <- count(affins2e9, vars = "Episode")
counts2e10 <- count(affins2e10, vars = "Episode")
counts2e11 <- count(affins2e11, vars = "Episode")
counts2e12 <- count(affins2e12, vars = "Episode")
counts2e13 <- count(affins2e13, vars = "Episode")
counts2e14 <- count(affins2e14, vars = "Episode")
counts2e15 <- count(affins2e15, vars = "Episode")
counts2e16 <- count(affins2e16, vars = "Episode")
counts2e17 <- count(affins2e17, vars = "Episode")
counts2e18 <- count(affins2e18, vars = "Episode")
counts2e19 <- count(affins2e19, vars = "Episode")
counts2e20 <- count(affins2e20, vars = "Episode")
counts2e21 <- count(affins2e21, vars = "Episode")
counts2e22 <- count(affins2e22, vars = "Episode")

## Filter Positive
positives2e1 <-  affins2e1 %>% filter(value >= 0)
positives2e2 <-  affins2e2 %>% filter(value >= 0)
positives2e3 <-  affins2e3 %>% filter(value >= 0)
positives2e4 <-  affins2e4 %>% filter(value >= 0)
positives2e5 <-  affins2e5 %>% filter(value >= 0)
positives2e6 <-  affins2e6 %>% filter(value >= 0)
positives2e7 <-  affins2e7 %>% filter(value >= 0)
positives2e8 <-  affins2e8 %>% filter(value >= 0)
positives2e9 <-  affins2e9 %>% filter(value >= 0)
positives2e10 <- affins2e10 %>% filter(value >= 0)
positives2e11 <- affins2e11 %>% filter(value >= 0)
positives2e12 <- affins2e12 %>% filter(value >= 0)
positives2e13 <- affins2e13 %>% filter(value >= 0)
positives2e14 <- affins2e14 %>% filter(value >= 0)
positives2e15 <- affins2e15 %>% filter(value >= 0)
positives2e16 <- affins2e16 %>% filter(value >= 0)
positives2e17 <- affins2e17 %>% filter(value >= 0)
positives2e18 <- affins2e18 %>% filter(value >= 0)
positives2e19 <- affins2e19 %>% filter(value >= 0)
positives2e20 <- affins2e20 %>% filter(value >= 0)
positives2e21 <- affins2e21 %>% filter(value >= 0)
positives2e22 <- affins2e22 %>% filter(value >= 0)

## Count Positives
countPs2e1 <-  count(positives2e1, vars = "Episode")
countPs2e2 <-  count(positives2e2, vars = "Episode")
countPs2e3 <-  count(positives2e3, vars = "Episode")
countPs2e4 <-  count(positives2e4, vars = "Episode")
countPs2e5 <-  count(positives2e5, vars = "Episode")
countPs2e6 <-  count(positives2e6, vars = "Episode")
countPs2e7 <-  count(positives2e7, vars = "Episode")
countPs2e8 <-  count(positives2e8, vars = "Episode")
countPs2e9 <-  count(positives2e9, vars = "Episode")
countPs2e10 <- count(positives2e10, vars = "Episode")
countPs2e11 <- count(positives2e11, vars = "Episode")
countPs2e12 <- count(positives2e12, vars = "Episode")
countPs2e13 <- count(positives2e13, vars = "Episode")
countPs2e14 <- count(positives2e14, vars = "Episode")
countPs2e15 <- count(positives2e15, vars = "Episode")
countPs2e16 <- count(positives2e16, vars = "Episode")
countPs2e17 <- count(positives2e17, vars = "Episode")
countPs2e18 <- count(positives2e18, vars = "Episode")
countPs2e19 <- count(positives2e19, vars = "Episode")
countPs2e20 <- count(positives2e20, vars = "Episode")
countPs2e21 <- count(positives2e21, vars = "Episode")
countPs2e22 <- count(positives2e22, vars = "Episode")

## Filter Negative
negatives2e1 <-  affins2e1 %>% filter(value  <= 0)
negatives2e2 <-  affins2e2 %>% filter(value  <= 0)
negatives2e3 <-  affins2e3 %>% filter(value  <= 0)
negatives2e4 <-  affins2e4 %>% filter(value  <= 0)
negatives2e5 <-  affins2e5 %>% filter(value  <= 0)
negatives2e6 <-  affins2e6 %>% filter(value  <= 0)
negatives2e7 <-  affins2e7 %>% filter(value  <= 0)
negatives2e8 <-  affins2e8 %>% filter(value  <= 0)
negatives2e9 <-  affins2e9 %>% filter(value  <= 0)
negatives2e10 <- affins2e10 %>% filter(value <= 0)
negatives2e11 <- affins2e11 %>% filter(value <= 0)
negatives2e12 <- affins2e12 %>% filter(value <= 0)
negatives2e13 <- affins2e13 %>% filter(value <= 0)
negatives2e14 <- affins2e14 %>% filter(value <= 0)
negatives2e15 <- affins2e15 %>% filter(value <= 0)
negatives2e16 <- affins2e16 %>% filter(value <= 0)
negatives2e17 <- affins2e17 %>% filter(value <= 0)
negatives2e18 <- affins2e18 %>% filter(value <= 0)
negatives2e19 <- affins2e19 %>% filter(value <= 0)
negatives2e20 <- affins2e20 %>% filter(value <= 0)
negatives2e21 <- affins2e21 %>% filter(value <= 0)
negatives2e22 <- affins2e22 %>% filter(value <= 0)

## Count Negatives
countNs2e1 <-  count(negatives2e1, vars = "Episode")
countNs2e2 <-  count(negatives2e2, vars = "Episode")
countNs2e3 <-  count(negatives2e3, vars = "Episode")
countNs2e4 <-  count(negatives2e4, vars = "Episode")
countNs2e5 <-  count(negatives2e5, vars = "Episode")
countNs2e6 <-  count(negatives2e6, vars = "Episode")
countNs2e7 <-  count(negatives2e7, vars = "Episode")
countNs2e8 <-  count(negatives2e8, vars = "Episode")
countNs2e9 <-  count(negatives2e9, vars = "Episode")
countNs2e10 <- count(negatives2e10, vars = "Episode")
countNs2e11 <- count(negatives2e11, vars = "Episode")
countNs2e12 <- count(negatives2e12, vars = "Episode")
countNs2e13 <- count(negatives2e13, vars = "Episode")
countNs2e14 <- count(negatives2e14, vars = "Episode")
countNs2e15 <- count(negatives2e15, vars = "Episode")
countNs2e16 <- count(negatives2e16, vars = "Episode")
countNs2e17 <- count(negatives2e17, vars = "Episode")
countNs2e18 <- count(negatives2e18, vars = "Episode")
countNs2e19 <- count(negatives2e19, vars = "Episode")
countNs2e20 <- count(negatives2e20, vars = "Episode")
countNs2e21 <- count(negatives2e21, vars = "Episode")
countNs2e22 <- count(negatives2e22, vars = "Episode")

## Season 3
## Import Datasets
s3e1 <- read.csv("s3e1-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e2 <- read.csv("s3e2-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e3 <- read.csv("s3e3-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e4 <- read.csv("s3e4-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e5 <- read.csv("s3e5-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e6 <- read.csv("s3e6-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e7 <- read.csv("s3e7-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e8 <- read.csv("s3e8-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e9 <- read.csv("s3e9-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e10 <- read.csv("s3e10-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e11 <- read.csv("s3e11-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e12 <- read.csv("s3e12-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e13 <- read.csv("s3e13-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e14 <- read.csv("s3e14-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e15 <- read.csv("s3e15-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e16 <- read.csv("s3e16-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e17 <- read.csv("s3e17-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
s3e18 <- read.csv("s3e18-mod.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)

## create a tibble with the Episode ([,1]) & Words ([,2])
tibs3e1 <- tibble(Episode = s3e1[,1], Words = s3e1[,2])
tibs3e2 <- tibble(Episode = s3e2[,1], Words = s3e2[,2])
tibs3e3 <- tibble(Episode = s3e3[,1], Words = s3e3[,2])
tibs3e4 <- tibble(Episode = s3e4[,1], Words = s3e4[,2])
tibs3e5 <- tibble(Episode = s3e5[,1], Words = s3e5[,2])
tibs3e6 <- tibble(Episode = s3e6[,1], Words = s3e6[,2])
tibs3e7 <- tibble(Episode = s3e7[,1], Words = s3e7[,2])
tibs3e8 <- tibble(Episode = s3e8[,1], Words = s3e8[,2])
tibs3e9 <- tibble(Episode = s3e9[,1], Words = s3e9[,2])
tibs3e10 <- tibble(Episode = s3e10[,1], Words = s3e10[,2])
tibs3e11 <- tibble(Episode = s3e11[,1], Words = s3e11[,2])
tibs3e12 <- tibble(Episode = s3e12[,1], Words = s3e12[,2])
tibs3e13 <- tibble(Episode = s3e13[,1], Words = s3e13[,2])
tibs3e14 <- tibble(Episode = s3e14[,1], Words = s3e14[,2])
tibs3e15 <- tibble(Episode = s3e15[,1], Words = s3e15[,2])
tibs3e16 <- tibble(Episode = s3e16[,1], Words = s3e16[,2])
tibs3e17 <- tibble(Episode = s3e17[,1], Words = s3e17[,2])
tibs3e18 <- tibble(Episode = s3e18[,1], Words = s3e18[,2])

## Use Inner_Join with Affin
affins3e1 <- tibs3e1 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e2 <- tibs3e2 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e3 <- tibs3e3 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e4 <- tibs3e4 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e5 <- tibs3e5 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e6 <- tibs3e6 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e7 <- tibs3e7 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e8 <- tibs3e8 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e9 <- tibs3e9 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e10 <- tibs3e10 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e11 <- tibs3e11 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e12 <- tibs3e12 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e13 <- tibs3e13 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e14 <- tibs3e14 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e15 <- tibs3e15 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e16 <- tibs3e16 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e17 <- tibs3e17 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
affins3e18 <- tibs3e18 %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))

## Count
counts3e1 <- count(affins3e1, vars = "Episode")
counts3e2 <- count(affins3e2, vars = "Episode")
counts3e3 <- count(affins3e3, vars = "Episode")
counts3e4 <- count(affins3e4, vars = "Episode")
counts3e5 <- count(affins3e5, vars = "Episode")
counts3e6 <- count(affins3e6, vars = "Episode")
counts3e7 <- count(affins3e7, vars = "Episode")
counts3e8 <- count(affins3e8, vars = "Episode")
counts3e9 <- count(affins3e9, vars = "Episode")
counts3e10 <- count(affins3e10, vars = "Episode")
counts3e11 <- count(affins3e11, vars = "Episode")
counts3e12 <- count(affins3e12, vars = "Episode")
counts3e13 <- count(affins3e13, vars = "Episode")
counts3e14 <- count(affins3e14, vars = "Episode")
counts3e15 <- count(affins3e15, vars = "Episode")
counts3e16 <- count(affins3e16, vars = "Episode")
counts3e17 <- count(affins3e17, vars = "Episode")
counts3e18 <- count(affins3e18, vars = "Episode")

## Filter Positive
positives3e1 <- affins3e1 %>% filter(value >= 0)
positives3e2 <- affins3e2 %>% filter(value >= 0)
positives3e3 <- affins3e3 %>% filter(value >= 0)
positives3e4 <- affins3e4 %>% filter(value >= 0)
positives3e5 <- affins3e5 %>% filter(value >= 0)
positives3e6 <- affins3e6 %>% filter(value >= 0)
positives3e7 <- affins3e7 %>% filter(value >= 0)
positives3e8 <- affins3e8 %>% filter(value >= 0)
positives3e9 <- affins3e9 %>% filter(value >= 0)
positives3e10 <- affins3e10 %>% filter(value >= 0)
positives3e11 <- affins3e11 %>% filter(value >= 0)
positives3e12 <- affins3e12 %>% filter(value >= 0)
positives3e13 <- affins3e13 %>% filter(value >= 0)
positives3e14 <- affins3e14 %>% filter(value >= 0)
positives3e15 <- affins3e15 %>% filter(value >= 0)
positives3e16 <- affins3e16 %>% filter(value >= 0)
positives3e17 <- affins3e17 %>% filter(value >= 0)
positives3e18 <- affins3e18 %>% filter(value >= 0)

## Count Positives
countPs3e1 <- count(positives3e1, vars = "Episode")
countPs3e2 <- count(positives3e2, vars = "Episode")
countPs3e3 <- count(positives3e3, vars = "Episode")
countPs3e4 <- count(positives3e4, vars = "Episode")
countPs3e5 <- count(positives3e5, vars = "Episode")
countPs3e6 <- count(positives3e6, vars = "Episode")
countPs3e7 <- count(positives3e7, vars = "Episode")
countPs3e8 <- count(positives3e8, vars = "Episode")
countPs3e9 <- count(positives3e9, vars = "Episode")
countPs3e10 <- count(positives3e10, vars = "Episode")
countPs3e11 <- count(positives3e11, vars = "Episode")
countPs3e12 <- count(positives3e12, vars = "Episode")
countPs3e13 <- count(positives3e13, vars = "Episode")
countPs3e14 <- count(positives3e14, vars = "Episode")
countPs3e15 <- count(positives3e15, vars = "Episode")
countPs3e16 <- count(positives3e16, vars = "Episode")
countPs3e17 <- count(positives3e17, vars = "Episode")
countPs3e18 <- count(positives3e18, vars = "Episode")

## Filter Negative
negatives3e1 <- affins3e1 %>% filter(value <= 0)
negatives3e2 <- affins3e2 %>% filter(value <= 0)
negatives3e3 <- affins3e3 %>% filter(value <= 0)
negatives3e4 <- affins3e4 %>% filter(value <= 0)
negatives3e5 <- affins3e5 %>% filter(value <= 0)
negatives3e6 <- affins3e6 %>% filter(value <= 0)
negatives3e7 <- affins3e7 %>% filter(value <= 0)
negatives3e8 <- affins3e8 %>% filter(value <= 0)
negatives3e9 <- affins3e9 %>% filter(value <= 0)
negatives3e10 <- affins3e10 %>% filter(value <= 0)
negatives3e11 <- affins3e11 %>% filter(value <= 0)
negatives3e12 <- affins3e12 %>% filter(value <= 0)
negatives3e13 <- affins3e13 %>% filter(value <= 0)
negatives3e14 <- affins3e14 %>% filter(value <= 0)
negatives3e15 <- affins3e15 %>% filter(value <= 0)
negatives3e16 <- affins3e16 %>% filter(value <= 0)
negatives3e17 <- affins3e17 %>% filter(value <= 0)
negatives3e18 <- affins3e18 %>% filter(value <= 0)

## Count Negatives
countNs3e1 <- count(negatives3e1, vars = "Episode")
countNs3e2 <- count(negatives3e2, vars = "Episode")
countNs3e3 <- count(negatives3e3, vars = "Episode")
countNs3e4 <- count(negatives3e4, vars = "Episode")
countNs3e5 <- count(negatives3e5, vars = "Episode")
countNs3e6 <- count(negatives3e6, vars = "Episode")
countNs3e7 <- count(negatives3e7, vars = "Episode")
countNs3e8 <- count(negatives3e8, vars = "Episode")
countNs3e9 <- count(negatives3e9, vars = "Episode")
countNs3e10 <- count(negatives3e10, vars = "Episode")
countNs3e11 <- count(negatives3e11, vars = "Episode")
countNs3e12 <- count(negatives3e12, vars = "Episode")
countNs3e13 <- count(negatives3e13, vars = "Episode")
countNs3e14 <- count(negatives3e14, vars = "Episode")
countNs3e15 <- count(negatives3e15, vars = "Episode")
countNs3e16 <- count(negatives3e16, vars = "Episode")
countNs3e17 <- count(negatives3e17, vars = "Episode")
countNs3e18 <- count(negatives3e18, vars = "Episode")