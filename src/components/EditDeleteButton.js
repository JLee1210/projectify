import { MDBBtn, MDBIcon } from 'mdbreact'

export const EditDeleteButton = ({ onDelete, onEdit }) => (
    <div>
        <MDBBtn floating="true" size="sm" color="blue-grey" onClick={onEdit}>
            <MDBIcon icon="edit" />
        </MDBBtn>

        <MDBBtn floating="true" size="sm" color="blue-grey" onClick={onDelete}>
            <MDBIcon icon="trash" />
        </MDBBtn>
    </div>
)
