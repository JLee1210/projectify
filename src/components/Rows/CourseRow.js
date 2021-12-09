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
import { courseUrl } from '../../constants/endpoints'

export const CourseRow = () => {
    const [formData, setFormData] = useState({
        courseId: undefined,
        name: undefined,
        instructor: undefined,
        departmentId: undefined,
    })
    const { data, setTableType } = useContext(TableContext)

    useEffect(() => {
        setTableType('course')
    }, [setTableType])

    const onClickClass = async (e) => {
        e.preventDefault()
        const response = await axios.post(courseUrl, formData)
        data.course.setTable(response.data.data)
    }

    return (
        <div>
            <h1 className="tc mb4">Course Table</h1>
            <div
                id="add-row"
                className="d-flex align-items-center justify-content-center"
            >
                <Form>
                    <Row form>
                        <Col sm={20}>
                            <FormGroup>
                                <Label for="courseId" sm={10}>
                                    Course ID
                                </Label>
                                <Input
                                    id="courseId"
                                    name="courseId"
                                    type="number"
                                    size={10}
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
                        <Col sm={20}>
                            <FormGroup>
                                <Label for="departmentId" sm={10}>
                                    Department ID
                                </Label>
                                <Input
                                    id="departmentId"
                                    name="departmentId"
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
                            disabled={!formData.courseId}
                            onClick={onClickClass}
                        >
                            Add
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
