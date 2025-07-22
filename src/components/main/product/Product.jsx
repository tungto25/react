import React, { useState, useEffect } from 'react';
import Navbar from '../../header/Navbar';
import ModalProduct from "./ModalProduct";
import TableProduct from "./TableProduct";
import axios from 'axios';
const abc = { name: "", description: "" }
function Product() {
    const [data, setData] = useState([]);
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
    const editOpen = (items) => {
        setOpen(true);
        setProduct(items);
    }
    const handleUpdate = () => {
        setUpdate(!update)
    }
    useEffect(() => {
        getApi()
    }, [update])
    const getApi = async () => {
        const respone = await axios.get("https://6878a5b463f24f1fdc9ed6fb.mockapi.io/product");
        setData(respone.data)
    }
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar title={"Products"} handleOpen={handleOpen} />
            <ModalProduct open={open} handleClose={handleClose} handleUpdate={handleUpdate} error={error} setError={setError} product={product} setProduct={setProduct} />
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <TableProduct data={data} handleUpdate={handleUpdate} editOpen={editOpen} />
            </div>
        </div>
    );
}

export default Product;