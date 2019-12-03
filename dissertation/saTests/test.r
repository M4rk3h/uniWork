# This is going to be our script
# Install packages
install.packages("tidyverse")
install.packages("tidytext")
install.packages("textdata")

# Load packages
library(tidyverse)
library(tidytext)
library(textdata)
library(tm)

# Import csv's you want 
# which will be a Data Frame
# testSpread <- read.csv("newOnes.txt")


# Create a Tibble with an ID
tokenTibOne <- tibOne %>% 
  unnest_tokens() %>%
  inner_join(get_sentiments("afinn"))


# Create custom stop words
customStop <- tribble(~word, ~lexicon,
                          "crisis", "CUSTOM",
                          "simulate", "CUSTOM",
                          "simulation", "CUSTOM",
                          "simulating", "CUSTOM",
                          "feel", "CUSTOM",
                          "feels", "CUSTOM",
                          "feeling", "CUSTOM",
                          "feelings", "CUSTOM")

# Bind the custom stop words we created,
# to the stop words dictionary
customStopWords <- stop_words %>%
  bind_rows(customStop)

# Remove stop words
beforeNoStop <- beforeToken %>%
  anti_join(customStopWords)


# Gives us a table with the value of each word,
# Total score per person and the percentage
# of the word contribution to the score
scoreBefore <- beforeNoStop %>%
  group_by(ID) %>% 
  mutate(total = sum(value), percent = value / total)