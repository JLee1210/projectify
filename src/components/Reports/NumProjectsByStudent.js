import axios from 'axios'
import { useContext, useEffect } from 'react'
import { Button } from 'reactstrap'

import { numProjectsByStudentUrl } from '../../constants/endpoints'
import { TableContext } from '../../context/TableProvider'

export const NumProjectsByStudent = () => {
    const { data, setIsReport, setShowReport, setTableType } =
        useContext(TableContext)

    useEffect(() => {
        setTableType('numProjectsByStudent')
        setIsReport(true)
        setShowReport(false)
    }, [setIsReport, setShowReport, setTableType])

    const useOnClickReport = async (e) => {
        e.preventDefault()
        const response = await axios.get(numProjectsByStudentUrl)
        data.numProjectsByStudent.setTable(response.data.data)
        console.log(response.data.data)
        setShowReport(true)
    }

    return (
        <div>
            <div className="tc mb4">
                <h1>Number of Projects Per Student</h1>
                <h3>
                    Shows the number of projects every student is working on.
                </h3>
            </div>
            <Button
                color="blue-grey"
                className="h-25 d-flex ml-auto mr-auto mb-4"
                onClick={useOnClickReport}
            >
                Retrieve Report
            </Button>
        </div>
    )
}
