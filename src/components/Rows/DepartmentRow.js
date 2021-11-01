import { Button, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap'
import { useContext, useState, useEffect } from 'react'
import { TableContext } from '../../context/TableProvider'
import axios from 'axios'

export const DepartmentRow = () => {
    const [formData, setFormData] = useState({
        departmentID: undefined,
        name: undefined,
    })
    const { data, setTableType } = useContext(TableContext)

    useEffect(() => {
        setTableType('department')
    }, [setTableType])

    const onClickDepartment = async (e) => {
        e.preventDefault()
        // TODO: call api POST request function here
        // const tableWithAddedData = [...data.department.table, formData]
        // data.department.setTable(tableWithAddedData)
        const response = await axios.post('', formData)
        data.department.setTable(response.data)
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
                    <Button
                        color="blue-grey"
                        className="h-25 m-auto"
                        onClick={onClickDepartment}
                    >
                        Add
                    </Button>
                </Row>
            </Form>
        </div>
    )
}
