import { Button, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap'
import { useContext, useState } from 'react'
import { TableContext } from '../../context/TableProvider'
import axios from 'axios'

export const StudentRow = () => {
    const [formData, setFormData] = useState({
        name: undefined,
        age: undefined,
        major: undefined,
        email: undefined,
    })
    const { data } = useContext(TableContext)

    const onClickStudent = async (e) => {
        e.preventDefault()
        // TODO: call api POST request function here
        // const tableWithAddedData = [...data.student.table, formData]
        // data.student.setTable(tableWithAddedData)
        const response = await axios.post('', formData)
        data.student.setTable(response.data)
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
                        onClick={onClickStudent}
                    >
                        Add
                    </Button>
                </Row>
            </Form>
        </div>
    )
}
