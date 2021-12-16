import { createContext, useState } from 'react'

export const TableContext = createContext()

export const TableProvider = ({ children }) => {
    const [tableType, setTableType] = useState()
    const [avgGpaMajorTable, setAvgGpaMajor] = useState()
    const [courseTable, setCourseTable] = useState()
    const [departmentTable, setDepartmentTable] = useState()
    const [majorTable, setMajorTable] = useState()
    const [majorRelationTable, setMajorRelationTable] = useState()
    const [numProjectsByDepartmentTable, setNumProjectsByDepartment] =
        useState()
    const [numProjectsByStudentTable, setNumProjectsByStudent] = useState()
    const [projectTable, setProjectTable] = useState()
    const [studentTable, setStudentTable] = useState()
    const [studentProjectsTable, setStudentProjectsTable] = useState()
    const [isReport, setIsReport] = useState(false)
    const [showReport, setShowReport] = useState(false)

    const value = {
        isReport,
        setIsReport,
        setShowReport,
        setTableType,
        showReport,
        tableType,
        data: {
            avgGpaMajor: {
                table: avgGpaMajorTable,
                setTable: setAvgGpaMajor,
            },
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
            numProjectsByDepartment: {
                table: numProjectsByDepartmentTable,
                setTable: setNumProjectsByDepartment,
            },
            numProjectsByStudent: {
                table: numProjectsByStudentTable,
                setTable: setNumProjectsByStudent,
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
