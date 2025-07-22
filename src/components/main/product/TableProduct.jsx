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
import { Pagination } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

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
const ITEMS_PER_PAGE = 10;
export default function CustomizedTables({ data, handleUpdate, editOpen }) {
    const [openDeleted, setOpenDeleted] = useState(false);
    const [idDeleted, setIdDeleted] = useState(null);

    const showModalDeleted = (id) => {
        setOpenDeleted(true);
        setIdDeleted(id);
    }
    const handleCloseDel = () => {
        setOpenDeleted(false);
    }


    const [page, setPage] = useState(1);
    const rowsPerPage = 10;
    const displayedData = data;
    const totalPages = Math.ceil(displayedData.length / rowsPerPage);
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData = displayedData.slice(startIndex, endIndex);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className='p-3'>
            <TableContainer component={Paper} sx={{ height: '100%', overflow: 'auto' }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="right">Name </StyledTableCell>
                            <StyledTableCell align="right">Decriptions </StyledTableCell>
                            <StyledTableCell align="right">Price </StyledTableCell>
                            <StyledTableCell align="right">Category </StyledTableCell>
                            <StyledTableCell align="right">Actions </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData.map((e, index) => (
                            <StyledTableRow key={e.id}>
                                <StyledTableCell component="th" scope="row">
                                    {index + 1}
                                </StyledTableCell>
                                <StyledTableCell align="right">{e?.name}</StyledTableCell>
                                <StyledTableCell align="right">{e?.description}</StyledTableCell>
                                <StyledTableCell align="right">{e?.price}</StyledTableCell>
                                <StyledTableCell align="right">{e?.category}</StyledTableCell>
                                <StyledTableCell sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 2 }}>
                                    <Button onClick={() => editOpen(e)} variant="contained" color='success' startIcon={<MdEdit sx={{}} />}></Button>
                                    <Button variant="contained" color="error" onClick={() => showModalDeleted(e.id)} endIcon={<MdDeleteForever />}></Button>

                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >

            <ModalDeleted openDeleted={openDeleted} handleCloseDel={handleCloseDel} idDeleted={idDeleted} handleUpdate={handleUpdate} />
            <Stack spacing={2} alignItems="center" sx={{ mt: 2 }}>
                <Typography>Page: {page} / {totalPages}</Typography>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                />
            </Stack>
        </div>
    );
}