import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

import { studentProjectUrl } from '../../constants/endpoints'
import { TableContext } from '../../context/TableProvider'

export const StudentProjectsReport = () => {
    const [formData, setFormData] = useState({
        studentId: undefined,
    })
    const { data, setIsReport, setShowReport, setTableType } =
        useContext(TableContext)

    useEffect(() => {
        setTableType('studentProjects')
        setIsReport(true)
        setShowReport(false)
    }, [setIsReport, setShowReport, setTableType])

    const onClickReport = async (e) => {
        e.preventDefault()
        const response = await axios.post(studentProjectUrl, formData)
        data.studentProjects.setTable(response.data.data)
        setShowReport(true)
    }

    return (
        <div>
            <div className="tc mb4">
                <h1>Student Projects Report</h1>
                <h3>
                    Input a student ID to retrieve all of the projects
                    associated with that student.
                </h3>
            </div>
            <div
                id="add-row"
                className="d-flex align-items-center justify-content-center"
            >
                <Form>
                    <Row form>
                        <Col sm={20}>
                            <FormGroup>
                                <Label for="studentId" sm={10}>
                                    Student ID
                                </Label>
                                <Input
                                    id="studentId"
                                    name="studentId"
                                    type="number"
                                    size={10}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                />
                            </FormGroup>
                        </Col>
                        <Button
                            color="blue-grey"
                            className="h-25 m-auto"
                            disabled={!formData.studentId}
                            onClick={onClickReport}
                        >
                            Retrieve
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
