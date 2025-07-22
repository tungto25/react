import React, { useEffect, useState } from 'react';
import TableCategory from './TableCategory';
import ModalCategory from "./ModalCategory";
import Navbar from '../../header/Navbar';
import axios from "axios";

const inner = { name: "", description: "" }
function Categories(props) {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(inner);
    const [error, setError] = useState(inner);
    const [filter, setFilter] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        const filtered = data.filter((e) => e.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilter(filtered);
    }

    const editOpen = (items) => {
        setOpen(true);
        setCategory(items);
    }
    const handleOpen = () => {
        setOpen(true);
        setCategory(inner);
        setError(inner)
    }
    const handleClose = () => setOpen(false);
    const [update, setUpdate] = useState(false);

    const handleUpdate = () => {
        setUpdate(!update)
    }
    useEffect(() => {
        getApi();
    }, [update]);

    const getApi = async () => {
        const reponse = await axios.get("https://67b687cf07ba6e590840dffb.mockapi.io/Categories");
        setData(reponse.data);
    }

    const displayedData = filter.length > 0 ? filter : data;

    return (
        <div className='h-screen'>
            <Navbar handleOpen={handleOpen} title={"Categories"}  searchValue={searchValue} handleSearch={handleSearch} />
            <ModalCategory data={data} setData={setData} handleClose={handleClose} open={open} handleUpdate={handleUpdate} category={category} setCategory={setCategory} error={error} setError={setError} />
            <TableCategory data={data} handleUpdate={handleUpdate} editOpen={editOpen} filter={filter} displayedData={displayedData} />

        </div>
    );
}

export default Categories;