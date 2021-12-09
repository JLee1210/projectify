import { useCallback, useContext, useState, useEffect } from 'react'
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

import { courseUrl } from '../../constants/endpoints'
import { EditContext } from '../../context/EditProvider'
import { TableContext } from '../../context/TableProvider'
import { addRow, editRow } from '../../functions/restApi'

export const CourseRow = () => {
    const [formData, setFormData] = useState({
        courseId: undefined,
        departmentId: undefined,
        instructor: undefined,
        name: undefined,
    })
    const { data, setTableType, tableType } = useContext(TableContext)
    const {
        isEdit,
        setIsEdit,
        editTableType,
        setEditTableType,
        editData,
        setEditData,
    } = useContext(EditContext)

    const resetEditData = useCallback(() => {
        setEditData({})
        setEditTableType('')
        setIsEdit(false)
    }, [setEditData, setEditTableType, setIsEdit])

    useEffect(() => {
        setTableType('course')
        resetEditData()
    }, [setTableType, resetEditData])

    useEffect(() => {
        editTableType === 'course' && setFormData(editData)
    }, [editData, editTableType])

    const isEditRow = isEdit && editTableType === 'course'
    const buttonNameText = isEditRow ? 'Update' : 'Add'

    const onClickCourse = async (e) => {
        e.preventDefault()
        addRow(tableType, formData, data, courseUrl)
    }

    const onEditCourse = async (e) => {
        e.preventDefault()
        editRow(tableType, formData, data)
        setFormData({
            courseId: undefined,
            departmentId: undefined,
            instructor: undefined,
            name: undefined,
        })
        resetEditData()
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
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    required
                                    size={10}
                                    type="number"
                                    value={formData.courseId}
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
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    size={20}
                                    type="text"
                                    value={formData.name}
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
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    size={20}
                                    type="text"
                                    value={formData.instructor}
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
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    size={10}
                                    type="number"
                                    value={formData.departmentId}
                                />
                            </FormGroup>
                        </Col>
                        <Button
                            color="blue-grey"
                            className="h-25 m-auto"
                            disabled={!formData.courseId}
                            onClick={isEditRow ? onEditCourse : onClickCourse}
                        >
                            {buttonNameText}
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
