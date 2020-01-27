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
ggPlotNo <- ggplot(data = happyAffin) + 
  geom_bar(mapping = aes(x = No))
# Plot
ggPlotNo2 <- ggplot(data = happyAffin) + 
  geom_bar(mapping = aes(x = word))
# See how it works for no and value
noAndValue <- ggplot(data = happyAffin) + 
  geom_bar(mapping = aes(x = No, y=value),stat="identity", fill="#FF9999")
# See how it works for word and value
wordAndValue <- ggplot(data = happyAffin) + 
  geom_bar(mapping = aes(x = word, y=value),stat="identity", fill="#FF9999", colour="black")