#A program I created to compile and quantify unique entries

#Read CSV
from pprint import pprint
import csv

with open('NYC_Free_Public_WiFi_03292017.csv', 'r') as f:
	reader = csv.DictReader(f)
	rows = [dict(row) for row in reader]

#Create variables
Type = {}
Provider = {}
Establish_Date = {}
City = {}

for row in rows:
	cost = row['TYPE']
	if cost in Type:
		Type[cost] += 1
	else:
		Type[cost] = 1

for row in rows:
	service = row['PROVIDER']
	if service in Provider:
		Provider[service] += 1
	else:
		Provider[service] = 1

for row in rows:
	origin = row['ACTIVATED']
	if origin in Establish_Date:
		Establish_Date[origin] += 1
	else:
		Establish_Date[origin] = 1

for row in rows:
	locale = row['BORONAME']
	if locale in City:
		City[locale] += 1
	else:
		City[locale] = 1

pprint(Type)
pprint(Provider)
pprint(Establish_Date)
pprint(City)