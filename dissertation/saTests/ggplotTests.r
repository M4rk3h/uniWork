library(ggplot2)
## Example Dataset with ggplot MPG
str(mpg)
## Display it on a qplot
qplot(displ, hwy, data = mpg)
## Same but with colour (color)
qplot(displ, hwy, data = mpg, color = drv)
## Smooth line
qplot(displ, hwy, data = mpg, geom=c("point","smooth"))
# Histograms
qplot(hwy, data = mpg, fill = drv)
# Facets
# 1 (Plot chart)
qplot(displ, hwy, data = mpg, facets = drv ~ .,)
# 2 (Bar chart-ish)
qplot(hwy, data = mpg, facets = drv ~ ., binwidth = 2)


str(happyAffin)
## Display it on a qplot
qplot(word, value, data = happyAffin)
## Same but with colour (color)
qplot(value, word, data = happyAffin, color = value)
## Smooth line
## qplot(word, value, data = happyAffin, geom=c("point","smooth"))
# Histograms
qplot(word, data = happyAffin, fill = value)
# Facets
qplot(word, value, data = happyAffin, facets = No ~ .,)


str(happyBing)
## Display it on a qplot
qplot(sentiment, word, data = happyBing)
## Same but with colour (color)
qplot(sentiment, word, data = happyBing, color = sentiment)
## Smooth line
## qplot(word, sentiment, data = happyBing, geom=c("point","smooth"))
# Histograms
qplot(word, data = happyBing, fill = sentiment)
# Facets
qplot(word, sentiment, data = happyBing, facets = No ~ .,)