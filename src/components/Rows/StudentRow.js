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

import { studentUrl } from '../../constants/endpoints'
import { EditContext } from '../../context/EditProvider'
import { TableContext } from '../../context/TableProvider'
import { addRow, editRow } from '../../functions/restApi'

export const StudentRow = () => {
    const [formData, setFormData] = useState({
        studentId: undefined,
        projectId: undefined,
        name: undefined,
        gpa: undefined,
        gradClass: undefined,
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

    const [buttonNameText, setButtonNameText] = useState('Add')

    useEffect(() => {
        setTableType('student')
        resetEditData()
    }, [setTableType, resetEditData])

    useEffect(() => {
        editTableType === 'student' && setFormData(editData)
        isEdit && setButtonNameText('Update')
    }, [editData, editTableType, isEdit])

    const isEditRow = isEdit && editTableType === 'student'
    const onClickStudent = async (e) => {
        e.preventDefault()
        addRow(tableType, formData, data, studentUrl)
    }

    const onEditStudent = async (e) => {
        e.preventDefault()
        editRow(tableType, formData, data)
        setFormData({
            studentId: '',
            projectId: '',
            name: '',
            gpa: '',
            gradClass: '',
        })
        setButtonNameText('Add')
        resetEditData()
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
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    required
                                    size={1}
                                    type="number"
                                    value={formData.studentId}
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
                                <Label for="projectId" sm={10}>
                                    Project ID
                                </Label>
                                <Input
                                    id="projectId"
                                    name="projectId"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    size={20}
                                    type="number"
                                    value={formData.projectId}
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
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    size={10}
                                    type="number"
                                    value={formData.gpa}
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
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    size={20}
                                    type="text"
                                    value={formData.gradClass}
                                />
                            </FormGroup>
                        </Col>
                        <Button
                            className="h-25 m-auto"
                            color="blue-grey"
                            disabled={
                                !formData.studentId || !formData.projectId
                            }
                            onClick={isEditRow ? onEditStudent : onClickStudent}
                        >
                            {buttonNameText}
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
