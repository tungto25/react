import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import Button from '@mui/material/Button';
import ModalDeleted from '../../header/ModalDeleted';
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function CustomizedTables({ data, handleUpdate}) {
  const [openDeleted, setOpenDeleted] = useState(false);
  const [idDeleted,setIdDeleted] = useState(null);
  const handleCloseDel = () => {
     setOpenDeleted(false);
  }

  const showModalDeleted = (id) => {
    setOpenDeleted(true);
    setIdDeleted(id);
  }
    return (
        <div className='p-3'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="right">name </StyledTableCell>
                            <StyledTableCell align="right">description </StyledTableCell>
                            <StyledTableCell align="right">Actions </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((e, index) => (
                            <StyledTableRow key={e.id}>
                                <StyledTableCell component="th" scope="row">
                                    {e.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{e.name}</StyledTableCell>
                                <StyledTableCell align="right">{e.description}</StyledTableCell>
                                <StyledTableCell sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 2 }}>
                                    <Button variant="contained" color='success' startIcon={<MdEdit  sx={{  }}/>}></Button>
                                    <Button variant="contained" color="error" onClick={() => showModalDeleted(e.id)} endIcon={<MdDeleteForever />}></Button>
                                    
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
            <ModalDeleted openDeleted={openDeleted} handleCloseDel={handleCloseDel} idDeleted={idDeleted} handleUpdate={handleUpdate}/>
        </div>
    );
}
