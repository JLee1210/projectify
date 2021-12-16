const localHost = 'http://127.0.0.1:5000'

/************************** TABLES URL ***************************/

export const courseUrl = `${localHost}/tables/course`
export const departmentUrl = `${localHost}/tables/department`
export const majorUrl = `${localHost}/tables/major`
export const majorRelationUrl = `${localHost}/tables/major_relation`
export const projectUrl = `${localHost}/tables/project`
export const studentUrl = `${localHost}/tables/student`

/************************* REPORTS URL ***************************/

export const avgGpaMajorUrl = `${localHost}/reports/avgGpaMajor`
export const numProjectsByDepartmentUrl = `${localHost}/reports/numProjectsByDepartment`
export const numProjectsByStudentUrl = `${localHost}/reports/numProjectsByStudent`
export const studentProjectUrl = `${localHost}/reports/studentProjects`

export const urlByTable = {
    avgGpaMajor: avgGpaMajorUrl,
    course: courseUrl,
    department: departmentUrl,
    major: majorUrl,
    majorRelation: majorRelationUrl,
    numProjectsByDepartment: numProjectsByDepartmentUrl,
    numProjectsByStudent: numProjectsByStudentUrl,
    project: projectUrl,
    student: studentUrl,
    studentProject: studentProjectUrl,
}
