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
// function createData(
//     id: number,
//     name: string,
//     decription: string
// ) {
//     return { id, name, decription };
// }
// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


export default function CustomizedTables() {

    return (
        <div>
            <div className='flex justify-center mt-3 gap-3 mb-5'>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="right">name </StyledTableCell>
                            <StyledTableCell align="right">description </StyledTableCell>
                            <StyledTableCell sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 2 }}>
                                <Button variant="contained" color='success' startIcon={<MdEdit />}>Edit</Button>
                                <Button variant="contained" color="error" endIcon={<MdDeleteForever />}>Delete</Button>
                            </StyledTableCell>
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
                                    <Button variant="contained" color='success' startIcon={<MdEdit />}>Edit</Button>
                                    <Button variant="contained" color="error" endIcon={<MdDeleteForever />}>Delete</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
}
