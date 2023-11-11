// combineReducers is a utility function that is used to combine multiple reducer functions into a single reducer.
import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
});
export default reducers;