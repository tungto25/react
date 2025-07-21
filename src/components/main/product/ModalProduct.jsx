import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import TextField from '@mui/material/TextField';


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
const abc = { name: "", description: "" }
export default function ModalProduct({ open, handleClose, handleUpdate }) {
    const [product, setProduct] = useState(abc);
    const addTask = async () => {
        await axios.post("https://6878a5b463f24f1fdc9ed6fb.mockapi.io/product");
        setProduct(abc);
        handleClose();
        handleUpdate();
    }
    const cancelAdd = () => {
        handleClose();
        setProduct(abc);
    }
    const changeIput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
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
                        <TextField value={product.name} onChange={changeIput} name='name' type="text" sx={{ mt: 2, width: '100%' }} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField value={product.description} onChange={changeIput} name='description' type="text" sx={{ mt: 2, width: '100%' }} id="outlined-basic" label="Decription" variant="outlined" />
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
