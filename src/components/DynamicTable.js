import { MDBDataTableV5 } from 'mdbreact'
import { EditDeleteButton } from './EditDeleteButton'
import { tableHeaderChooser } from '../constants/headers'
import { useContext } from 'react'
import { TableContext } from '../context/TableProvider'

export const DynamicTable = (props) => {
    const { tableType, data } = useContext(TableContext)
    const dataObj = data[tableType] || {}
    const studentData = {
        columns: tableHeaderChooser[tableType],
        rows: (dataObj['table'] || []).map((obj) => ({
            ...obj,
            button: <EditDeleteButton />,
        })),
    }

    if (tableType === undefined) {
        return <div></div>
    }

    return (
        <div id="table" className="mt-5">
            <MDBDataTableV5 {...props} data={studentData} />
        </div>
    )
}
