## If Errors on inputting data, see backup.r

## Import Data
library(readr)
s1e1test <- read_csv("s1e1-mod.txt")
s1e2 <- read_csv("s1e2-mod.txt")
s1e3 <- read_csv("s1e3-mod.txt")
s1e4 <- read_csv("s1e4-mod.txt")
s1e5 <- read_csv("s1e5-mod.txt")
s1e6 <- read_csv("s1e6-mod.txt")
s1e7 <- read_csv("s1e7-mod.txt")
s1e8 <- read_csv("s1e8-mod.txt")

## happyTib
tibs1e1 <- tibble(ep = s1e1test[,1], words=s1e1test[,2]);
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

## Same them out
write.csv(s2e1, file = "s2e1-mod.txt")
write.csv(s2e2, file = "s2e2-mod.txt")
write.csv(s2e3, file = "s2e3-mod.txt")
write.csv(s2e4, file = "s2e4-mod.txt")
write.csv(s2e5, file = "s2e5-mod.txt")
write.csv(s2e6, file = "s2e6-mod.txt")
write.csv(s2e7, file = "s2e7-mod.txt")
write.csv(s2e8, file = "s2e8-mod.txt")
write.csv(s2e9, file = "s2e9-mod.txt")
write.csv(s2e10, file = "s2e10-mod.txt")
write.csv(s2e11, file = "s2e11-mod.txt")
write.csv(s2e12, file = "s2e12-mod.txt")
write.csv(s2e13, file = "s2e13-mod.txt")
write.csv(s2e14, file = "s2e14-mod.txt")
write.csv(s2e15, file = "s2e15-mod.txt")
write.csv(s2e16, file = "s2e16-mod.txt")
write.csv(s2e17, file = "s2e17-mod.txt")
write.csv(s2e18, file = "s2e18-mod.txt")
write.csv(s2e19, file = "s2e19-mod.txt")
write.csv(s2e20, file = "s2e20-mod.txt")
write.csv(s2e21, file = "s2e21-mod.txt")
write.csv(s2e22, file = "s2e22-mod.txt")