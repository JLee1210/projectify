import { InputRowRoutes } from '../components/InputRowRoutes'
import { NavBar } from '../components/NavBar'
import { DynamicTable } from '../components/DynamicTable'
import { Fragment, useContext, useEffect } from 'react'
import { TableContext } from '../context/TableProvider'
import { MDBIcon } from 'mdbreact'
import useFetch from 'react-fetch-hook'
import {
    classUrl,
    departmentUrl,
    majorUrl,
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
    const classFetch = useFetch(classUrl)
    const projectFetch = useFetch(projectUrl)
    const departmentFetch = useFetch(departmentUrl)
    const majorFetch = useFetch(majorUrl)

    useEffect(() => {
        if (!studentFetch.isLoading) {
            data['student'].setTable(studentFetch.data.data)
        }
        if (!projectFetch.isLoading) {
            data['project'].setTable([])
        }
        if (!classFetch.isLoading) {
            data['class'].setTable([])
        }
        if (!majorFetch.isLoading) {
            data['major'].setTable([])
        }
        if (!departmentFetch.isLoading) {
            data['department'].setTable([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        studentFetch.isLoading,
        classFetch.isLoading,
        projectFetch.isLoading,
        departmentFetch.isLoading,
        majorFetch.isLoading,
    ])

    const isTableLoading =
        studentFetch.isLoading ||
        classFetch.isLoading ||
        projectFetch.isLoading ||
        departmentFetch.isLoading ||
        majorFetch.isLoading
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
