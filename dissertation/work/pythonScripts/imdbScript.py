import requests
from bs4 import BeautifulSoup

# get the data
data = requests.get('https://www.rottentomatoes.com/m/twin_peaks_fire_walk_with_me')

# load data into bs4
soup = BeautifulSoup(data.text, 'html.parser')

# What do you want to find?
title = soup.find('title')
score = soup.find('span', class_='mop-ratings-wrap__percentage')
total = soup.find('small', class_='mop-ratings-wrap__text--small')
