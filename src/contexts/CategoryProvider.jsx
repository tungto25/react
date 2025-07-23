import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const CategoryContext = createContext();
function CategoryProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [update, setUpdate] = useState(false);

    const handleUpdate = () => {
        setUpdate(!update)
    }
    useEffect(() => {
        getApi();
    }, [update]);

    const getApi = async () => {
        const reponse = await axios.get("https://67b687cf07ba6e590840dffb.mockapi.io/Categories");
        setCategories(reponse.data);
    }
    return (
        <CategoryContext.Provider value={{ categories , handleUpdate }}>{children}</CategoryContext.Provider>
    );
}

export default CategoryProvider;