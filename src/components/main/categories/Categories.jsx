import React, { useEffect, useState } from 'react';
import TableCategory from './TableCategory';
import ModalCategory from "./ModalCategory";
import Navbar from '../../header/Navbar';
import  axios from "axios" ;
function Categories(props) {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [update,setUpdate] = useState(false);

    const handleUpdate = () => {
         setUpdate(!update)
    }
    useEffect(() => {
     getApi();
    },[update]);
  
    const getApi = async () => {
         const reponse = await axios.get("https://67b687cf07ba6e590840dffb.mockapi.io/Categories");    
         setData(reponse.data);   
    }
    
    return (
        <div className='h-screen'>
            <Navbar  handleOpen={handleOpen} title={"Categories"}/>
            <ModalCategory data={data} setData={setData} handleClose={handleClose} open={open}  handleUpdate={handleUpdate}/>
            <TableCategory data={data} handleUpdate={handleUpdate}/>

        </div>
    );
}

export default Categories;