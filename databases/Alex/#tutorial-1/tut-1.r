## Tutorial 1 for using R-Studio

## View all loaded packages
library()

## View the data command
data()

## Load the AirPassengers
data("AirPassengers")

## View the AirPassengers
AirPassengers
## Question - 
## Which years are covered by the AirPassengers

## Answer
## 1949

## Load BJSales
data(BJsales)
## View BJsales
BJsales

## When loaded, list all data sets
ls()

## Remove AirPassengers
rm(AirPassengers)

## Remove all loaded data
rm (list=ls())

## View data sets available in the rpart
data(package="rpart")

## Loading an external csv file
getwd()

## Get the weather1 data
weather1 <- read.csv("C:\\Users\\MarkBaber\\Documents\\GitHub\\uniWork\\databases\\Alex\\tutorial-1\\weather1.csv", sep=",", header=TRUE)

## View and Remove the data
## view(weather1)
## rm(weather1)

## Get the weather2 data
weather2 <- read.csv("C:\\Users\\MarkBaber\\Documents\\GitHub\\uniWork\\databases\\Alex\\tutorial-1\\weather2.csv", sep=",", header=TRUE)

## Give column headings to the first few columns:
names(weather2) <- c("Date","MinTemp","MaxTemp")

## Loading a webpage
file <- readLines("http://en.wikipedia.org/wiki/Data_science")
file

## Load an HTML table from a website into R
library(XML)
library(httr)

url <- "http://en.wikipedia.org/wiki/List_of_countries_by_population"
population <- GET(url)
population <- readHTMLTable(rawToChar(population $content),stringAsFactors=F)

## View the loaded data
population[[1]]