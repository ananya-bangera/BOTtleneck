import faker
import mysql.connector as con

fake = faker.Faker()
mydb = con.connect(
    host="localhost", user="root", password="Vaibhav@143", database="restaurant"
)
cur = mydb.cursor()
# cur.execute("SHOW DATABASES")
# for i in cur:
#     print(i)
# cur.execute("USE restaurant")
# print("\nTables: \n")
# cur.execute("SHOW TABLES")
# for i in cur:
#     print(i)
# cur.execute("SELECT * FROM people")  # list of tuples is returned
# result = (
#     cur.fetchall()
# )  # it will fetch all the result in that variable as list of tuples.
# print(result)
# for i in cur:
#     print(
#         i[0]
# )  # this won't work because data returned by cur object is already fetched

# after insert, update, delete on tables you have to use commit statement on database to permanently apply the modification
# mydb.commit() -> will commit all the modifications

# ======= many statements at once
# sql = "INSERT INTO customers (name, address) VALUES (%s, %s)"
# val = [
#   ('Peter', 'Lowstreet 4'),
#   ('Amy', 'Apple st 652'),
#   ('Hannah', 'Mountain 21'),
#   ('Michael', 'Valley 345'),
#   ('Sandy', 'Ocean blvd 2'),
#   ('Betty', 'Green Grass 1'),
#   ('Richard', 'Sky st 331'),
#   ('Susan', 'One way 98'),
#   ('Vicky', 'Yellow Garden 2'),
#   ('Ben', 'Park Lane 38'),
#   ('William', 'Central st 954'),
#   ('Chuck', 'Main Road 989'),
#   ('Viola', 'Sideway 1633')
# ]

# mycursor.executemany(sql, val)
# where sql is a SQL statement and val is list of tuples as paramaeters %s, %d can be used
import random


for i in range(1, 6):
    print("dish number", i)
    name = input("Enter the name of dish: ")
    taste = input("Enter the taste of dish: ")
    rating = random.randint(6, 10)
    price = int(input("Enter the price of dish: "))
    dishtype = input("Enter the type of dish: ")
    place = input("Enter the place to which dish belong: ")
    cur.execute(
        'INSERT INTO menu (name, taste, rating, price, type, place) VALUES ("{0}", "{1}", {2}, {3}, "{4}", "{5}");'.format(
            name, taste, rating, price, dishtype, place
        )
    )

mydb.commit()
