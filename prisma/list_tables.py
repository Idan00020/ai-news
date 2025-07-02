# List all tables in an SQLite database using Python

import sqlite3

# Replace with your database file name
db_path = "dev.db"

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()

print("Tables in database:")
for table in tables:
    print(table[0])

conn.close()