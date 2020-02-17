## If Errors on inputting data, see backup.r

## Import Data
library(readr)
s1e1 <- read_csv("s1e1-mod.txt")
s1e2 <- read_csv("s1e2-mod.txt")
s1e3 <- read_csv("s1e3-mod.txt")
s1e4 <- read_csv("s1e4-mod.txt")
s1e5 <- read_csv("s1e5-mod.txt")
s1e6 <- read_csv("s1e6-mod.txt")
s1e7 <- read_csv("s1e7-mod.txt")
s1e8 <- read_csv("s1e8-mod.txt")

## happyTib
tibs1e1 <- tibble(ep = s1e1[,1], words=s1e1[,2]);
## Check column names
colnames(tibs1e1)
## Try to rename them
names(tibs1e1)[names(tibs1e1) == "ep"] <- "episode"
names(tibs1e1)[names(tibs1e1) == "words"] <- "text"

## Use Inner_Join with Affin
affins1e1 <- tibs1e1 %>% unnest_tokens(word, text) %>%
  inner_join(get_sentiments("afinn"))

## Count
affinCounSeason1 <- count(affinSeason1, vars = "Episode")