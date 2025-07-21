import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import axios from 'axios';

export default function ModalDeleted({ openDeleted, handleCloseDel, idDeleted, handleUpdate }) {

  const handleDelete = async () => {
    try {
      await axios.delete(`https://67b687cf07ba6e590840dffb.mockapi.io/Categories/${idDeleted}`);
    } catch (error) {
      console.warn("Không xoá được ở Categories:", error.message);
    }

    try {
      await axios.delete(`https://6878a5b463f24f1fdc9ed6fb.mockapi.io/product/${idDeleted}`);
    } catch (error) {
      console.warn("Không xoá được ở product:", error.message);
    }

    handleUpdate();
    handleCloseDel();
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Modal xác nhận */}
      <Dialog open={openDeleted} onClose={handleCloseDel}>
        <DialogTitle>Xác nhận xoá</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có chắc chắn muốn xoá mục {idDeleted} này không? Hành động này không thể hoàn tác.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDel}>Huỷ</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Xoá
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
