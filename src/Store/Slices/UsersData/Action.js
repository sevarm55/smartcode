import { fetchUsers } from "./UsersDataApi"

export const actionFetchUsers = () => {
    return async(dispatch) => {
        const result = await fetchUsers()
        dispatch({type : "fetchUsers", payload: result})
    }
}