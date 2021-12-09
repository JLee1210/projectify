import { InputRowRoutes } from '../components/InputRowRoutes'
import { NavBar } from '../components/NavBar'
import { DynamicTable } from '../components/DynamicTable'
import { Fragment, useContext, useEffect } from 'react'
import { TableContext } from '../context/TableProvider'
import { MDBIcon } from 'mdbreact'
import useFetch from 'react-fetch-hook'
import {
    courseUrl,
    departmentUrl,
    majorUrl,
    majorRelationUrl,
    projectUrl,
    studentUrl,
} from '../constants/endpoints'

// const test = [
//     {
//         name: 'Bob Mars',
//         age: 21,
//         major: 'Computer Science',
//         email: 'bmars1@purdue.edu',
//     },
//     {
//         name: 'Bob Mars',
//         age: 20,
//         major: 'Computer Science',
//         email: 'bmars2@purdue.edu',
//     },
//     {
//         name: 'James Bond',
//         age: 44,
//         major: 'Math',
//         email: 'jbond@purdue.edu',
//     },
// ]

export const TablesPage = () => {
    const { data } = useContext(TableContext)
    //TODO: fill this with data
    const studentFetch = useFetch(studentUrl)
    const courseFetch = useFetch(courseUrl)
    const projectFetch = useFetch(projectUrl)
    const departmentFetch = useFetch(departmentUrl)
    const majorFetch = useFetch(majorUrl)
    const majorRelationFetch = useFetch(majorRelationUrl)

    useEffect(() => {
        if (!studentFetch.isLoading) {
            data['student'].setTable(studentFetch.data.data)
        }
        if (!projectFetch.isLoading) {
            data['project'].setTable(projectFetch.data.data)
        }
        if (!courseFetch.isLoading) {
            data['course'].setTable(courseFetch.data.data)
        }
        if (!majorFetch.isLoading) {
            data['major'].setTable(majorFetch.data.data)
        }
        if (!majorRelationFetch.isLoading) {
            data['majorRelation'].setTable(majorRelationFetch.data.data)
        }
        if (!departmentFetch.isLoading) {
            data['department'].setTable(departmentFetch.data.data)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        studentFetch.isLoading,
        courseFetch.isLoading,
        projectFetch.isLoading,
        departmentFetch.isLoading,
        majorFetch.isLoading,
        majorRelationFetch.isLoading,
    ])

    const isTableLoading =
        studentFetch.isLoading ||
        courseFetch.isLoading ||
        projectFetch.isLoading ||
        departmentFetch.isLoading ||
        majorFetch.isLoading ||
        majorRelationFetch.isLoading
    return (
        <Fragment>
            <NavBar />
            <div id="flex" className="d-flex flex-column">
                <InputRowRoutes />
                <div className="bt blue-grey-text"> </div>
                {isTableLoading ? (
                    <MDBIcon icon="spinner" spin={true} />
                ) : (
                    <DynamicTable
                        scrollY
                        scrollX
                        maxHeight="50vh"
                        striped
                        sortable={false}
                        responsive
                    />
                )}
            </div>
        </Fragment>
    )
}
