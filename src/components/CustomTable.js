import { Table } from 'reactstrap'

export const CustomTable = ({ headers, values }) => {
    const makeRow = (json, index) => (
        <tr>
            <th scope="row">{index}</th>
            {Object.keys(json).map((key) => (
                <td>{json[key]}</td>
            ))}
        </tr>
    )

    return (
        <Table hover responsive bordered size="ms">
            <thead>
                <tr>
                    <th>#</th>
                    {headers.map((header) => (
                        <th>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{values.map(makeRow)}</tbody>
        </Table>
    )
}
