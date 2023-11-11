import {ProductComponent} from "./ProductComponent";
import {Header} from "./Header";
import axios from "axios";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, setProducts} from "../redux/actions/productAction";

const ProductPage = () => {
    // here useSelector is used to get the redux state
    const products = useSelector((state) => state);
    // dispatch is used to dispatch the actions to the redux state like set products, update products and so on.
    const dispatch = useDispatch();

    // calling fakeApiStore here
    // const fetchData = async () => {
    //     const response = await axios.get('https://fakestoreapi.com/products')
    //         .catch((error) => {
    //             error.message = error
    //         })
    //     // setting the data into the redux store
    //     dispatch(setProducts(response.data));
    // }
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    console.log(products);
    return (
        <>
            <Header shopName='FAKE SHOP'/>
            <div className="ui grid container">
                <ProductComponent/>
            </div>
        </>
    );
};

export {ProductPage};