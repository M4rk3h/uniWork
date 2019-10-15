import requests
from bs4 import BeautifulSoup

# get the data
# test on FireWalkWithMe
data = requests.get('https://www.rottentomatoes.com/m/twin_peaks_fire_walk_with_me')

# load data into bs4
soup = BeautifulSoup(data.text, 'html.parser')

# What do you want to find?
title = soup.find('title')
tomatoScore = soup.find('span', class_='mop-ratings-wrap__percentage')
tomatoTotal = soup.find('small', class_='mop-ratings-wrap__text--small')
# Gets same as above because under same class.
audienceScore = soup.find('span', class_='mop-ratings-wrap__percentage')
audienceTotal = soup.find('strong', class_='mop-ratings-wrap__text--small')

#print(title.text, tomatoScore.text, tomatoTotal.text, audienceScore.text, audienceTotal.text)

# use prettify() for

for scores in soup.find_all('span', class_='mop-ratings-wrap__percentage'):
    print(scores.text)
     
