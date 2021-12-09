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
import { majorUrl } from '../../constants/endpoints'

export const MajorRow = () => {
    const [formData, setFormData] = useState({
        majorID: undefined,
        name: undefined,
    })
    const { data, setTableType } = useContext(TableContext)

    useEffect(() => {
        setTableType('major')
    }, [setTableType])

    const onClickMajor = async (e) => {
        e.preventDefault()
        const response = await axios.post(majorUrl, formData)
        data.major.setTable(response.data.data)
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
                        <Button
                            color="blue-grey"
                            className="h-25 m-auto"
                            disabled={!formData.majorId}
                            onClick={onClickMajor}
                        >
                            Add
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
