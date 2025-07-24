import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../header/Navbar';
import ModalProduct from "./ModalProduct";
import TableProduct from "./TableProduct";
import { data } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductProvider';

const abc = { name: "", description: "", price: "", category: "" }
function Product() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setError(abc);
        setProduct(abc);
    }
    const handleClose = () => setOpen(false);
    const [update, setUpdate] = useState(false);
    const [error, setError] = useState(abc);
    const [product, setProduct] = useState(abc);
    const [filter, setFilter] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const { products } = useContext(ProductContext);

    const handleSearch = (a) => {
        const result = products.filter(e => e.name.toLowerCase().includes(a.toLowerCase()));
        setFilter(result);
    }
    const editOpen = (items) => {
        setOpen(true);
        setProduct(items);
        setError(abc);
    }
    const displayedData = searchValue ? filter : products;
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar title={"Products"} handleOpen={handleOpen} setSearchValue={setSearchValue} handleSearch={handleSearch} />
            <ModalProduct open={open} handleClose={handleClose} error={error} setError={setError} product={product} setProduct={setProduct} />
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <TableProduct editOpen={editOpen} displayedData={displayedData} />
            </div>
        </div>
    );
}

export default Product;