import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { StudentProjectsReport } from '../components/Reports/StudentProjectsReport'

const FakeComponent = () => <div></div>
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
            component={FakeComponent}
        />
        <Route
            exact
            path="/projectify/reports/report3"
            component={FakeComponent}
        />
        <Route
            exact
            path="/projectify/reports/report4"
            component={FakeComponent}
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
