import { useContext, useState } from 'react'
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from 'mdbreact'
import { TableContext } from '../context/TableProvider'

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { setTableType } = useContext(TableContext)

    return (
        <div id="navbar">
            <MDBNavbar color="default-color" expand="md" dark>
                <MDBNavbarBrand>
                    <strong className="white-text">Projectify</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <MDBCollapse isOpen={isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    Tables
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="default-color">
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/student"
                                        onClick={() => setTableType('student')}
                                    >
                                        Student
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/class"
                                        onClick={() => setTableType('class')}
                                    >
                                        Class
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/project"
                                        onClick={() => setTableType('project')}
                                    >
                                        Project
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/major"
                                        onClick={() => setTableType('major')}
                                    >
                                        Major
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/department"
                                        onClick={() =>
                                            setTableType('department')
                                        }
                                    >
                                        Department
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#">Reports</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </div>
    )
}
