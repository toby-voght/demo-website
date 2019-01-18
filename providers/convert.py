#!/usr/bin/env python3
# 

import json
import csv
from pprint import pprint

# Reading the csv file

with open('NYC_Free_Public_WiFi_03292017.csv', 'r') as f:
	reader = csv.DictReader(f)
	hot_spots = [dict(row) for row in reader] 

# Group and count

hotspots_per_provider = {}
for hot_spot in hot_spots:
	provider = hot_spot['PROVIDER']
	if provider in hotspots_per_provider:
		hotspots_per_provider[provider] += 1
	else:
		hotspots_per_provider[provider] = 1

# {
#   "Spot On Networks": 16,
#   "LinkNYC - Citybridge": 1867,
#   "SPECTRUM": 343,
#   "QPL": 65,
#   "Transit Wireless": 276,
#   "NYPL": 90,
#   "ALTICEUSA": 237,
#   "Harlem": 128,
#   "BPL": 59,
#   "AT&T": 27,
#   "Manhattan Down Alliance": 36,
#   "Chelsea": 30,
#   "Partner": 2,
#   "NYCHA": 28,
#   "Fiberless": 30,
#   "Downtown Brooklyn": 100,
#   "City Tech": 11
# }

# Need to convert the object to an array
providers = []
for provider in hotspots_per_provider:
	number_hotspots = hotspots_per_provider[provider]
	print (provider, number_hotspots)

	# STEP 1: GENERATE DICTIONARY
	provider_dict = {
		"name": provider,
		"value": number_hotspots
	}

	# STEP 2: APPEND TO LIST
	providers.append(provider_dict)




# 	provider_dict = {}
# 	keys = range(2)
# 	values = ["name", "value"]
# 		for name in keys:
#     	for keys in values:
#         provider_dict[i] = x
# print(provider_dict) 

	

# Writiting in json

with open('NYC_Free_Public_WiFi_03292017.json', 'w') as f:
	json.dump(providers, f, indent = 2)

pprint(providers)



