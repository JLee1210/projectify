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
import { majorRelationUrl } from '../../constants/endpoints'

export const MajorRelationRow = () => {
    const [formData, setFormData] = useState({
        studentId: undefined,
        majorId: undefined,
    })
    const { data, setTableType } = useContext(TableContext)

    useEffect(() => {
        setTableType('majorRelation')
    }, [setTableType])

    const onClickMajor = async (e) => {
        e.preventDefault()
        const response = await axios.post(majorRelationUrl, formData)
        data.majorRelation.setTable(response.data.data)
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
                        <Button
                            color="blue-grey"
                            className="h-25 m-auto"
                            disabled={!formData.majorId || !formData.studentId}
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
