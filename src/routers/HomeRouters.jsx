import React from 'react';
import Home from '../components/main/Home';
import Product from '../components/main/product/Product';
import Todolist from '../components/main/Todolist';
import { Route, Routes } from 'react-router-dom';
import Categories from '../components/main/categories/Categories';
function HomeRouters(props) {
    const routers = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/categories",
            element: <Categories />
        },
        {
            path: "/product",
            element: <Product />
        },
        {
            path: "/todolist",
            element: <Todolist />
        }
    ]
    return (
        <div className="flex-1 h-full overflow-hidden">
            <Routes>
                {routers.map((e, i) =>
                    <Route path={e.path} element={e.element} />
                )}
            </Routes>
        </div>
    );
}

export default HomeRouters;