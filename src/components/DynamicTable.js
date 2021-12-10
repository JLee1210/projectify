import { MDBDataTableV5 } from 'mdbreact'
import { useContext } from 'react'

import { tableHeaderChooser } from '../constants/tableHeaders'
import { EditContext } from '../context/EditProvider'
import { TableContext } from '../context/TableProvider'
import { EditDeleteButton } from './EditDeleteButton'
import { deleteRow } from '../functions/restApi'

export const DynamicTable = (props) => {
    const { tableType, data } = useContext(TableContext)
    const { setIsEdit, setEditData, setEditTableType } = useContext(EditContext)
    const dataObj = data[tableType] || {}

    const tableData = {
        columns: tableHeaderChooser[tableType],
        rows: (dataObj['table'] || []).map((rowData) => ({
            ...rowData,
            button: (
                <EditDeleteButton
                    onDelete={() => deleteRow(tableType, rowData, data)}
                    onEdit={() => {
                        setIsEdit(true)
                        setEditTableType(tableType)
                        setEditData(rowData)
                    }}
                />
            ),
        })),
    }

    if (tableType === undefined) {
        return <div></div>
    }

    return (
        <div id="table" className="mt-5">
            <MDBDataTableV5 {...props} data={tableData} />
        </div>
    )
}
