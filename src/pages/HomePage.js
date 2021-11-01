import { useContext, useEffect } from 'react'
import { TableContext } from '../context/TableProvider'

export const HomePage = () => {
    const { setTableType } = useContext(TableContext)

    useEffect(() => {
        setTableType(undefined)
    }, [setTableType])

    return (
        <h1 className="blue-grey-text text-center">
            Select a Table to display using the dropdown above
        </h1>
    )
}
