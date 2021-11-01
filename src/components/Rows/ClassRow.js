import { Button, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap'
import { useContext, useState, useEffect } from 'react'
import { TableContext } from '../../context/TableProvider'
import axios from 'axios'

export const ClassRow = () => {
    const [formData, setFormData] = useState({
        'course-num': undefined,
        department: undefined,
        name: undefined,
        size: undefined,
        instructor: undefined,
    })
    const { data, setTableType } = useContext(TableContext)

    useEffect(() => {
        setTableType('class')
    }, [setTableType])

    const onClickClass = async (e) => {
        e.preventDefault()
        // TODO: call api POST request function here
        // const tableWithAddedData = [...data.class.table, formData]
        // data.class.setTable(tableWithAddedData)
        const response = await axios.post('', formData)
        data.class.setTable(response.data)
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
                            <Label for="course-num" sm={10}>
                                Course Num
                            </Label>
                            <Input
                                id="course-num"
                                name="course-num"
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
                            <Label for="department" sm={2}>
                                Department
                            </Label>
                            <Input
                                id="department"
                                name="department"
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
                            <Label for="size" sm={2}>
                                Size
                            </Label>
                            <Input
                                id="size"
                                name="size"
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
                            <Label for="instructor" sm={2}>
                                Instructor
                            </Label>
                            <Input
                                id="instructor"
                                name="instructor"
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
                        onClick={onClickClass}
                    >
                        Add
                    </Button>
                </Row>
            </Form>
        </div>
    )
}
