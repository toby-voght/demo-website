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
				geojsonDict["features"].append({ "type": "Feature", "properties": { "STATE_CODE": "NY", "SCH_TYPE": "K-12 all grades", "FAX": "718-941-3152", "ADMIN_DIST": 75.0, "GRADES": "PK,0K,01,02,03,04,05,06,07,08,09,10,11,12,SE", "MANAGED_BY": 1.0, "GRADE": row["PROVIDER"], "City": "BROOKLYN", "ZIP": 11226, "CLUSTER": "<NA>", "PRIN_PH": "718-941-0320", "PRINCIPAL": "MICHELE THORNTON MANNIX", "GEO_DISTRI": 17, "BORONUM": 2.0, "ADDRESS": "655 PARKSIDE AVENUE", "SCHOOLNAME": row["NAME"], "BORO": "K", "REGENTS": "<NA>", "Free": "HIGH", "GRADRATE": "HIGH", "LOC_CODE": "K141", "DBN": "75K141", "TYPE_WiFi": row["TYPE"], "REGENTS_RA": "<NA>", "GRAD_RAW": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
			elif clean_date >= previous_clean:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "STATE_CODE": "NY", "SCH_TYPE": "K-12 all grades", "FAX": "718-941-3152", "ADMIN_DIST": 75.0, "GRADES": "PK,0K,01,02,03,04,05,06,07,08,09,10,11,12,SE", "MANAGED_BY": 1.0, "GRADE": row["PROVIDER"], "City": "BROOKLYN", "ZIP": 11226, "CLUSTER": "<NA>", "PRIN_PH": "718-941-0320", "PRINCIPAL": "MICHELE THORNTON MANNIX", "GEO_DISTRI": 17, "BORONUM": 2.0, "ADDRESS": "655 PARKSIDE AVENUE", "SCHOOLNAME": row["NAME"], "BORO": "K", "REGENTS": "<NA>", "Free": "HIGH", "GRADRATE": "MED", "LOC_CODE": "K141", "DBN": "75K141", "TYPE_WiFi": row["TYPE"], "REGENTS_RA": "<NA>", "GRAD_RAW": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
			elif clean_date >= older_clean:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "STATE_CODE": "NY", "SCH_TYPE": "K-12 all grades", "FAX": "718-941-3152", "ADMIN_DIST": 75.0, "GRADES": "PK,0K,01,02,03,04,05,06,07,08,09,10,11,12,SE", "MANAGED_BY": 1.0, "GRADE": row["PROVIDER"], "City": "BROOKLYN", "ZIP": 11226, "CLUSTER": "<NA>", "PRIN_PH": "718-941-0320", "PRINCIPAL": "MICHELE THORNTON MANNIX", "GEO_DISTRI": 17, "BORONUM": 2.0, "ADDRESS": "655 PARKSIDE AVENUE", "SCHOOLNAME": row["NAME"], "BORO": "K", "REGENTS": "<NA>", "Free": "HIGH", "GRADRATE": "LOW", "LOC_CODE": "K141", "DBN": "75K141", "TYPE_WiFi": row["TYPE"], "REGENTS_RA": "<NA>", "GRAD_RAW": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
			else:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "STATE_CODE": "NY", "SCH_TYPE": "K-12 all grades", "FAX": "718-941-3152", "ADMIN_DIST": 75.0, "GRADES": "PK,0K,01,02,03,04,05,06,07,08,09,10,11,12,SE", "MANAGED_BY": 1.0, "GRADE": row["PROVIDER"], "City": "BROOKLYN", "ZIP": 11226, "CLUSTER": "<NA>", "PRIN_PH": "718-941-0320", "PRINCIPAL": "MICHELE THORNTON MANNIX", "GEO_DISTRI": 17, "BORONUM": 2.0, "ADDRESS": "655 PARKSIDE AVENUE", "SCHOOLNAME": row["NAME"], "BORO": "K", "REGENTS": "<NA>", "Free": "HIGH", "GRADRATE": "<N/A>", "LOC_CODE": "K141", "DBN": "75K141", "TYPE_WiFi": row["TYPE"], "REGENTS_RA": "<NA>", "GRAD_RAW": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
		else:
			if clean_date >= current_clean:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "STATE_CODE": "NY", "SCH_TYPE": "K-12 all grades", "FAX": "718-941-3152", "ADMIN_DIST": 75.0, "GRADES": "PK,0K,01,02,03,04,05,06,07,08,09,10,11,12,SE", "MANAGED_BY": 1.0, "GRADE": row["PROVIDER"], "City": "BROOKLYN", "ZIP": 11226, "CLUSTER": "<NA>", "PRIN_PH": "718-941-0320", "PRINCIPAL": "MICHELE THORNTON MANNIX", "GEO_DISTRI": 17, "BORONUM": 2.0, "ADDRESS": "655 PARKSIDE AVENUE", "SCHOOLNAME": row["NAME"], "BORO": "K", "REGENTS": "<NA>", "Free": "LOW", "GRADRATE": "HIGH", "LOC_CODE": "K141", "DBN": "75K141", "TYPE_WiFi": row["TYPE"], "REGENTS_RA": "<NA>", "GRAD_RAW": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
			elif clean_date >= previous_clean:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "STATE_CODE": "NY", "SCH_TYPE": "K-12 all grades", "FAX": "718-941-3152", "ADMIN_DIST": 75.0, "GRADES": "PK,0K,01,02,03,04,05,06,07,08,09,10,11,12,SE", "MANAGED_BY": 1.0, "GRADE": row["PROVIDER"], "City": "BROOKLYN", "ZIP": 11226, "CLUSTER": "<NA>", "PRIN_PH": "718-941-0320", "PRINCIPAL": "MICHELE THORNTON MANNIX", "GEO_DISTRI": 17, "BORONUM": 2.0, "ADDRESS": "655 PARKSIDE AVENUE", "SCHOOLNAME": row["NAME"], "BORO": "K", "REGENTS": "<NA>", "Free": "LOW", "GRADRATE": "MED", "LOC_CODE": "K141", "DBN": "75K141", "TYPE_WiFi": row["TYPE"], "REGENTS_RA": "<NA>", "GRAD_RAW": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
			elif clean_date >= older_clean:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "STATE_CODE": "NY", "SCH_TYPE": "K-12 all grades", "FAX": "718-941-3152", "ADMIN_DIST": 75.0, "GRADES": "PK,0K,01,02,03,04,05,06,07,08,09,10,11,12,SE", "MANAGED_BY": 1.0, "GRADE": row["PROVIDER"], "City": "BROOKLYN", "ZIP": 11226, "CLUSTER": "<NA>", "PRIN_PH": "718-941-0320", "PRINCIPAL": "MICHELE THORNTON MANNIX", "GEO_DISTRI": 17, "BORONUM": 2.0, "ADDRESS": "655 PARKSIDE AVENUE", "SCHOOLNAME": row["NAME"], "BORO": "K", "REGENTS": "<NA>", "Free": "LOW", "GRADRATE": "LOW", "LOC_CODE": "K141", "DBN": "75K141", "TYPE_WiFi": row["TYPE"], "REGENTS_RA": "<NA>", "GRAD_RAW": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
			else:
				geojsonDict["features"].append({ "type": "Feature", "properties": { "STATE_CODE": "NY", "SCH_TYPE": "K-12 all grades", "FAX": "718-941-3152", "ADMIN_DIST": 75.0, "GRADES": "PK,0K,01,02,03,04,05,06,07,08,09,10,11,12,SE", "MANAGED_BY": 1.0, "GRADE": row["PROVIDER"], "City": "BROOKLYN", "ZIP": 11226, "CLUSTER": "<NA>", "PRIN_PH": "718-941-0320", "PRINCIPAL": "MICHELE THORNTON MANNIX", "GEO_DISTRI": 17, "BORONUM": 2.0, "ADDRESS": "655 PARKSIDE AVENUE", "SCHOOLNAME": row["NAME"], "BORO": "K", "REGENTS": "<NA>", "Free": "LOW", "GRADRATE": "<N/A>", "LOC_CODE": "K141", "DBN": "75K141", "TYPE_WiFi": row["TYPE"], "REGENTS_RA": "<NA>", "GRAD_RAW": row["LOCATION_T"] }, "geometry": { "type": "Point", "coordinates": [ row["LON"], row["LAT"] ] } })
	json.dump(geojsonDict, g)