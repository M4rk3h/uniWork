# This is going to be our script
# Install packages
install.packages("tidyverse")
install.packages("tidytext")
install.packages("textdata")
install.packages("tibble")

# Load packages
library(tidyverse)
require(stringr)
library(tidytext)
library(tidyr)
library(textdata)
library(tm)
library(dplyr)
library(ggplot2)
library(ggplot2)

## Try with simple csv's
happyWords <- read.csv("happy.csv", sep=",", header=TRUE, stringsAsFactors = FALSE)
## happyTib
happyTib <- tibble(No = happyWords[,1], Words = happyWords[,2])
## Unnest and join with Affin
## Use Affin (-5 - +5)
happyAffin <- happyTib %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
## Use Bing (Happy = Positive)
happyBing <- happyTib %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("bing"))
## QPlot version (x, y & dataset)
defaultAffin <- qplot(word, value, data = happyAffin)
## QPlot version (x, y & dataset)
defaultBing <- qplot(word, sentiment, data = happyBing)

## HAPPY AFFIN
# Plot it onto a graph
affinPlot <- ggplot(data = happyAffin) + 
  geom_bar(mapping = aes(x = No))
# Plot
affinPlot2 <- ggplot(data = happyAffin) + 
  geom_bar(mapping = aes(x = word))
# See how it works for no and value
affinPlotNoAndValue <- ggplot(data = happyAffin) + 
  geom_bar(mapping = aes(x = No, y=value),stat="identity", fill="#FF9999")
# See how it works for word and value
affinPlotWordAndValue <- ggplot(data = happyAffin) + 
  geom_bar(mapping = aes(x = word, y=value),stat="identity", fill="#FF9999", colour="black")

## HAPPY BING
# Plot it onto a graph
bingPlot <- ggplot(data = happyBing) + 
  geom_bar(mapping = aes(x = No))
# Plot
bingPlot2 <- ggplot(data = happyBing) + 
  geom_bar(mapping = aes(x = word))
# See how it works for no and value
bingPlotNoAndValue <- ggplot(data = happyBing) + 
  geom_bar(mapping = aes(x=No, y=word),stat="identity", fill="#FF9999")
# See how it works for word and value
bingPlotWordAndSent <- ggplot(data = happyBing) + 
  geom_bar(mapping = aes(x =word, y=sentiment),stat="identity", fill="#FF9999", colour="black")

## Try to do the same for a bunch of episodes of twinPeaks
## Try with simple csv's
wordsTP <- read.csv("twinPeaks.csv", sep=",", header=TRUE, stringsAsFactors = FALSE)
## happyTib
tibbleTP <- tibble(Episode = wordsTP[,1], Words = wordsTP[,2])

## Join Scripts With  ##
## Affin Dictionary   ##
## (-5 - +5)          ##

## Use No Join
affinTPNJ <- tibbleTP %>% unnest_tokens(word, Words)
## Use Inner_Join
affinTPIJ <- tibbleTP %>% unnest_tokens(word, Words) %>%
  inner_join(get_sentiments("afinn"))
## Use Left_Join
affinTPLJ <- tibbleTP %>% unnest_tokens(word, Words) %>%
  left_join(get_sentiments("afinn"))
## Use Right_Join
## This just gets all words from AFFIN
affinTPRJ <- tibbleTP %>% unnest_tokens(word, Words) %>%
  right_join(get_sentiments("afinn"))
## Full_Join
affinTPFJ <- tibbleTP %>% unnest_tokens(word, Words) %>%
  full_join(get_sentiments("afinn"))

## Export into testAffins
write.csv(affinTPNJ, file="testAffins/affinTPNJ.csv")
write.csv(affinTPIJ, file="testAffins/affinTPIJ.csv")
write.csv(affinTPLJ, file="testAffins/affinTPLJ.csv")
write.csv(affinTPRJ, file="testAffins/affinTPRJ.csv")
write.csv(affinTPFJ, file="testAffins/affinTPFJ.csv")

## Join Scripts With   ##
## Bing Dictionary     ##
## Negative - Positive ##

## Use No Join
bingTPNJ <- tibbleTP %>% unnest_tokens(word, Words)
## Use Inner_Join
bingTPIJ <- tibbleTP %>% unnest_tokens(word, Words) %>%
  inner_join(get_sentiments("bing"))
