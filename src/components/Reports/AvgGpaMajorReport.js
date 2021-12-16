import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

import { avgGpaMajorUrl } from '../../constants/endpoints'
import { TableContext } from '../../context/TableProvider'

export const AvgGpaMajorReport = () => {
    const [formData, setFormData] = useState({
        major: undefined,
    })
    const { data, setIsReport, setShowReport, setTableType } =
        useContext(TableContext)

    useEffect(() => {
        setTableType('avgGpaMajor')
        setIsReport(true)
        setShowReport(false)
    }, [setIsReport, setShowReport, setTableType])

    const onClickReport = async (e) => {
        e.preventDefault()
        const response = await axios.post(avgGpaMajorUrl, formData)
        console.log(formData)
        data.avgGpaMajor.setTable(response.data.data)
        setShowReport(true)
    }

    return (
        <div>
            <div className="tc mb4">
                <h1>Average GPA by Major Report</h1>
                <h3>
                    Input a major name to retrieve the average GPA of students
                    in that major.
                </h3>
            </div>
            <div
                id="add-row"
                className="d-flex align-items-center justify-content-center"
            >
                <Form>
                    <Row form>
                        <Col sm={20}>
                            <FormGroup>
                                <Label for="major" sm={10}>
                                    Major
                                </Label>
                                <Input
                                    id="major"
                                    name="major"
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
                            disabled={!formData.major}
                            onClick={onClickReport}
                        >
                            Retrieve
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
