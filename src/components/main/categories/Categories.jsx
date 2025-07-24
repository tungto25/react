import React, { useContext, useEffect, useState } from 'react';
import TableCategory from './TableCategory';
import ModalCategory from "./ModalCategory";
import Navbar from '../../header/Navbar';
import { CategoryContext } from '../../../contexts/CategoryProvider';

const inner = { name: "", description: "" }
function Categories(props) {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(inner);
    const [error, setError] = useState(inner);
    const [filter, setFilter] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const { categories } = useContext(CategoryContext);
    const handleSearch = (a) => {
        const result = categories.filter(e => e.name.toLowerCase().includes(a.toLowerCase()));
        setFilter(result);
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

    const displayedData = searchValue ? filter : categories;

    return (
        <div className='h-screen'>
            <Navbar handleOpen={handleOpen} title={"Categories"} searchValue={searchValue} handleSearch={handleSearch} setSearchValue={setSearchValue} />
            <ModalCategory handleClose={handleClose} open={open} category={category} setCategory={setCategory} error={error} setError={setError} />
            <TableCategory editOpen={editOpen} displayedData={displayedData} />
        </div>
    );
}

export default Categories;