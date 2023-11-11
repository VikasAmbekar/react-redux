//  In  the action we provide the type of operation we want to do like select, update, remove and so on.
// The action is the type and payload is the data
import {ActionTypes} from "../constants/action-types";
import {getApi} from "../../apis/fakeApiStore";

// Creating a middleware to handle actions
export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await getApi.get("/products");
        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data})
    } catch (error) {
        // Handle the error here
        console.error("Error fetching products:", error);
    }
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await getApi.get(`/products/${id}`);
    dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: response.data})
}

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: {}
    };
};