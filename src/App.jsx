import {ProductPage} from "./components/ProductList";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {ProductDetails} from "./components/ProductDetails";
import "./App.css"

// All raw data should store outside the functional component
const FAKE_SHOP = 'FAKE SHOP';
const App = () => {
    return (
        <div className="App">
            <Header shopName={FAKE_SHOP}/>
            <Routes>
                <Route path="/product-list" element={<ProductPage/>}/>
                <Route path="/products/:productId" element={<ProductDetails/>}/>
                <Route>404 Not Found</Route>
            </Routes>
        </div>

    );
}
export default App;