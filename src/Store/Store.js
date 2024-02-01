import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { initialProductsData, productsDataReducer } from "./Slices/ProductsData/ProductsDataSlice";
import { currentSlideReducer, initialCurrentSlide } from "./Slices/CurrentSlide/CurrentSlideSlice";
import { UsersDataReducer, initialUsersData } from "./Slices/UsersData/UsersDataSlice";
import { ActiveReducer, initialActive } from "./Slices/Active/ActiveSlice";
import { HoverIdReducer, initialHoverId } from "./Slices/HoverId/HoverIdSlice";

const Store = createStore(
    combineReducers({
        productsData:productsDataReducer,
        usersData:UsersDataReducer,
        CurrentSlide:currentSlideReducer,
        active:ActiveReducer,
        hoverId:HoverIdReducer
    }),
    {
        productsData: initialProductsData,
        usersData: initialUsersData,
        CurrentSlide: initialCurrentSlide,
        active:initialActive,
        hoverId:initialHoverId
    },
    applyMiddleware(thunk)
)

export default Store