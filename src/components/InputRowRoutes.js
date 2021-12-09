import { CourseRow } from './Rows/CourseRow'
import { DepartmentRow } from './Rows/DepartmentRow'
import { MajorRow } from './Rows/MajorRow'
import { MajorRelationRow } from './Rows/MajorRelationRow'
import { ProjectRow } from './Rows/ProjectRow'
import { StudentRow } from './Rows/StudentRow'
import { Route, Switch } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'

export const InputRowRoutes = () => (
    <Switch>
        <Route exact path="/projectify" component={HomePage} />
        <Route exact path="/projectify/class" component={CourseRow} />
        <Route exact path="/projectify/department" component={DepartmentRow} />
        <Route exact path="/projectify/major" component={MajorRow} />
        <Route
            exact
            path="/projectify/major_relation"
            component={MajorRelationRow}
        />
        <Route exact path="/projectify/project" component={ProjectRow} />
        <Route exact path="/projectify/student" component={StudentRow} />
        <Route
            render={() => (
                <h1 className="blue-grey-text text-center">
                    Page Not Found, make sure the URL is correct.
                </h1>
            )}
        />
    </Switch>
)
