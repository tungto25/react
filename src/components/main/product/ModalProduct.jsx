
import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { style } from '../../../contants';
import { ProductContext } from '../../../contexts/ProductProvider';
import { CategoryContext } from '../../../contexts/CategoryProvider';
import { Autocomplete } from '@mui/material';
import { CiLogin } from 'react-icons/ci';

export default function ModalProduct({ open, handleClose, setError, product, setProduct, abc, error }) {
    const { handleUpdate } = useContext(ProductContext);
    const validation = () => {
        const newError = {};
        newError.name = product.name ? "" : "vui long nhap name";
        newError.description = product.description ? "" : "vui long nhap description";
        setError(newError);
        return Object.values(newError).every(e => e === "");
    }
    const addTask = async () => {
        if (!validation()) {
            return;
        } if (product.id) {
            await axios.put(`https://6878a5b463f24f1fdc9ed6fb.mockapi.io/product/${product.id}`, product);
        } else {
            await axios.post("https://6878a5b463f24f1fdc9ed6fb.mockapi.io/product",product);
        }
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
    const { categories } = useContext(CategoryContext);
 console.log(product);
 
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
                        <TextField error={!!error.name}
                            helperText={error.name}
                            value={product?.name} onChange={changeIput} name='name' type="text" sx={{ mt: 2, width: '100%' }} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField error={!!error.name}
                            helperText={error.name}
                            value={product?.description} onChange={changeIput} name='description' type="text" sx={{ mt: 2, width: '100%' }} id="outlined-basic" label="Decription" variant="outlined" />
                        <TextField error={!!error.name}
                            helperText={error.name}
                            value={product?.price} onChange={changeIput} name='price' type="number" sx={{ mt: 2, width: '100%' }} id="outlined-basic" label="Price" variant="outlined" />
                        <Autocomplete
                            className='mt-2'
                            options={categories} // Danh sách các tác giả
                            getOptionLabel={(option) => option.name} // Hiển thị tên của tác giả
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Tìm kiếm hoặc chọn tác giả"
                                    error={!!error.name}
                                    helperText={error.name}
                                />
                            )}
                            value={
                                categories.find((cate) => cate.id === product?.category) || null // Hiển thị giá trị đã chọn
                            }
                            onChange={(event, newValue) => {
                                // Cập nhật giá trị khi người dùng chọn
                                changeIput({
                                    target: { name: "category", value: newValue ? newValue.id : "" },
                                });
                            }}
                            isOptionEqualToValue={(option, value) => option.id === value.id} // So sánh giá trị
                            noOptionsText="Không tìm thấy kết quả" // Thông báo khi không có kết quả
                            fullWidth
                        />

                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', gap: 2 }}>
                        <Button onClick={addTask} variant="contained">{product?.id ? "Update" : "Add"}</Button>
                        <Button onClick={cancelAdd} variant="contained" color='error'>Cancel</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
