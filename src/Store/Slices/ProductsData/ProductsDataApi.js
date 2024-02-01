import { PRODUCTS_URL } from "../../../Api/URL"
import { sendRequest } from "../../../Api/sendRequest"
const {getSendRequest} = sendRequest()

export const fetchProducts = async() => {
    const result = await getSendRequest(PRODUCTS_URL)
    return result
}