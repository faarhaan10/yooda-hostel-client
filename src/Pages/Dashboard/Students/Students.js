import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button, ButtonGroup, Checkbox, Pagination, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import EditStudents from './EditStudents';


const Students = () => {
    const [allStudent, setAllStudent] = React.useState([]);
    const [displayStudents, setDisplayStudents] = React.useState([]);
    const [selectedStudents, setSelectedStudents] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [pageCount, setPageCount] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [editStudent, setEditStudent] = React.useState({});
    const [total, setTotal] = React.useState(0);
    const size = 5;


    // load all students 
    React.useEffect(() => {
        axios.get(`http://localhost:5000/students?page=${page}&&size=${size}`)
            .then(res => {
                setAllStudent(res.data.result);
                setDisplayStudents(res.data.result);
                const count = res.data.count;
                setTotal(count);
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [page, open]);


    // User delete handler
    const handleDelete = id => {

        axios.delete(`http://localhost:5000/students/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    alert('Users deleted Succesfully');
                    const restStudents = allStudent.filter(student => student._id !== id);
                    setAllStudent(restStudents);
                }
            });
    };
    const handleActive = isActive => {
        // axios.put(`${databaseUri}/manage`, selectedUsers)
        //     .then(res => {
        //         if (res.data.acknowledged) {
        //             alert('Users updated Succesfully');
        //             navigate('/dashboard')
        //         }
        //     });
        console.log(isActive)
    }

    const handleCheck = (isChecked, email) => {
        const newUser = [...selectedStudents];
        if (isChecked) {
            newUser.push(email);
            setSelectedStudents(newUser);
        }
        else {
            const restUser = newUser.filter(user => user !== email);
            setSelectedStudents(restUser);
        }
    };

    const handleOpen = data => {
        setEditStudent(data)
        setOpen(true);
    }
    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden', mt: 10 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ p: 3 }} >
                            Foods in this page: {allStudent.length}
                        </Typography>
                        <Typography variant="body1" sx={{ p: 3 }} >
                            Total Food Items: {total}
                        </Typography>
                    </Stack>
                    <Box>
                        <ButtonGroup size="small" variant="text" aria-label="outlined button group">
                            <Button onClick={() => handleActive('Active')}>Active</Button>
                            <Button onClick={() => handleActive('inActive')}>inActive</Button>
                        </ButtonGroup>
                    </Box>

                </Box>
                <TableContainer sx={{ minHeight: 450 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Select
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Roll
                                </TableCell>
                                <TableCell>
                                    Class
                                </TableCell>
                                <TableCell>
                                    Hall
                                </TableCell>
                                <TableCell>
                                    Status
                                </TableCell>
                                <TableCell>
                                    Modify
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                allStudent.map(student => <TableRow
                                    key={student._id}
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                >
                                    <TableCell >
                                        <Checkbox
                                            color="success"
                                        />
                                    </TableCell>
                                    <TableCell >
                                        {student.fullName}
                                    </TableCell>
                                    <TableCell >
                                        {student.roll}
                                    </TableCell>
                                    <TableCell >
                                        {student.class}
                                    </TableCell>
                                    <TableCell >
                                        {student.hall}
                                    </TableCell>
                                    <TableCell >
                                        {student.status}
                                    </TableCell>
                                    <TableCell >
                                        <Stack direction="row" spacing={2}>
                                            <Button onClick={() => handleOpen(student)} size="small" variant="contained" color='success'>EDIT</Button>
                                            <Button
                                                onClick={() => handleDelete(student._id)}
                                                size="small" variant="contained" color='error'>Delete</Button>
                                        </Stack>
                                    </TableCell>

                                </TableRow>)
                            }

                        </TableBody>
                    </Table>
                </TableContainer>

                {/* pagination  */}
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', px: 3 }}>
                    <Typography>Page: {page + 1}</Typography>
                    <Pagination
                        onChange={(event, value) => setPage(value - 1)}
                        sx={{ p: 2 }}
                        count={pageCount}
                        variant="outlined" shape="rounded" />
                </Stack>
            </Paper >
            {<EditStudents open={open} setOpen={setOpen} editStudent={editStudent} />}
        </ >
    );
};

export default Students;