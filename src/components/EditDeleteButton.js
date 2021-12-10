import { MDBIcon, MDBBtn } from 'mdbreact'

export const EditDeleteButton = ({ onEdit, onDelete }) => (
    <div>
        <MDBBtn floating="true" size="sm" color="blue-grey" onClick={onEdit}>
            <MDBIcon icon="edit" />
        </MDBBtn>

        <MDBBtn floating="true" size="sm" color="blue-grey" onClick={onDelete}>
            <MDBIcon icon="trash" />
        </MDBBtn>
    </div>
)
