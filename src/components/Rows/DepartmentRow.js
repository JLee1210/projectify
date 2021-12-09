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
import { departmentUrl } from '../../constants/endpoints'

export const DepartmentRow = () => {
    const [formData, setFormData] = useState({
        departmentID: undefined,
        name: undefined,
        departmentHead: undefined,
    })
    const { data, setTableType } = useContext(TableContext)

    useEffect(() => {
        setTableType('department')
    }, [setTableType])

    const onClickDepartment = async (e) => {
        e.preventDefault()
        const response = await axios.post(departmentUrl, formData)
        data.department.setTable(response.data.data)
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
                                <Label for="departmentHead" sm={10}>
                                    Department Head
                                </Label>
                                <Input
                                    id="departmentHead"
                                    name="departmentHead"
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
                            disabled={!formData.departmentID}
                            onClick={onClickDepartment}
                        >
                            Add
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
