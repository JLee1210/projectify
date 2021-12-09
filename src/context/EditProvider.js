import { createContext, useState } from 'react'

export const EditContext = createContext()

export const EditProvider = ({ children }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [editTableType, setEditTableType] = useState({})
    const [editData, setEditData] = useState({})

    const value = {
        isEdit,
        setIsEdit,
        editTableType,
        setEditTableType,
        editData,
        setEditData,
    }

    return <EditContext.Provider value={value}>{children}</EditContext.Provider>
}
