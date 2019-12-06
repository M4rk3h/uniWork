# This is going to be our script
# Install packages
install.packages("tidyverse")
install.packages("tidytext")
install.packages("textdata")
install.packages("tibble")

# Load packages
library(tidyverse)
library(tidytext)
library(textdata)
library(tm)
library(dplyr)
library(janeaustenr)

get_sentiments("afinn")

test <- tibble(txt = prideprejudice)
head(test)

test %>%
  unnest_tokens(word, txt)

# Import csv's you want 
# which will be a Data Frame
spread2018 <- read.csv("testSheet.csv", stringsAsFactors = FALSE)
spread2018

# Create a Tibble with the ID and Before
beforeTib <- tibble(ID = spread2018[,2],
                    Before = spread2018[,4])
# Checking beforeTib
head(beforeTib)

# Tokenize the words, using the Before column
# Whilst connecting with Afinn
beforeToken <- beforeTib %>% 
  unnest_tokens(word, Before) %>%
  inner_join(get_sentiments("afinn"))

# Group by ID
scoreBefore <- beforeToken %>%
  group_by(ID) %>% 
  mutate(total = sum(value), percent = value / total)
# Export it
save(scoreBefore, file="exportedScore.csv")

# THIS WORKS
testingScript <- tidytext::unnest_tokens(read.csv("testSheet.csv", stringsAsFactors = FALSE), word, Before)
head(testingScript)