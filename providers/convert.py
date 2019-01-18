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

pprint(hotspots_per_provider)


# Writiting in json

with open('NYC_Free_Public_WiFi_03292017.json', 'w') as f:
    json.dump(hotspots_per_provider, f, indent = 2)



pprint(hotspots_per_provider)


