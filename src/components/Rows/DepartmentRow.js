import { useCallback, useContext, useState, useEffect } from 'react'
import {
    Button,
    Col,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
} from 'reactstrap'

import { departmentUrl } from '../../constants/endpoints'
import { EditContext } from '../../context/EditProvider'
import { TableContext } from '../../context/TableProvider'
import { addRow, editRow } from '../../functions/restApi'

export const DepartmentRow = () => {
    const initialFormState = {
        departmentId: '',
        name: '',
        departmentHead: '',
    }
    const [formData, setFormData] = useState(initialFormState)
    const [buttonNameText, setButtonNameText] = useState('Add')
    const { data, setIsReport, setTableType } = useContext(TableContext)
    const {
        editData,
        editTableType,
        isEdit,
        setEditData,
        setEditTableType,
        setIsEdit,
    } = useContext(EditContext)

    const resetEditData = useCallback(() => {
        setEditData({})
        setEditTableType('')
        setIsEdit(false)
    }, [setEditData, setEditTableType, setIsEdit])

    useEffect(() => {
        setTableType('department')
        setIsReport(false)
        resetEditData()
    }, [setIsReport, setTableType, resetEditData])

    useEffect(() => {
        isEdit && editTableType === 'department' && setFormData(editData)
        isEdit && setButtonNameText('Update')
    }, [editData, editTableType, isEdit])

    const isEditRow = isEdit && editTableType === 'department'

    const onClickDepartment = (e) => {
        e.preventDefault()
        addRow('department', formData, data, departmentUrl)
        setFormData(initialFormState)
    }

    const onEditDepartment = (e) => {
        e.preventDefault()
        formData.departmentId = parseInt(formData.departmentId)
        let editDataObject = {
            oldData: { ...editData },
            newData: { ...formData },
        }
        editRow('department', editDataObject, data, departmentUrl)
        setFormData(initialFormState)
        setButtonNameText('Add')
        resetEditData()
    }

    return (
        <div>
            <h1 className="tc mb4">Department Table</h1>
            <div
                id="add-row"
                className="d-flex align-items-center justify-content-center"
            >
                <Form>
                    <Row form>
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
                                    required
                                    size={10}
                                    type="number"
                                    value={formData.departmentId}
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
                                <Label for="departmentHead" sm={10}>
                                    Department Head
                                </Label>
                                <Input
                                    id="departmentHead"
                                    name="departmentHead"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    size={20}
                                    type="text"
                                    value={formData.departmentHead}
                                />
                            </FormGroup>
                        </Col>
                        <Button
                            color="blue-grey"
                            className="h-25 m-auto"
                            disabled={!formData.departmentId}
                            onClick={
                                isEditRow ? onEditDepartment : onClickDepartment
                            }
                        >
                            {buttonNameText}
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
