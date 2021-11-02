import sqlite3
import random as rand


studentSchema = ('ID', 'NAME', 'AGE', 'MAJOR', 'EMAIL')


def add(conn, args, table):
    cursor = conn.cursor()
    cursor.execute(f'INSERT INTO {table} {studentSchema} \nVALUES {tuple(args)}')
    conn.commit()
    print('Added record ID ' + str(args[0]) + ' to table ' + table)


def delete(conn, args, table):

    conn.execute()

# Executing a custom search query


def retrieve(conn, args):

    conn.execute()

# Replacing a given row with the updated version of that row


def edit(conn, args, table):

    conn.execute()


def viewStudent(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM STUDENT")
    return cursor.fetchall()


# Reports
# def report1(conn):

# def report2(conn):

# def report3(conn):

# def report4(conn):


def main():

    # DB connection
    conn = sqlite3.connect('test.db')
    print("Opened database successfully")
    # Table creation
#     conn.execute('''DROP TABLE IF EXISTS STUDENT;''') # ONLY UNCOMMENT WHEN CLEARING TABLE
    conn.execute('''CREATE TABLE IF NOT EXISTS STUDENT
         (ID INT PRIMARY KEY     NOT NULL,
         NAME           TEXT    NOT NULL,
         AGE            INT     NOT NULL,
         MAJOR        CHAR(50),
     EMAIL      TEXT);''')
    print("Table created successfully")

    # Driver Code:

    # Debug

    # Test Add
    addArgs = [int(rand.random()*10000000),
               'John Smith', 20, 'Computer Science', 'jsmith@purdue.edu']
    addTable = 'STUDENT'
    add(conn, addArgs, addTable)

    conn.commit()

    # Test Retrieve
    print(viewStudent(conn))

    conn.close()


if __name__ == '__main__':
    main()
