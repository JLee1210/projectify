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


def viewTable(conn, table):
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM {table}")
    data = cursor.fetchall()
    jsonArray = []
    if table == "student":
        for student_id, name, age, major, email in data:
            jsonData = {}
            jsonData['studentId'] = student_id
            jsonData['name'] = name
            jsonData['age'] = age
            jsonData['major'] = major
            jsonData['email'] = email
            jsonArray.append(jsonData)
    elif table == "class":
        for course_num, department, name, size, instructor in data:
            jsonData = {}
            jsonData['course-num'] = course_num
            jsonData['name'] = name
            jsonData['size'] = size
            jsonData['department'] = department
            jsonData['instructor'] = instructor
            jsonArray.append(jsonData)
    elif table == "project":
        for name, points, group_size in data:
            jsonData = {}
            jsonData['points'] = points
            jsonData['name'] = name
            jsonData['group-size'] = group_size
            jsonArray.append(jsonData)
    elif table == "major":
        for major_id, name in data:
            jsonData = {}
            jsonData['majorId'] = major_id
            jsonData['name'] = name
            jsonArray.append(jsonData)
    elif table == "department":
        for name, department_id in data:
            jsonData = {}
            jsonData['majorId'] = department_id
            jsonData['name'] = name
            jsonArray.append(jsonData)
    return jsonArray


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
                    EMAIL      TEXT);
                ''')

    conn.execute('''CREATE TABLE IF NOT EXISTS CLASS
                    (COURSENUM INT PRIMARY KEY     NOT NULL,
                    DEPARTMENT     TEXT    NOT NULL,
                    AGE            INT     NOT NULL,
                    SIZE           INT     NOT NULL,
                    INSTRUCTOR     TEXT    NOT NULL);
                ''')

    conn.execute('''CREATE TABLE IF NOT EXISTS PROJECT
                    (NAME TEXT PRIMARY KEY     NOT NULL,
                    POINTS     INT    NOT NULL,
                    SIZE       INT);
                ''')

    conn.execute('''CREATE TABLE IF NOT EXISTS MAJOR
                    (ID INT PRIMARY KEY    NOT NULL,
                    NAME    TEXT           NOT NULL);
                ''')

    conn.execute('''CREATE TABLE IF NOT EXISTS MAJOR
                    (ID INT PRIMARY KEY    NOT NULL,
                    NAME    TEXT           NOT NULL);
                ''')
    print("Tables created successfully")

if __name__ == '__main__':
    main()
