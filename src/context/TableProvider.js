import { createContext, useState } from 'react'

export const TableContext = createContext()

export const TableProvider = ({ children }) => {
    const [tableType, setTableType] = useState()
    const [studentTable, setStudentTable] = useState()
    const [classTable, setClassTable] = useState()
    const [projectTable, setProjectTable] = useState()
    const [majorTable, setMajorTable] = useState()
    const [departmentTable, setDepartmentTable] = useState()

    const value = {
        tableType,
        setTableType,
        data: {
            student: { table: studentTable, setTable: setStudentTable },
            class: { table: classTable, setTable: setClassTable },
            project: { table: projectTable, setTable: setProjectTable },
            major: { table: majorTable, setTable: setMajorTable },
            department: {
                table: departmentTable,
                setTable: setDepartmentTable,
            },
        },
    }

    return (
        <TableContext.Provider value={value}>{children}</TableContext.Provider>
    )
}
