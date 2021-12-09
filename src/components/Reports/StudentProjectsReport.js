import { Button, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap'
import { useContext, useState, useEffect } from 'react'
import { TableContext } from '../../context/TableProvider'
import axios from 'axios'

export const StudentProjectsReport = () => {
    const [formData, setFormData] = useState({
        studentId: undefined,
    })
    const { data, setTableType } = useContext(TableContext)

    useEffect(() => {
        setTableType('studentProjects')
    }, [setTableType])

    //TODO: Add post request url below
    const onClickReport = async (e) => {
        e.preventDefault()
        const response = await axios.post('', formData)
        data.studentProjects.setTable(response.data.data)
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
