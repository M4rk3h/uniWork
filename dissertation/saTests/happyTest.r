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
## If TidyText doesn't install
# install from github
library(remotes)
install_github("juliasilge/tidytext")

# Import csv's you want 
## Try with simple csv's
happyWords <- read.csv("happy.csv", sep=",", header=TRUE, stringsAsFactors = FALSE)

# Create a Tibble with the ID and Before
happyTib <- tibble(ID = happyWords[,1],
                    Words = happyWords[,2])
# Checking beforeTib
head(happyTib)

# Tokenize the words, using the Before column
# Whilst connecting with Afinn
## ERROR HERE
happyAfinn <- happyTib %>% 
  unnest_tokens(word, Words) %>%
  inner_join(get_sentiments("afinn"))

happyBing <- happyTib %>% 
  unnest_tokens(word, Words) %>%
  inner_join(get_sentiments("bing"))

# Group by ID
scoreID <- beforeAfinn %>%
  group_by(ID)

# Get the percentage?
scorePercent <- scoreID %>%
  mutate(total = sum(value), percent = value / total)

# Order the word by the number of words
orderedCount <- scoreID %>%
  count(word, sort = TRUE)

# Try to create an index for the songs
tidySongs <- scoreID %>%
  group_by(ID) %>% 
  mutate(linenumber = row_number()) %>%
  ## Losing 2 songs here ^
  
  # Find the negative score, positive score & sentiment
  songSentiment <- tidySongs %>%
  inner_join(get_sentiments("bing")) %>%
  # Error Here below
  count(ID, index = linenumber %/% 1, sentiment) %>%
  spread(sentiment, n, fill = 0) %>%
  mutate(sentiment = positive - negative)

songSentimentAfin <- tidySongs %>%
  inner_join(get_sentiments("afinn")) %>%
  count(ID, index = linenumber %/% 1, sentiment) %>%
  spread(sentiment, n, fill = 0) %>%
  mutate(sentiment = positive - negative)

# Plot it onto a graph
## Deleting 2 songs ## ERROR
ggplot(songSentiment, aes(index, sentiment, fill = ID)) +
  geom_col(show.legend = TRUE) +
  facet_wrap(~ID, ncol = 2, scales = "free_x")


# Export it
# write.csv(beforeToken, file = "exportedscores2.csv")