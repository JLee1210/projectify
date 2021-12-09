import { Route, Switch } from 'react-router-dom'

import { CourseRow } from '../components/Rows/CourseRow'
import { DepartmentRow } from '../components/Rows/DepartmentRow'
import { MajorRelationRow } from '../components/Rows/MajorRelationRow'
import { MajorRow } from '../components/Rows/MajorRow'
import { ProjectRow } from '../components/Rows/ProjectRow'
import { StudentRow } from '../components/Rows/StudentRow'

export const InputRowRoutes = () => (
    <Switch>
        <Route exact path="/projectify/tables/course" component={CourseRow} />
        <Route
            exact
            path="/projectify/tables/department"
            component={DepartmentRow}
        />
        <Route exact path="/projectify/tables/major" component={MajorRow} />
        <Route
            exact
            path="/projectify/tables/major_relation"
            component={MajorRelationRow}
        />
        <Route exact path="/projectify/tables/project" component={ProjectRow} />
        <Route exact path="/projectify/tables/student" component={StudentRow} />
        <Route
            render={() => (
                <h1 className="blue-grey-text text-center">
                    Table Not Found, make sure the URL is correct.
                </h1>
            )}
        />
    </Switch>
)
