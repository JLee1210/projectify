const localHost = 'http://127.0.0.1:5000'

export const courseUrl = `${localHost}/table/course`
export const departmentUrl = `${localHost}/table/department`
export const majorUrl = `${localHost}/table/major`
export const majorRelationUrl = `${localHost}/table/major_relation`
export const projectUrl = `${localHost}/table/project`
export const studentUrl = `${localHost}/table/student`
export const studentProjectUrl = `${localHost}/reports/studentProjects`
export const majorGpaUrl = `${localHost}/reports/majorGPA`

export const urlByTable = {
    course: courseUrl,
    department: departmentUrl,
    major: majorUrl,
    majorRelation: majorRelationUrl,
    project: projectUrl,
    student: studentUrl,
    studentProject: studentProjectUrl,
    majorGpa: majorGpaUrl,
}
