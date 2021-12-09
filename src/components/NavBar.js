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
                <MDBNavbarBrand href="/projectify">
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
                                        to="/projectify/tables/student"
                                    >
                                        Student
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/tables/course"
                                    >
                                        Course
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/tables/project"
                                    >
                                        Project
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/tables/major"
                                    >
                                        Major
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/tables/major_relation"
                                    >
                                        Major Relations
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/tables/department"
                                    >
                                        Department
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    Reports
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="default-color">
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/reports/report1"
                                    >
                                        Report 1
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/reports/report2"
                                    >
                                        Report 2
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/reports/report3"
                                    >
                                        Report 3
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/reports/report4"
                                    >
                                        Report 4
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </div>
    )
}
