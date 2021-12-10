import random as rand

import sql


def add(conn, row, table):
    cursor = conn.cursor()
    if table == "student":
        conn.execute(sql.ADD_STUDENT_ROW, tuple(row))
    elif table == "course":
        conn.execute(sql.ADD_COURSE_ROW, tuple(row))
    elif table == "project":
        conn.execute(sql.ADD_PROJECT_ROW, tuple(row))
    elif table == "department":
        conn.execute(sql.ADD_DEPARTMENT_ROW, tuple(row))
    elif table == "major":
        conn.execute(sql.ADD_MAJOR_ROW, tuple(row))
    elif table == "major_relation":
        conn.execute(sql.ADD_MAJOR_RELATION_ROW, tuple(row))
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
    print('Deleted record ID ' + str(row[0]) + ' in table ' + table)


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
    print('Updated record ID ' + str(old_row[0]) + ' in table ' + table)


def retrieve(conn, args):
    conn.execute()


def table_to_json(conn, table):
    cursor = conn.cursor()

    # clean string to avoid sql injection
    table_name = ''.join(ch for ch in table if ch.isalnum())

    cursor.execute("SELECT * FROM {}".format(table))
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
