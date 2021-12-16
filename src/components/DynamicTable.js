import { MDBDataTableV5 } from 'mdbreact'
import { useContext, useEffect } from 'react'

import { urlByTable } from '../constants/endpoints'
import { tableHeaderChooser } from '../constants/tableHeaders'
import { EditContext } from '../context/EditProvider'
import { TableContext } from '../context/TableProvider'
import { EditDeleteButton } from './EditDeleteButton'
import { deleteRow } from '../functions/restApi'

export const DynamicTable = (props) => {
    const { data, isReport, showReport, tableType } = useContext(TableContext)
    const { setIsEdit, setEditData, setEditTableType } = useContext(EditContext)

    useEffect(() => {
        if (isReport === true) {
            data[tableType].setTable([])
        }
    }, [isReport, tableType])

    const dataObj = data[tableType] || {}
    const tableData = {
        columns: tableHeaderChooser[tableType],
        rows: (dataObj['table'] || []).map((rowData) => ({
            ...rowData,
            button: (
                <EditDeleteButton
                    onDelete={() => {
                        deleteRow(
                            tableType,
                            rowData,
                            data,
                            urlByTable[tableType]
                        )
                    }}
                    onEdit={() => {
                        setIsEdit(true)
                        setEditTableType(tableType)
                        setEditData(rowData)
                    }}
                />
            ),
        })),
    }

    if (
        tableType === undefined ||
        (isReport === true && showReport === false)
    ) {
        return <div></div>
    }

    return (
        <div id="table" className="mt-5">
            <MDBDataTableV5 {...props} data={tableData} />
        </div>
    )
}
