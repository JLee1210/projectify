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

import { majorRelationUrl } from '../../constants/endpoints'
import { EditContext } from '../../context/EditProvider'
import { TableContext } from '../../context/TableProvider'
import { addRow, editRow } from '../../functions/restApi'

export const MajorRelationRow = () => {
    const initialFormState = {
        studentId: '',
        majorId: '',
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
        setTableType('course')
        setIsReport(false)
        resetEditData()
    }, [setIsReport, setTableType, resetEditData])

    useEffect(() => {
        isEdit && editTableType === 'majorRelation' && setFormData(editData)
        isEdit && setButtonNameText('Update')
    }, [editData, editTableType, isEdit])

    const isEditRow = isEdit && editTableType === 'majorRelation'

    const onClickMajorRelation = (e) => {
        e.preventDefault()
        addRow('majorRelation', formData, data, majorRelationUrl)
        setFormData(initialFormState)
    }

    const onEditMajorRelation = (e) => {
        e.preventDefault()
        formData.studentId = parseInt(formData.studentId)
        formData.majorId = parseInt(formData.majorId)
        let editDataObject = {
            oldData: { ...editData },
            newData: { ...formData },
        }
        editRow('majorRelation', editDataObject, data, majorRelationUrl)
        setFormData(initialFormState)
        setButtonNameText('Add')
        resetEditData()
    }

    return (
        <div>
            <h1 className="tc mb4">Major Relation Table</h1>
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
                                    size={10}
                                    type="number"
                                    value={formData.studentId}
                                />
                                <FormText>required</FormText>
                            </FormGroup>
                        </Col>
                        <Col sm={20}>
                            <FormGroup>
                                <Label for="majorId" sm={10}>
                                    Major ID
                                </Label>
                                <Input
                                    id="majorId"
                                    name="majorId"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    required
                                    size={10}
                                    type="number"
                                    value={formData.majorId}
                                />
                                <FormText>required</FormText>
                            </FormGroup>
                        </Col>
                        <Button
                            color="blue-grey"
                            className="h-25 m-auto"
                            disabled={!formData.majorId || !formData.studentId}
                            onClick={
                                isEditRow
                                    ? onEditMajorRelation
                                    : onClickMajorRelation
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
