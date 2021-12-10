import { createContext, useState } from 'react'

export const EditContext = createContext()

export const EditProvider = ({ children }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [editData, setEditData] = useState({})
    const [editTableType, setEditTableType] = useState({})

    const value = {
        editData,
        editTableType,
        isEdit,
        setEditData,
        setEditTableType,
        setIsEdit,
    }

    return <EditContext.Provider value={value}>{children}</EditContext.Provider>
}
