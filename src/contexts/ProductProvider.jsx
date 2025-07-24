import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();
function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [update, setUpdate] = useState(false);
    const handleUpdate = () => {
        setUpdate(!update)
    }
    useEffect(() => {
        getApi()
    }, [update])
    const getApi = async () => {
        const respone = await axios.get("https://6878a5b463f24f1fdc9ed6fb.mockapi.io/product");
        setProducts(respone.data)
    }
    return (
        <div>
            <ProductContext.Provider value={{ products, handleUpdate }}>{children}</ProductContext.Provider>
        </div>
    );
}

export default ProductProvider;