## Use Left_Join
bingTPLJ <- tibbleTP %>% unnest_tokens(word, Words) %>%
  left_join(get_sentiments("bing"))
## Use Right_Join
## This just gets all words from bing
bingTPRJ <- tibbleTP %>% unnest_tokens(word, Words) %>%
  right_join(get_sentiments("bing"))
## Full_Join
bingTPFJ <- tibbleTP %>% unnest_tokens(word, Words) %>%
  full_join(get_sentiments("bing"))

## Export into testAffins
write.csv(bingTPNJ, file="testAffins/bingTPNJ.csv")
write.csv(bingTPIJ, file="testAffins/bingTPIJ.csv")
write.csv(bingTPLJ, file="testAffins/bingTPLJ.csv")
write.csv(bingTPRJ, file="testAffins/bingTPRJ.csv")
write.csv(bingTPFJ, file="testAffins/bingTPFJ.csv")


## Count ##
affinCountTP <- count(affinTPIJ, vars = "Episode")
bingCountTP <- count(bingTPIJ, vars = "Episode")


## Plot it onto a graph
## Affin As Is
affinPlotOne <- ggplot(data = affinTPIJ) + geom_bar(mapping = aes(x = Episode))
# Plot
affinPlotTwo <- ggplot(data = affinTPIJ) + geom_bar(mapping = aes(x = word))
# See how it works for no and value
## THIS ONE IS GOOD
affinPlotThree <- ggplot(data = affinTPIJ) + 
  geom_bar(mapping = aes(x = Episode, y=value),stat="identity", fill="#A43A15")
## HISTOGRAM
affinPlotFour <- qplot(Episode, data = affinTPIJ, fill = Episode)
# See how it works for word and value
affinTPPlotFive <- ggplot(data = affinTPIJ) + 
  geom_bar(mapping = aes(x = value, y=word),stat="identity", fill="#FF9999", colour="black")

## Affin Total
affinCountOne <- ggplot(data = affinCountTP) + geom_bar(mapping = aes(x = Episode))
# Plot
affinCountTwo <- ggplot(data = affinCountTP) + geom_bar(mapping = aes(x = freq))
# See how it works for no and value
## THIS ONE IS GOOD
affinCountThree <- ggplot(data = affinCountTP) + 
  geom_bar(mapping = aes(x = Episode, y=freq),stat="identity", fill="#A43A15")
## HISTOGRAM
affinCountFour <- qplot(Episode, freq, data = affinCountTP, fill = freq)
# See how it works for word and value
affinCountFive <- ggplot(data = affinCountTP) + 
  geom_bar(mapping = aes(x = Episode, y=freq),stat="identity", fill="#FF9999", colour="black")



## Get sentiment score for each episode of TwinPeaks
season1 <- read.csv("../twinPeaksScripts/tps1.csv", sep=",", header=TRUE, stringsAsFactors = FALSE)
## happyTib
tibSeason1 <- tibble(Episode = wordsTP[,1], Words = text[,2])
## Use Inner_Join with Affin
affinSeason1 <- tibSeason1 %>% unnest_tokens(word, Words) %>%
  inner_join(get_sentiments("afinn"))

## Get sentiment score for each episode of TwinPeaks
s1e1 <- read.csv("../twinPeaksScripts/S1e1.txt", sep=",", header=TRUE, stringsAsFactors = FALSE)
## happyTib
tibSeason1 <- tibble(Episode = "seasonOne", Words = seasonOne[,1])
## Use Inner_Join with Affin
affinSeason1 <- tibSeason1 %>% unnest_tokens(word, Words) %>%
  inner_join(get_sentiments("afinn"))

## Count
affinCounSeason1 <- count(affinSeason1, vars = "Episode")
affinCountTP <- count(affinTPIJ, vars = "Episode")

## Save to csv
write.csv(seasonOne, file = "testMeSeasonOne.csv")
library(readr)
S1e1 <- read_delim("~/GitHub/uniWork/dissertation/twinPeaksScripts/S1e1.txt", ";", escape_double = FALSE, col_names = FALSE,trim_ws = TRUE)
S1e2 <- read_delim("~/GitHub/uniWork/dissertation/twinPeaksScripts/S1e2.txt", ";", escape_double = FALSE, col_names = FALSE,trim_ws = TRUE)
head(S1e2)

temp = list.files(pattern="S1*.txt")

head(s1e1)