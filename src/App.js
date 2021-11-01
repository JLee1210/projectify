import { BrowserRouter as Router } from 'react-router-dom'
import { TablesPage } from './pages/TablesPage'
import { TableProvider } from './context/TableProvider'

const App = () => {
    return (
        <Router>
            <div className="App">
                <TableProvider>
                    <TablesPage />
                </TableProvider>
            </div>
        </Router>
    )
}

export default App
