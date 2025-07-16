import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import  axios from "axios" ;
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const inner = {name : "" , description : ""}
export default function BasicModal({ open, handleClose,handleUpdate }) {
     const [category,setCategory] = useState(inner);
    const addTask = async () => {
         await axios.post("https://67b687cf07ba6e590840dffb.mockapi.io/Categories",category);
         handleClose();
         setCategory(inner);
         handleUpdate();
    }
    const cancelAdd = () => {
        
    }
    const handleChangeInput = (e) => {
         setCategory({...category, [e.target.name] : e.target.value})
    }
    return (
        <div >
          <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p>Please enter information</p>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <TextField value={category.name} onChange={handleChangeInput} name='name'  type="text" sx={{ mt: 2, width: '100%' }} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField value={category.description} onChange={handleChangeInput} name='description' type="text" sx={{ mt: 2, width: '100%' }} id="outlined-basic" label="Decription" variant="outlined" />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', gap: 2 }}>
                        <Button onClick={addTask} variant="contained">Add</Button>
                        <Button onClick={cancelAdd} variant="contained" color='error'>Cancel</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
