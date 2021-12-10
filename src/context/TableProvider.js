import { createContext, useState } from 'react'

export const TableContext = createContext()

export const TableProvider = ({ children }) => {
    const [tableType, setTableType] = useState()
    const [courseTable, setCourseTable] = useState()
    const [departmentTable, setDepartmentTable] = useState()
    const [majorTable, setMajorTable] = useState()
    const [majorRelationTable, setMajorRelationTable] = useState()
    const [projectTable, setProjectTable] = useState()
    const [studentTable, setStudentTable] = useState()
    const [studentProjectsTable, setStudentProjectsTable] = useState()

    const value = {
        tableType,
        setTableType,
        data: {
            course: { table: courseTable, setTable: setCourseTable },
            department: {
                table: departmentTable,
                setTable: setDepartmentTable,
            },
            major: { table: majorTable, setTable: setMajorTable },
            majorRelation: {
                table: majorRelationTable,
                setTable: setMajorRelationTable,
            },
            project: { table: projectTable, setTable: setProjectTable },
            student: { table: studentTable, setTable: setStudentTable },
            studentProjects: {
                table: studentProjectsTable,
                setTable: setStudentProjectsTable,
            },
        },
    }

    return (
        <TableContext.Provider value={value}>{children}</TableContext.Provider>
    )
}
