import sqlite3


def main():
    # DB connection
    conn = sqlite3.connect('../test.db')
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

    conn.execute('''CREATE INDEX IF NOT EXISTS Student_idx ON STUDENT (STUDENTID, NAME);''')
    conn.execute('''CREATE INDEX IF NOT EXISTS Project_idx ON PROJECT (COURSEID, NAME);''')
    conn.execute('''CREATE INDEX IF NOT EXISTS Major_idx ON MAJOR_RELATION (STUDENTID, MAJORID);''')

    print("Tables created successfully")


if __name__ == '__main__':
    main()
