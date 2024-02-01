import { fetchProducts } from "./ProductsDataApi";

export const actionFetchProducts = () => {
    return async(dispatch) => {
        const result = await fetchProducts()
        dispatch({type : "fetchProducts", payload: result})
    }
}