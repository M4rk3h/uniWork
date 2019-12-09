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
scoreID <- beforeToken %>%
  group_by(ID)

# Get the percentage?
scorePercent <- scoreID %>%
  mutate(total = sum(value), percent = value / total)

# Order the word by the number of words
orderedCount <- scoreID %>%
  count(word, sort = TRUE)

# Try to map song & sentiment on graph
ggplot(scorePercent, aes(fill = ID)) +
  geom_col(show.legend = FALSE) +
  facet_wrap(~ID, ncol = 2, scales = "free_x")

# Export it
write.csv(beforeToken, file = "exportedscores2.csv")

# THIS WORKS
testingScript <- tidytext::unnest_tokens(read.csv("testSheet.csv", stringsAsFactors = FALSE), word, Before)
head(testingScript)

jane_austen_sentiment <- tidy_books %>%
  inner_join(get_sentiments("bing")) %>%
  count(book, index = linenumber %/% 80, sentiment) %>%
  spread(sentiment, n, fill = 0) %>%
  mutate(sentiment = positive - negative)