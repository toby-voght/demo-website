#Read WiFi.csv
import json
import csv
from datetime import datetime

with open('NYC_Free_Public_WiFi_03292017.csv', 'r') as f:
	reader = csv.DictReader(f)
	rows = [dict(row) for row in reader]

geojsonDict = {
	"type": "FeatureCollection",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG::4269" } },
	"features":[]
	}

date_format = "%m/%d/%Y %X %p +%f"
date_format2 = "%m/%d/%Y"
current = 0
current_clean = datetime.strptime("01/01/2018", date_format2)
previous = 0
previous_clean = datetime.strptime("01/01/2017", date_format2)
older = 0
older_clean = datetime.strptime("01/01/2016", date_format2)
undefined = 0

print("2018: " + str(current) + "   2017: " + str(previous) + "   2016: " + str(older) + "   Undefined: " + str(undefined))
with open('Clean_NYC_WiFi.json', 'w') as g:
	for row in rows:
		clean_date = datetime.strptime(row['ACTIVATED'], date_format)
		if row ['TYPE'] == "Free":
			if clean_date >= current_clean:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "PROVIDER": row["PROVIDER"], "WiFiNAME": row["NAME"], "Free": "HIGH", "ACTIVATED": "HIGH", "TYPE_WiFi": row["TYPE"], "INOUT": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
			elif clean_date >= previous_clean:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "PROVIDER": row["PROVIDER"], "WiFiNAME": row["NAME"], "Free": "HIGH", "ACTIVATED": "MED", "TYPE_WiFi": row["TYPE"], "INOUT": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
			elif clean_date >= older_clean:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "PROVIDER": row["PROVIDER"], "WiFiNAME": row["NAME"], "Free": "HIGH", "ACTIVATED": "LOW", "TYPE_WiFi": row["TYPE"], "INOUT": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
			else:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "PROVIDER": row["PROVIDER"], "WiFiNAME": row["NAME"], "Free": "HIGH", "ACTIVATED": "<N/A>", "TYPE_WiFi": row["TYPE"], "INOUT": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
		else:
			if clean_date >= current_clean:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "PROVIDER": row["PROVIDER"], "WiFiNAME": row["NAME"], "Free": "LOW", "ACTIVATED": "HIGH", "TYPE_WiFi": row["TYPE"], "INOUT": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
			elif clean_date >= previous_clean:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "PROVIDER": row["PROVIDER"], "WiFiNAME": row["NAME"], "Free": "LOW", "ACTIVATED": "MED", "TYPE_WiFi": row["TYPE"], "INOUT": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
			elif clean_date >= older_clean:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "PROVIDER": row["PROVIDER"], "WiFiNAME": row["NAME"], "Free": "LOW", "ACTIVATED": "LOW", "TYPE_WiFi": row["TYPE"], "INOUT": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
			else:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "PROVIDER": row["PROVIDER"], "WiFiNAME": row["NAME"], "Free": "LOW", "ACTIVATED": "<N/A>", "TYPE_WiFi": row["TYPE"], "INOUT": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
	json.dump(geojsonDict, g)