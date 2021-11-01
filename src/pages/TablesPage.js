import { InputRow } from '../components/InputRow'
import { NavBar } from '../components/NavBar'
import { DynamicTable } from '../components/DynamicTable'
import { Fragment, useContext, useEffect } from 'react'
import { TableContext } from '../context/TableProvider'
import { tableHeaderChooser } from '../constants/headers'
import useFetch from 'react-fetch-hook'

const test = [
    {
        name: 'Bob Mars',
        age: 21,
        major: 'Computer Science',
        email: 'bmars1@purdue.edu',
    },
    {
        name: 'Bob Mars',
        age: 20,
        major: 'Computer Science',
        email: 'bmars2@purdue.edu',
    },
    {
        name: 'James Bond',
        age: 44,
        major: 'Math',
        email: 'jbond@purdue.edu',
    },
]

export const TablesPage = () => {
    const { setTableType, data } = useContext(TableContext)
    //TODO: fill this with data
    const studentFetch = useFetch('', {
        depends: [],
    })
    const classFetch = useFetch('', {
        depends: [],
    })
    const projectFetch = useFetch('', {
        depends: [],
    })
    const departmentFetch = useFetch('', {
        depends: [],
    })
    const majorFetch = useFetch('', {
        depends: [],
    })

    const dataObject = {
        student: test,
        class: classFetch.data,
        project: projectFetch.data,
        department: departmentFetch.data,
        major: majorFetch.data,
    }

    useEffect(() => {
        setTableType(window.location.pathname.substring(1) || undefined)
        console.log(
            studentFetch.isLoading,
            classFetch.isLoading,
            projectFetch.isLoading,
            departmentFetch.isLoading,
            majorFetch.isLoading
        )
        if (
            !studentFetch.isLoading &&
            !classFetch.isLoading &&
            !projectFetch.isLoading &&
            !departmentFetch.isLoading &&
            !majorFetch.isLoading
        ) {
            Object.entries(tableHeaderChooser).map((keyVal) =>
                data[keyVal[0]].setTable(dataObject[keyVal[0]])
            )
        }
    }, [
        studentFetch.isLoading,
        classFetch.isLoading,
        projectFetch.isLoading,
        departmentFetch.isLoading,
        majorFetch.isLoading,
    ])

    return (
        <Fragment>
            <NavBar />
            <div id="flex" className="d-flex flex-column">
                <InputRow />
                <div className="bt blue-grey-text"> </div>
                <DynamicTable
                    autoWidth
                    scrollY
                    scrollX
                    maxHeight="50vh"
                    striped
                    sortable={false}
                    responsive
                />
            </div>
        </Fragment>
    )
}
