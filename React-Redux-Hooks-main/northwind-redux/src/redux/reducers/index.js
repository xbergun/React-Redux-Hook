import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReucer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer"
import saveProductReducer from "./saveproductReducer"



const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
    saveProductReducer
})

export default rootReducer;