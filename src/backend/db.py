import sqlite3
import random as rand

import sql

STUDENT_SCHEMA = ('STUDENTID', 'PROJECTID', 'GRADUATINGCLASS', 'GPA', 'NAME')
COURSE_SCHEMA = ('COURSEID', 'COURSENAME', 'INSTRUCTOR', 'DEPARTMENTID')
PROJECT_SCHEMA = ('PROJECTID', 'NAME', 'COURSEID')
MAJOR_RELATION_SCHEMA = ('STUDENTID', 'MAJORID')
MAJOR_SCHEMA = ('MAJORID', 'NAME')
DEPARTMENT_SCHEMA = ('DEPARTMENTID', 'DEPARTMENTNAME', 'DEPARTMENTHEAD')


def get_table_schema(table):
    if table == "student":
        return STUDENT_SCHEMA
    elif table == "course":
        return COURSE_SCHEMA
    elif table == "project":
        return PROJECT_SCHEMA
    elif table == "major":
        return MAJOR_SCHEMA
    elif table == "department":
        return DEPARTMENT_SCHEMA
    elif table == "major_relation":
        return MAJOR_RELATION_SCHEMA


def add(conn, row, table):
    cursor = conn.cursor()
    cursor.execute(f'INSERT INTO {table} {get_table_schema(table)} \nVALUES \
                   {tuple(row)}')
    conn.commit()
    print('Added record ID ' + str(row[0]) + ' to table ' + table)


def delete(conn, row, table):
    cursor = conn.cursor()
    params = []
    if table == "student":
        params.append(row[0])
        params.append(row[1])
        conn.execute(sql.DELETE_STUDENT_ROW, tuple(params))
    elif table == "course":
        params.append(row[0])
        conn.execute(sql.DELETE_COURSE_ROW, tuple(params))
    elif table == "project":
        params.append(row[0])
        conn.execute(sql.DELETE_PROJECT_ROW, tuple(params))
    elif table == "department":
        params.append(row[0])
        conn.execute(sql.DELETE_DEPARTMENT_ROW, tuple(params))
    elif table == "major":
        params.append(row[0])
        conn.execute(sql.DELETE_MAJOR_ROW, tuple(params))
    elif table == "major_relation":
        params.append(row[0])
        params.append(row[1])
        conn.execute(sql.DELETE_MAJOR_RELATION_ROW, tuple(params))
    conn.commit()
    print('Deleted record ID ' + str(row[0]) + ' to table ' + table)


def edit(conn, old_row, new_row, table):
    cursor = conn.cursor()
    params = new_row.copy()

    if table == "student":
        params.append(old_row[0])
        params.append(old_row[1])
        conn.execute(sql.UPDATE_STUDENT_ROW, tuple(params))
    elif table == "course":
        params.append(old_row[0])
        conn.execute(sql.UPDATE_COURSE_ROW, tuple(params))
    elif table == "project":
        params.append(old_row[0])
        conn.execute(sql.UPDATE_PROJECT_ROW, tuple(params))
    elif table == "department":
        params.append(old_row[0])
        conn.execute(sql.UPDATE_DEPARTMENT_ROW, tuple(params))
    elif table == "major":
        params.append(old_row[0])
        conn.execute(sql.UPDATE_MAJOR_ROW, tuple(params))
    elif table == "major_relation":
        params.append(old_row[0])
        params.append(old_row[1])
        conn.execute(sql.UPDATE_MAJOR_RELATION_ROW, tuple(params))
    conn.commit()
    print('Updated record ID ' + str(row[0]) + ' to table ' + table)


def retrieve(conn, args):
    conn.execute()


def table_to_json(conn, table):
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM {table}")
    data = cursor.fetchall()
    jsonArray = []
    if table == "student":
        for student_id, project_id, name, gpa, grad_class in data:
            jsonData = {}
            jsonData['studentId'] = student_id
            jsonData['projectId'] = project_id
            jsonData['gradClass'] = grad_class
            jsonData['gpa'] = gpa
            jsonData['name'] = name
            jsonArray.append(jsonData)
    elif table == "course":
        for course_id, name, instructor, department_id in data:
            jsonData = {}
            jsonData['courseId'] = course_id
            jsonData['name'] = name
            jsonData['instructor'] = instructor
            jsonData['departmentId'] = department_id
            jsonArray.append(jsonData)
    elif table == "project":
        for project_id, name, course_id in data:
            jsonData = {}
            jsonData['projectId'] = project_id
            jsonData['name'] = name
            jsonData['courseId'] = course_id
            jsonArray.append(jsonData)
    elif table == "major":
        for major_id, name in data:
            jsonData = {}
            jsonData['majorId'] = major_id
            jsonData['name'] = name
            jsonArray.append(jsonData)
    elif table == "department":
        for department_id, name, department_head in data:
            jsonData = {}
            jsonData['departmentId'] = department_id
            jsonData['name'] = name
            jsonData['departmentHead'] = department_head
            jsonArray.append(jsonData)
    elif table == "major_relation":
        for student_id, major_id in data:
            jsonData = {}
            jsonData['studentId'] = student_id
            jsonData['majorId'] = major_id
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
                    (STUDENTID         INT     NOT NULL,
                    PROJECTID          INT     NOT NULL,
                    GRADUATINGCLASS    TEXT    NOT NULL,
                    GPA                INT     NOT NULL,
                    NAME               TEXT    NOT NULL,
                    PRIMARY KEY (STUDENTID, PROJECTID)
                );
                ''')

    conn.execute('''CREATE TABLE IF NOT EXISTS COURSE
                    (COURSEID      INT     NOT NULL,
                    COURSENAME     TEXT    NOT NULL,
                    INSTRUCTOR     TEXT    NOT NULL,
                    DEPARTMENTID   INT     NOT NULL,
                    PRIMARY KEY (COURSEID)
                );
                ''')

    conn.execute('''CREATE TABLE IF NOT EXISTS PROJECT
                    (PROJECTID     INT     NOT NULL,
                    NAME           TEXT    NOT NULL,
                    COURSEID       INT     NOT NULL,
                    PRIMARY KEY (PROJECTID)
                );
                ''')

    conn.execute('''CREATE TABLE IF NOT EXISTS DEPARTMENT
                    (DEPARTMENTID     INT       NOT NULL,
                    DEPARTMENTNAME    TEXT      NOT NULL,
                    DEPARTMENTHEAD    TEXT      NOT NULL,
                    PRIMARY KEY (DEPARTMENTID)
                );
                ''')

    conn.execute('''CREATE TABLE IF NOT EXISTS MAJOR
                    (MAJORID    INT    NOT NULL,
                    NAME        TEXT   NOT NULL,
                    PRIMARY KEY (MAJORID)
                );
                ''')
    conn.execute('''CREATE TABLE IF NOT EXISTS MAJOR_RELATION
                (STUDENTID    INT    NOT NULL,
                MAJORID       INT    NOT NULL,
                PRIMARY KEY (STUDENTID, MAJORID)
                );
            ''')
    print("Tables created successfully")


if __name__ == '__main__':
    main()
