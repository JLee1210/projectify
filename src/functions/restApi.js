import axios from 'axios'

export const addRow = async (tableType, rowData, data, url = '') => {
    const response = await axios.post(url, rowData)
    data[tableType].setTable(response.data.data)
}

export const deleteRow = async (tableType, rowData, data, url = '') => {
    //TODO: Add url for delete request
    const response = await axios.delete(url, rowData)
    data[tableType].setTable(response.data.data)
}

export const editRow = async (tableType, newData, data, url = '') => {
    const response = await axios.put(url, newData)
    data[tableType].setTable(response.data.data)
}
