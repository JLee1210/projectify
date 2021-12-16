ADD_COURSE_ROW = """ INSERT INTO course
                     ('COURSEID', 'COURSENAME', 'INSTRUCTOR', 'DEPARTMENTID')
                     VALUES (?,?,?,?)
                 """

ADD_DEPARTMENT_ROW = """ INSERT INTO department
                         ('DEPARTMENTID', 'DEPARTMENTNAME', 'DEPARTMENTHEAD')
                         VALUES (?,?,?)
                     """

ADD_MAJOR_ROW = """ INSERT INTO major
                    ('MAJORID', 'NAME')
                    VALUES (?,?)
                """

ADD_MAJOR_RELATION_ROW = """ INSERT INTO major_relation
                             ('STUDENTID', 'MAJORID')
                             VALUES (?,?)
                         """

ADD_PROJECT_ROW = """ INSERT INTO project
                      ('PROJECTID', 'NAME', 'COURSEID')
                      VALUES (?,?,?)
                  """

ADD_STUDENT_ROW = """ INSERT INTO student
                      ('STUDENTID', 'PROJECTID',
                        'GRADUATINGCLASS', 'GPA', 'NAME')
                      VALUES (?,?,?,?,?)
                  """

DELETE_COURSE_ROW = """ DELETE FROM course
                        WHERE courseid = ?
                    """

DELETE_DEPARTMENT_ROW = """ DELETE FROM department
                            WHERE departmentid = ?
                        """

DELETE_MAJOR_ROW = """ DELETE FROM major
                       WHERE majorid = ?
                   """

DELETE_MAJOR_RELATION_ROW = """ DELETE FROM major_relation
                                WHERE studentid = ? AND majorid = ?
                            """

DELETE_PROJECT_ROW = """ DELETE FROM project
                         WHERE projectid = ?
                     """

DELETE_STUDENT_ROW = """ DELETE FROM student
                         WHERE studentid = ? AND projectid = ?
                     """

REPORT_GPA_BY_MAJOR = """ SELECT major.name, ROUND(AVG(student.GPA), 2)
                          FROM student LEFT JOIN major_relation ON student.studentid = major_relation.studentid
                                LEFT JOIN major ON major_relation.majorid = major.majorid
                          WHERE major.name = ?
                      """

REPORT_STUDENT_PROJECTS = """ SELECT student.studentid, student.name, student.projectid, project.name
                              FROM student LEFT JOIN project
                                ON student.projectid = project.projectid
                              WHERE student.studentid = ?
                          """

REPORT_COUNT_PROJECTS = """ SELECT studentid, name, count(distinct(projectid))
                            FROM student
                            GROUP BY studentid;
                        """

REPORT_DEPARTMENT_LOAD = """SELECT departmenthead, departmentname, count(distinct(projectid)) as numberOfProjects
                            FROM project p LEFT JOIN course c ON p.courseid = c.courseid
                            LEFT JOIN department d ON c.departmentid = d.departmentid
                            GROUP BY departmenthead;
                         """



UPDATE_COURSE_ROW = """ UPDATE course
                        SET courseid = ?,
                            coursename = ?,
                            instructor = ?,
                            departmentid = ?
                        WHERE courseid = ?
                    """

UPDATE_DEPARTMENT_ROW = """ UPDATE department
                            SET departmentid = ?,
                                departmentname = ?,
                                departmenthead = ?
                            WHERE departmentid = ?
                        """

UPDATE_MAJOR_ROW = """ UPDATE major
                       SET majorid = ?,
                           name = ?
                       WHERE majorid = ?
                   """

UPDATE_MAJOR_RELATION_ROW = """ UPDATE major_relation
                                SET studentid = ?,
                                    majorid = ?
                                WHERE studentid = ? AND majorid = ?
                            """

UPDATE_PROJECT_ROW = """ UPDATE project
                         SET projectid = ?,
                             name = ?,
                             courseid = ?
                         WHERE projectid = ?
                     """

UPDATE_STUDENT_ROW = """ UPDATE student
                         SET studentid = ?,
                             projectid = ?,
                             graduatingclass = ?,
                             gpa = ?,
                             name = ?
                         WHERE studentid = ? AND projectid = ?
                     """
