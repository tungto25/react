import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from "axios";
import { CategoryContext } from "../../../contexts/CategoryProvider";
import { style } from '../../../contants';

export default function BasicModal({ open, handleClose, category, setCategory, inner, error, setError }) {
    const { handleUpdate } = useContext(CategoryContext);
    const validation = () => {
        const newEror = {};
        newEror.name = category.name ? "" : "Please enter Name";
        newEror.description = category.description ? "" : "Please enter description";
        setError(newEror);
        return Object.values(newEror).every(e => e === "")
    }
    const addTask = async () => {
        if (!validation()) {
            return
        }
        if (category.id) {
            await axios.put(`https://67b687cf07ba6e590840dffb.mockapi.io/Categories/${category.id}`, category);
        } else {
            await axios.post("https://67b687cf07ba6e590840dffb.mockapi.io/Categories", category);
        }

        handleClose();
        setCategory(inner);
        handleUpdate();
    }
    const cancelAdd = () => {
        handleClose();
        setCategory(inner);
    }
    const handleChangeInput = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
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
                        <TextField value={category?.name}
                            onChange={handleChangeInput} name='name'
                            type="text" sx={{ mt: 2, width: '100%' }}
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            error={!!error.name}
                            helperText={error.name} />
                        <TextField value={category?.description}
                            onChange={handleChangeInput}
                            name='description' type="text"
                            sx={{ mt: 2, width: '100%' }}
                            id="outlined-basic"
                            label="Decription"
                            variant="outlined"
                            error={!!error.description}
                            helperText={error.description} />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', gap: 2 }}>
                        <Button onClick={addTask} variant="contained">{category?.id ? "Update" : "Add"}</Button>
                        <Button onClick={cancelAdd} variant="contained" color='error'>Cancel</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
