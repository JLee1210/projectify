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
        name: undefined,
        age: undefined,
        major: undefined,
        email: undefined,
    })
    const { data, setTableType } = useContext(TableContext)

    useEffect(() => {
        setTableType('student')
    }, [setTableType])

    const onClickStudent = async (e) => {
        e.preventDefault()
        // TODO: call api POST request function here
        // const tableWithAddedData = [...data.student.table, formData]
        // data.student.setTable(tableWithAddedData)
        console.log(formData)
        const response = await axios.post(studentUrl, formData)
        console.log(response)
        data.student.setTable(response.data.data)
    }

    return (
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
                            <FormText>
                                Student ID is required to enable button.
                            </FormText>
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
                            <Label for="age" sm={2}>
                                Age
                            </Label>
                            <Input
                                id="age"
                                name="age"
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
                            <Label for="major" sm={2}>
                                Major
                            </Label>
                            <Input
                                id="major"
                                name="major"
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
                            <Label for="email" sm={2}>
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
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
                        disabled={!formData.studentId}
                        onClick={onClickStudent}
                    >
                        Add
                    </Button>
                </Row>
            </Form>
        </div>
    )
}
