import { Button, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap'
import { useContext, useState } from 'react'
import { TableContext } from '../../context/TableProvider'
import axios from 'axios'

export const MajorRow = () => {
    const [formData, setFormData] = useState({
        majorID: undefined,
        name: undefined,
    })
    const { data } = useContext(TableContext)
    const onClickMajor = async (e) => {
        e.preventDefault()
        // TODO: call api POST request function here
        // const tableWithAddedData = [...data.major.table, formData]
        // data.major.setTable(tableWithAddedData)
        const response = await axios.post('', formData)
        data.major.setTable(response.data)
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
                            <Label for="majorId" sm={10}>
                                Major ID
                            </Label>
                            <Input
                                id="majorId"
                                name="majorId"
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
                        onClick={onClickMajor}
                    >
                        Add
                    </Button>
                </Row>
            </Form>
        </div>
    )
}
