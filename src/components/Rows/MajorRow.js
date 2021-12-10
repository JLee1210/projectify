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

import { majorUrl } from '../../constants/endpoints'
import { EditContext } from '../../context/EditProvider'
import { TableContext } from '../../context/TableProvider'
import { addRow, editRow } from '../../functions/restApi'

export const MajorRow = () => {
    const initialFormState = {
        majorId: '',
        name: '',
    }
    const [formData, setFormData] = useState(initialFormState)
    const { data, setTableType } = useContext(TableContext)
    const [buttonNameText, setButtonNameText] = useState('Add')
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
        setTableType('major')
        resetEditData()
    }, [setTableType, resetEditData])

    useEffect(() => {
        isEdit && editTableType === 'major' && setFormData(editData)
        isEdit && setButtonNameText('Update')
    }, [editData, editTableType, isEdit])

    const isEditRow = isEdit && editTableType === 'major'

    const onClickMajor = (e) => {
        e.preventDefault()
        addRow('major', formData, data, majorUrl)
        setFormData(initialFormState)
    }

    const onEditMajor = (e) => {
        e.preventDefault()
        formData.majorId = parseInt(formData.majorId)
        let editDataObject = {
            oldData: { ...editData },
            newData: { ...formData },
        }
        editRow('major', editDataObject, data, majorUrl)
        setFormData(initialFormState)
        setButtonNameText('Add')
        resetEditData()
    }

    return (
        <div>
            <h1 className="tc mb4">Major Table</h1>
            <div
                id="add-row"
                className="d-flex align-items-center justify-content-center"
            >
                <Form>
                    <Row form>
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
                        <Button
                            color="blue-grey"
                            className="h-25 m-auto"
                            disabled={!formData.majorId}
                            onClick={isEditRow ? onEditMajor : onClickMajor}
                        >
                            {buttonNameText}
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
