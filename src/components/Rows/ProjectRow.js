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
import { projectUrl } from '../../constants/endpoints'

export const ProjectRow = () => {
    const [formData, setFormData] = useState({
        projectId: undefined,
        name: undefined,
        courseId: undefined,
    })
    const { data, setTableType } = useContext(TableContext)

    useEffect(() => {
        setTableType('project')
    }, [setTableType])

    const onClickProject = async (e) => {
        e.preventDefault()
        const response = await axios.post(projectUrl, formData)
        data.project.setTable(response.data.data)
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
                                <Label for="courseId" sm={10}>
                                    Course ID
                                </Label>
                                <Input
                                    id="courseId"
                                    name="courseId"
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
                            disabled={!formData.courseId}
                            onClick={onClickProject}
                        >
                            Add
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
