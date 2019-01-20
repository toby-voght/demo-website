#This is a program I created to experiment with sorting date/time sorting
from datetime import datetime

first = "2017-03-11"
second = "2018-01-01"
date_format = "%Y-%m-%d"

date1 = datetime.strptime(first, date_format)
date2 = datetime.strptime(second, date_format)

if date1 > date2:
	print("January is greater than February")
elif date2 > date1:
	print("February is greater than January")
else:
	print("Months can't be compared")