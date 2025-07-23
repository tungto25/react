import React, { useState, useEffect } from 'react';
import Navbar from '../../header/Navbar';
import ModalProduct from "./ModalProduct";
import TableProduct from "./TableProduct";

const abc = { name: "", description: "", price : "", category : "" }
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
    const handleSearch = (e) => {
        // const value = e.target.value;
        // setSearchValue(value);
        // const filtered = Products.filter((e) => e.name.toLowerCase().includes(value.toLowerCase())
        // );
        // setFilter(filtered);
    }
    const editOpen = (items) => {
        setOpen(true);
        setProduct(items);
    }
   
    // const displayedData = filter.length > 0 ? filter : data;
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar title={"Products"} handleOpen={handleOpen} handleSearch={handleSearch} searchValue={searchValue}/>
            <ModalProduct open={open} handleClose={handleClose} error={error} setError={setError} product={product} setProduct={setProduct} />
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <TableProduct editOpen={editOpen} />
            </div>
        </div>
    );
}

export default Product;