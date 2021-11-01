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
            path="/"
            render={() => (
                <h1 className="blue-grey-text text-center">
                    Select a Table to display using the dropdown above
                </h1>
            )}
        />
        <Route exact path="/student" component={StudentRow} />
        <Route exact path="/class" component={ClassRow} />
        <Route exact path="/major" component={MajorRow} />
        <Route exact path="/project" component={ProjectRow} />
        <Route exact path="/department" component={DepartmentRow} />
    </Switch>
)
