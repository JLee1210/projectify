import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { StudentProjectsReport } from '../components/Reports/StudentProjectsReport'

//TODO: Update report2, report3, report4 once they are added on BE
export const ReportRoutes = () => (
    <Switch>
        <Route
            path="/projectify/reports/studentProjects"
            component={StudentProjectsReport}
        />
        <Route
            exact
            path="/projectify/reports/report2"
            component={<div></div>}
        />
        <Route
            exact
            path="/projectify/reports/report3"
            component={<div></div>}
        />
        <Route
            exact
            path="/projectify/reports/report4"
            component={<div></div>}
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
