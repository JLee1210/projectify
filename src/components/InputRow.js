import { ClassRow } from './Rows/ClassRow'
import { DepartmentRow } from './Rows/DepartmentRow'
import { MajorRow } from './Rows/MajorRow'
import { ProjectRow } from './Rows/ProjectRow'
import { StudentRow } from './Rows/StudentRow'
import { Route, Switch } from 'react-router-dom'

export const InputRow = () => (
    <Switch>
        <Route
            exact
            path="/projectify"
            render={() => (
                <h1 className="blue-grey-text text-center">
                    Select a Table to display using the dropdown above
                </h1>
            )}
        />
        <Route exact path="/projectify/student" component={StudentRow} />
        <Route exact path="/projectify/class" component={ClassRow} />
        <Route exact path="/projectify/major" component={MajorRow} />
        <Route exact path="/projectify/project" component={ProjectRow} />
        <Route exact path="/projectify/department" component={DepartmentRow} />
    </Switch>
)
