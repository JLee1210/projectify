/*********** TABLES ***********/
export const courseHeader = [
    {
        label: 'Course ID',
        field: 'courseId',
        sort: 'asc',
        width: 120,
    },
    {
        label: 'Course Name',
        field: 'name',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Instructor',
        field: 'instructor',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Department ID',
        field: 'departmentId',
        sort: 'asc',
        width: 120,
    },
    {
        label: 'Edit/Delete',
        field: 'button',
        width: 200,
    },
]

export const departmentHeader = [
    {
        label: 'Department ID',
        field: 'departmentId',
        sort: 'asc',
        width: 120,
    },
    {
        label: 'Department Name',
        field: 'name',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Department Head',
        field: 'departmentHead',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Edit/Delete',
        field: 'button',
        width: 200,
    },
]

export const majorHeader = [
    {
        label: 'Major ID',
        field: 'majorId',
        sort: 'asc',
        width: 120,
    },
    {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Edit/Delete',
        field: 'button',
        width: 200,
    },
]

export const majorRelationHeader = [
    {
        label: 'Student ID',
        field: 'studentId',
        sort: 'asc',
        width: 120,
    },
    {
        label: 'Major ID',
        field: 'majorId',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Edit/Delete',
        field: 'button',
        width: 50,
    },
]

export const projectHeader = [
    {
        label: 'Project ID',
        field: 'projectId',
        sort: 'asc',
        width: 75,
    },
    {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Course ID',
        field: 'courseId',
        sort: 'asc',
        width: 75,
    },
    {
        label: 'Edit/Delete',
        field: 'button',
        width: 200,
    },
]

export const studentHeader = [
    {
        label: 'Student ID',
        field: 'studentId',
        sort: 'asc',
        width: 100,
    },
    {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Project ID',
        field: 'projectId',
        sort: 'asc',
        width: 100,
    },
    {
        label: 'GPA',
        field: 'gpa',
        sort: 'asc',
        width: 75,
    },
    {
        label: 'Graduation Class',
        field: 'gradClass',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Edit/Delete',
        field: 'button',
        width: 200,
    },
]

/*********** REPORTS ***********/
export const avgGpaMajorHeader = [
    {
        label: 'Major',
        field: 'major',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Average GPA',
        field: 'avgGpa',
        sort: 'asc',
        width: 120,
    },
]

export const numProjectsByDepartmentHeader = [
    {
        label: 'Department Head',
        field: 'departmentHead',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Department Name',
        field: 'departmentName',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Number of Projects',
        field: 'numProjects',
        sort: 'asc',
        width: 120,
    },
]

export const numProjectsByStudentHeader = [
    {
        label: 'Student ID',
        field: 'studentId',
        sort: 'asc',
        width: 120,
    },
    {
        label: 'Student Name',
        field: 'name',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Number of Projects',
        field: 'numProjects',
        sort: 'asc',
        width: 120,
    },
]

export const studentProjectsHeader = [
    {
        label: 'Student ID',
        field: 'studentId',
        sort: 'asc',
        width: 120,
    },
    {
        label: 'Student Name',
        field: 'studentName',
        sort: 'asc',
        width: 200,
    },
    {
        label: 'Project ID',
        field: 'projectId',
        sort: 'asc',
        width: 120,
    },
    {
        label: 'Project Name',
        field: 'projectName',
        sort: 'asc',
        width: 200,
    },
]

export const tableHeaderChooser = {
    avgGpaMajor: avgGpaMajorHeader,
    course: courseHeader,
    department: departmentHeader,
    major: majorHeader,
    majorRelation: majorRelationHeader,
    numProjectsByDepartment: numProjectsByDepartmentHeader,
    numProjectsByStudent: numProjectsByStudentHeader,
    project: projectHeader,
    student: studentHeader,
    studentProjects: studentProjectsHeader,
}
