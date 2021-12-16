import axios from 'axios'
import { useContext, useEffect } from 'react'
import { Button } from 'reactstrap'

import { numProjectsByDepartmentUrl } from '../../constants/endpoints'
import { TableContext } from '../../context/TableProvider'

export const NumProjectsByDepartment = () => {
    const { data, setIsReport, setShowReport, setTableType } =
        useContext(TableContext)

    useEffect(() => {
        setTableType('numProjectsByDepartment')
        setIsReport(true)
        setShowReport(false)
    }, [setIsReport, setShowReport, setTableType])

    const onClickReport = async (e) => {
        e.preventDefault()
        const response = await axios.get(numProjectsByDepartmentUrl)
        data.numProjectsByDepartment.setTable(response.data.data)
        setShowReport(true)
    }

    return (
        <div>
            <div className="tc mb4">
                <h1>Number of Projects Per Department</h1>
                <h3>
                    Shows the number of projects that are overseen by every
                    department.
                </h3>
            </div>
            <Button
                color="blue-grey"
                className="h-25 d-flex ml-auto mr-auto mb-4"
                onClick={onClickReport}
            >
                Retrieve Report
            </Button>
        </div>
    )
}
