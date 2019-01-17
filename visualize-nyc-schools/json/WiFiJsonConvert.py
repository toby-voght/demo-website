#Read WiFi.csv
import json
import csv

with open('NYC_Free_Public_WiFi_03292017.csv', 'r') as f:
	reader = csv.DictReader(f)
	rows = [dict(row) for row in reader]

geojsonDict = {
	"type": "FeatureCollection",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG::4269" } },
	"features":[]
	}

with open('Clean_NYC_WiFi.json', 'w') as g:
	for row in rows:
		geojsonDict["features"].append({ "type": "Feature", "properties": { "STATE_CODE": "NY", "SCH_TYPE": "K-12 all grades", "FAX": "718-941-3152", "ADMIN_DIST": 75.0, "GRADES": "PK,0K,01,02,03,04,05,06,07,08,09,10,11,12,SE", "MANAGED_BY": 1.0, "GRADE": row["PROVIDER"], "City": "BROOKLYN", "ZIP": 11226, "CLUSTER": "<NA>", "PRIN_PH": "718-941-0320", "PRINCIPAL": "MICHELE THORNTON MANNIX", "GEO_DISTRI": 17, "BORONUM": 2.0, "ADDRESS": "655 PARKSIDE AVENUE", "SCHOOLNAME": row["NAME"], "BORO": "K", "REGENTS": "<NA>", "SAT": "<NA>", "GRADRATE": "<NA>", "LOC_CODE": "K141", "DBN": "75K141", "TYPE_WiFi": row["TYPE"], "REGENTS_RA": "<NA>", "GRAD_RAW": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } }
)
	json.dump(geojsonDict, g)