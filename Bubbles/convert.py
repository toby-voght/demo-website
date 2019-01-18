#!/usr/bin/env python3
# 

import json
import csv
from pprint import pprint

# Reading the csv file

with open('provider.json', 'r') as f:
	data = json.load(f)

# Now I have to write the CSV file

with open('bubble_provider.csv', 'w') as f:
	writer = csv.writer(f)
	writer.writerow(['id', 'value'])
	for d in data:
		provider = d["name"]
		value = d["value"]
		writer.writerow([provider, value])

