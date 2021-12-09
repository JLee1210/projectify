import { BrowserRouter as Router } from 'react-router-dom'
import { TablesPage } from './pages/TablesPage'
import { TableProvider } from './context/TableProvider'
import { EditProvider } from './context/EditProvider'

const App = () => {
    return (
        <Router>
            <div className="App">
                <TableProvider>
                    <EditProvider>
                        <TablesPage />
                    </EditProvider>
                </TableProvider>
            </div>
        </Router>
    )
}

export default App
