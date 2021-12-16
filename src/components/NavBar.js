import {
    MDBCollapse,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink,
} from 'mdbreact'
import { useState } from 'react'

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

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
                                        to="/projectify/reports/studentProjects"
                                    >
                                        Student Projects Report
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        toggle={false}
                                    >
                                        <MDBDropdown dropright>
                                            <MDBDropdownToggle nav caret>
                                                Number of Projects
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu className="default-color ml-4">
                                                <MDBDropdownItem
                                                    className="default-color"
                                                    tag={MDBNavLink}
                                                    to="/projectify/reports/numProjectsByStudent"
                                                >
                                                    By Student
                                                </MDBDropdownItem>
                                                <MDBDropdownItem
                                                    className="default-color"
                                                    tag={MDBNavLink}
                                                    to="/projectify/reports/numProjectsByDepartment"
                                                >
                                                    By Department
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        className="default-color"
                                        tag={MDBNavLink}
                                        to="/projectify/reports/avgGpaMajor"
                                    >
                                        Avg GPA Major
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
