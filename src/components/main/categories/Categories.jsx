import React, { useEffect, useState } from 'react';
import TableCategory from './TableCategory';
import ModalCategory from "./ModalCategory";
import Navbar from '../../header/Navbar';
import axios from "axios";

const inner = { name: "", description: "" }
function Categories(props) {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(inner);
    const [error, setError] = useState(inner);
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
       
    }

    const editOpen = (items) => {
        setError(inner);
        setOpen(true);
        setCategory(items);
    }
    const handleOpen = () => {
        setOpen(true);
        setCategory(inner);
        setError(inner);
    }
    const handleClose = () => setOpen(false);
    return (
        <div className='h-screen'>
            <Navbar handleOpen={handleOpen} title={"Categories"}  searchValue={searchValue} handleSearch={handleSearch} />
            <ModalCategory  handleClose={handleClose} open={open} category={category} setCategory={setCategory} error={error} setError={setError} />
            <TableCategory  editOpen={editOpen}  />
        </div>
    );
}

export default Categories;