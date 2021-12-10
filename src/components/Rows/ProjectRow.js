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

import { projectUrl } from '../../constants/endpoints'
import { EditContext } from '../../context/EditProvider'
import { TableContext } from '../../context/TableProvider'
import { addRow, editRow } from '../../functions/restApi'

export const ProjectRow = () => {
    const initialFormState = {
        projectId: '',
        name: '',
        courseId: '',
    }
    const [formData, setFormData] = useState(initialFormState)
    const [buttonNameText, setButtonNameText] = useState('Add')
    const { data, setTableType } = useContext(TableContext)
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
        setTableType('project')
        resetEditData()
    }, [setTableType, resetEditData])

    useEffect(() => {
        isEdit && editTableType === 'project' && setFormData(editData)
        isEdit && setButtonNameText('Update')
    }, [editData, editTableType, isEdit])

    const isEditRow = isEdit && editTableType === 'project'

    const onClickProject = (e) => {
        e.preventDefault()
        addRow('project', formData, data, projectUrl)
        setFormData(initialFormState)
    }

    const onEditProject = (e) => {
        e.preventDefault()
        formData.courseId = parseInt(formData.courseId)
        formData.projectId = parseInt(formData.projectId)
        let editDataObject = {
            oldData: { ...editData },
            newData: { ...formData },
        }
        editRow('project', editDataObject, data, projectUrl)
        setFormData(initialFormState)
        setButtonNameText('Add')
        resetEditData()
    }

    return (
        <div>
            <h1 className="tc mb4">Project Table</h1>
            <div
                id="add-row"
                className="d-flex align-items-center justify-content-center"
            >
                <Form>
                    <Row form>
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
                                    required
                                    size={10}
                                    type="number"
                                    value={formData.projectId}
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
                                    size={10}
                                    type="text"
                                    value={formData.name}
                                />
                            </FormGroup>
                        </Col>
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
                                    size={10}
                                    type="number"
                                    value={formData.courseId}
                                />
                            </FormGroup>
                        </Col>
                        <Button
                            color="blue-grey"
                            className="h-25 m-auto"
                            disabled={!formData.courseId}
                            onClick={isEditRow ? onEditProject : onClickProject}
                        >
                            {buttonNameText}
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
