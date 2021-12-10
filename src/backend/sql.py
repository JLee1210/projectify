UPDATE_STUDENT_ROW = """ UPDATE student
                         SET studentid = ?,
                             projectid = ?,
                             graduatingclass = ?,
                             gpa = ?,
                             name = ?
                         WHERE studentid = ? AND projectid = ?
                    """

UPDATE_COURSE_ROW = """ UPDATE course
                        SET courseid = ?,
                            coursename = ?,
                            instructor = ?,
                            departmentid = ?
                        WHERE courseid = ?
                    """

UPDATE_PROJECT_ROW = """ UPDATE project
                         SET projectid = ?,
                             name = ?,
                             courseid = ?
                         WHERE projectid = ?
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
