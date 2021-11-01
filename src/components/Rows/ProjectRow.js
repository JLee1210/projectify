import { Button, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap'
import { useContext, useState } from 'react'
import { TableContext } from '../../context/TableProvider'
import axios from 'axios'

export const ProjectRow = () => {
    const [formData, setFormData] = useState({
        name: undefined,
        points: undefined,
        'group-size': undefined,
    })
    const { data } = useContext(TableContext)
    const onClickProject = async (e) => {
        e.preventDefault()
        // TODO: call api POST request function here
        // const tableWithAddedData = [...data.project.table, formData]
        // data.project.setTable(tableWithAddedData)
        const response = await axios.post('', formData)
        data.project.setTable(response.data)
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
                            <Label for="name" sm={2}>
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
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
                            <Label for="points" sm={2}>
                                Points
                            </Label>
                            <Input
                                id="points"
                                name="points"
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
                            <Label for="group-size" sm={10}>
                                Group Size
                            </Label>
                            <Input
                                id="group-size"
                                name="group-size"
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
                        onClick={onClickProject}
                    >
                        Add
                    </Button>
                </Row>
            </Form>
        </div>
    )
}
