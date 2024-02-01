import { USERS_URL } from "../../../Api/URL";
import { sendRequest } from "../../../Api/sendRequest";

const {getSendRequest} = sendRequest()

export const fetchUsers = async() => {
    const result = await getSendRequest(USERS_URL)
    return result
}
