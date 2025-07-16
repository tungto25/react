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

export default function ModalDeleted({ openDeleted, handleCloseDel, idDeleted , handleUpdate}) {
 
  const handleDelete = async () => {
      await axios.delete(`https://67b687cf07ba6e590840dffb.mockapi.io/Categories/${idDeleted}`);
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
            Bạn có chắc chắn muốn xoá mục { idDeleted } này không? Hành động này không thể hoàn tác.
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
