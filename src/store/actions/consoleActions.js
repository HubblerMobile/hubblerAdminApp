import * as actionTypes from '../actionTypes'
import { getTableColumns, getUsers } from '../../apiCall'

export const getTableColumnData = () => {
    const payload = getTableColumns()
    return {
        type: actionTypes.GET_TABLE_COLUMN_DATA,
        payload
    }

}

export const getConsoleUserData = () => {
    const payload = getUsers()
    return {
        type: actionTypes.GET_CONSOLE_USER_DATA,
        payload
    }
} 