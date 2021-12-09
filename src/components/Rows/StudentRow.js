import {
    Button,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Col,
    Row,
} from 'reactstrap'
import { useContext, useState, useEffect } from 'react'
import { TableContext } from '../../context/TableProvider'
import axios from 'axios'
import { studentUrl } from '../../constants/endpoints'

export const StudentRow = () => {
    const [formData, setFormData] = useState({
        studentId: undefined,
        projectId: undefined,
        name: undefined,
        gpa: undefined,
        gradClass: undefined,
    })
    const { data, setTableType } = useContext(TableContext)

    useEffect(() => {
        setTableType('student')
    }, [setTableType])

    const onClickStudent = async (e) => {
        e.preventDefault()
        const response = await axios.post(studentUrl, formData)
        data.student.setTable(response.data.data)
    }

    return (
        <div>
            <h1 className="tc mb4">Student Table</h1>
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
                                    size={1}
                                    required
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                />
                                <FormText>required</FormText>
                            </FormGroup>
                        </Col>
                        <Col sm={20}>
                            <FormGroup>
                                <Label for="name" sm={2}>
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    size={20}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                />
                            </FormGroup>
                        </Col>
                        <Col sm={20}>
                            <FormGroup>
                                <Label for="projectId" sm={10}>
                                    Project ID
                                </Label>
                                <Input
                                    id="projectId"
                                    name="projectId"
                                    type="number"
                                    size={20}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                />
                                <FormText>required</FormText>
                            </FormGroup>
                        </Col>
                        <Col sm={20}>
                            <FormGroup>
                                <Label for="gpa" sm={2}>
                                    GPA
                                </Label>
                                <Input
                                    id="gpa"
                                    name="gpa"
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
                        <Col sm={20}>
                            <FormGroup>
                                <Label for="gradClass" sm={10}>
                                    Graduation Class
                                </Label>
                                <Input
                                    id="gradClass"
                                    name="gradClass"
                                    type="text"
                                    size={20}
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
                            disabled={
                                !formData.studentId || !formData.projectId
                            }
                            onClick={onClickStudent}
                        >
                            Add
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
