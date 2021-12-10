import useFetch from 'react-fetch-hook'
import { MDBIcon } from 'mdbreact'
import { Fragment, useContext, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import { DynamicTable } from '../components/DynamicTable'
import { NavBar } from '../components/NavBar'
import {
    courseUrl,
    departmentUrl,
    majorUrl,
    majorRelationUrl,
    projectUrl,
    studentUrl,
} from '../constants/endpoints'
import { TableContext } from '../context/TableProvider'
import { HomePage } from '../pages/HomePage'
import { InputRowRoutes } from '../routes/InputRowRoutes'
import { ReportRoutes } from '../routes/ReportRoutes'

export const TablesPage = () => {
    const { data } = useContext(TableContext)
    const courseFetch = useFetch(courseUrl)
    const departmentFetch = useFetch(departmentUrl)
    const majorFetch = useFetch(majorUrl)
    const majorRelationFetch = useFetch(majorRelationUrl)
    const projectFetch = useFetch(projectUrl)
    const studentFetch = useFetch(studentUrl)

    useEffect(() => {
        if (!courseFetch.isLoading) {
            data['course'].setTable(courseFetch.data.data)
        }
        if (!departmentFetch.isLoading) {
            data['department'].setTable(departmentFetch.data.data)
        }
        if (!majorFetch.isLoading) {
            data['major'].setTable(majorFetch.data.data)
        }
        if (!majorRelationFetch.isLoading) {
            data['majorRelation'].setTable(majorRelationFetch.data.data)
        }
        if (!studentFetch.isLoading) {
            data['student'].setTable(studentFetch.data.data)
        }
        if (!projectFetch.isLoading) {
            data['project'].setTable(projectFetch.data.data)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        courseFetch.isLoading,
        departmentFetch.isLoading,
        majorFetch.isLoading,
        majorRelationFetch.isLoading,
        projectFetch.isLoading,
        studentFetch.isLoading,
    ])

    const isTableLoading =
        courseFetch.isLoading ||
        departmentFetch.isLoading ||
        majorFetch.isLoading ||
        majorRelationFetch.isLoading ||
        projectFetch.isLoading ||
        studentFetch.isLoading
    return (
        <Fragment>
            <NavBar />
            <div id="flex" className="d-flex flex-column">
                <Switch>
                    <Route exact path="/projectify" component={HomePage} />
                    <Route
                        path="/projectify/tables"
                        component={InputRowRoutes}
                    />
                    <Route
                        path="/projectify/reports"
                        component={ReportRoutes}
                    />
                    <Route
                        render={() => (
                            <h1 className="blue-grey-text text-center">
                                Page Not Found, make sure the URL is correct.
                            </h1>
                        )}
                    />
                </Switch>
                <div className="bt blue-grey-text" />
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
