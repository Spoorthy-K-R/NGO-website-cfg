import sqlite3
import json
con = sqlite3.connect('db.sqlite3')

cursor = con.cursor()

cursor.execute("SELECT * FROM allCounts")
x = cursor.fetchall()

# for i in x:
#     i = json.dumps(i)
# print(json.dumps(x))

y = dict()
for a in x:
    key, value = a[0], a[1]
    y[key] = value

print(json.dumps(y))