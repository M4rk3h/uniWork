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
library(janeaustenr)
library(ggplot2)

# Import csv's you want 
# which will be a Data Frame
spread2018 <- read.csv("testSheet.csv", stringsAsFactors = FALSE)

# Create a Tibble with the ID and Before
beforeTib <- tibble(ID = spread2018[,2],
                    Before = spread2018[,4])
# Checking beforeTib
head(beforeTib)

# Tokenize the words, using the Before column
# Whilst connecting with Afinn
beforeAfinn <- beforeTib %>% 
  unnest_tokens(word, Before) %>%
  inner_join(get_sentiments("afinn"))

beforeBing <- beforeTib %>% 
  unnest_tokens(word, Before) %>%
  inner_join(get_sentiments("bing"))

# Group by ID
scoreID <- beforeToken %>%
  group_by(ID)

# Get the percentage?
scorePercent <- scoreID %>%
  mutate(total = sum(value), percent = value / total)

# Order the word by the number of words
orderedCount <- scoreID %>%
  count(word, sort = TRUE)

# Try to create an index for the songs
tidySongs <- orderedCount %>%
  group_by(ID) %>% 
  mutate(linenumber = row_number())%>%
  ungroup()

# Find the negative score, positive score & sentiment
songSentiment <- tidySongs %>%
  inner_join(get_sentiments("bing")) %>%
  count(ID, index = linenumber %/% 1, sentiment) %>%
  spread(sentiment, n, fill = 0) %>%
  mutate(sentiment = positive - negative)

songSentimentAfin <- tidySongs %>%
  inner_join(get_sentiments("afinn")) %>%
  count(ID, index = linenumber %/% 1, value) %>%
  spread(value, n, fill = 0) %>%
  mutate(value = positive - negative)

# Plot it onto a graph
ggplot(songSentiment, aes(index, sentiment, fill = ID)) +
  geom_col(show.legend = TRUE) +
  facet_wrap(~ID, ncol = 2, scales = "free_x")


# Export it
write.csv(beforeToken, file = "exportedscores2.csv")