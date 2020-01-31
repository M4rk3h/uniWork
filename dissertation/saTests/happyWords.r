# This is going to be our script
# Install packages
install.packages("tidyverse")
install.packages("tidytext")
install.packages("textdata")
install.packages("tibble")

# Load packages
library(tidyverse)
library(tidytext)
library(tidyr)
library(textdata)
library(tm)
library(dplyr)
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
## Unnest and join with Affin
## Use Affin (-5 - +5)
affinTP <- tibbleTP %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("afinn"))
## Use Bing (Happy = Positive)
bingTP <- tibbleTP %>% unnest_tokens(word, Words) %>% inner_join(get_sentiments("bing"))

# Plot it onto a graph
affinTPPlot1 <- ggplot(data = affinTP) + geom_bar(mapping = aes(x = Episode))
# Plot
affinTPPlot2 <- ggplot(data = affinTP) + geom_bar(mapping = aes(x = word))
# See how it works for no and value
## THIS ONE IS GOOD
affinTPPlot3 <- ggplot(data = affinTP) + geom_bar(mapping = aes(x = Episode, y=value),stat="identity", fill="#A43A15")
## HISTOGRAM
qplot(Episode, data = affinTP, fill = Episode)
# See how it works for word and value
affinTPPlot4 <- ggplot(data = affinTP) + geom_bar(mapping = aes(x = word, y=value),stat="identity", fill="#FF9999", colour="black")