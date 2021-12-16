import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AvgGpaMajorReport } from '../components/Reports/AvgGpaMajorReport'
import { NumProjectsByDepartment } from '../components/Reports/NumProjectsByDepartment'
import { NumProjectsByStudent } from '../components/Reports/NumProjectsByStudent'

import { StudentProjectsReport } from '../components/Reports/StudentProjectsReport'

export const ReportRoutes = () => (
    <Switch>
        <Route
            path="/projectify/reports/studentProjects"
            component={StudentProjectsReport}
        />
        <Route
            exact
            path="/projectify/reports/numProjectsByStudent"
            component={NumProjectsByStudent}
        />
        <Route
            exact
            path="/projectify/reports/numProjectsByDepartment"
            component={NumProjectsByDepartment}
        />
        <Route
            exact
            path="/projectify/reports/avgGpaMajor"
            component={AvgGpaMajorReport}
        />
        <Route
            render={() => (
                <h1 className="blue-grey-text text-center">
                    Report Not Found, make sure the URL is correct.
                </h1>
            )}
        />
    </Switch>
)
