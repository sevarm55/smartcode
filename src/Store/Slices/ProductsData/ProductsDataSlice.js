export const initialProductsData = [];

export const productsDataReducer = (state = initialProductsData, action) => {
    switch (action.type) {
        case "fetchProducts" :
            return action.payload
        default:
            return state;
    }
};


export const  selectProducts = (state) => state.productsData