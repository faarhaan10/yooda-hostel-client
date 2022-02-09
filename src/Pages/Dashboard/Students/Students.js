import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button, ButtonGroup, Checkbox, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import EditStudents from './EditStudents';


const Students = () => {
    const [allUser, setAllUser] = React.useState([]);
    const [displayUser, setDisplayUser] = React.useState([]);
    const [selectedUsers, setSelectedUsers] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [pageCount, setPageCount] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [editBlog, setEditBlog] = React.useState({});
    const navigate = useNavigate();
    const size = 10;


    // load all allUser 
    // React.useEffect(() => {
    //     axios.get(`${databaseUri}/users?page=${page}&&size=${size}`)
    //         .then(res => {
    //             setAllUser(res.data.result);
    //             setDisplayUser(res.data.result);
    //             const count = res.data.count;
    //             const pageNumber = Math.ceil(count / size);
    //             setPageCount(pageNumber);
    //         })
    // }, [page]);



    // User delete handler
    const handleDelete = () => {

        // axios.delete(`${databaseUri}/manage`, { data: selectedUsers })
        //     .then(res => {
        //         if (res.data.deletedCount) {
        //             alert('Users deleted Succesfully');
        //             const restUsers = selectedUsers.filter(
        //                 user => allUser.filter(
        //                     oldUser => oldUser !== user));
        //             setAllUser(restUsers);
        //             setDisplayUser(restUsers);
        //         }
        //     });
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
        const newUser = [...selectedUsers];
        if (isChecked) {
            newUser.push(email);
            setSelectedUsers(newUser);
        }
        else {
            const restUser = newUser.filter(user => user !== email);
            setSelectedUsers(restUser);
        }
    };

    const handleOpen = data => {
        setEditBlog(data)
        setOpen(true);
    }
    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden', mt: 10 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ p: 2 }} >
                        Result in page {page + 1} =
                        <br />
                        Selected:
                    </Typography>
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
                            <TableRow
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
                                    singleUser.fullName
                                </TableCell>
                                <TableCell >
                                    singleUser.email
                                </TableCell>
                                <TableCell >
                                    singleUser.phone
                                </TableCell>
                                <TableCell >
                                    singleUser.age
                                </TableCell>
                                <TableCell >
                                    singleUser.role
                                </TableCell>
                                <TableCell >
                                    <Stack direction="row" spacing={2}>
                                        <Button onClick={() => handleOpen()} size="small" variant="contained" color='success'>EDIT</Button>
                                        <Button size="small" variant="contained" color='error'>Delete</Button>
                                    </Stack>
                                </TableCell>

                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
                <Box>
                    <Typography variant="h6" component="span" sx={{ m: 2 }}>
                        Pages:
                    </Typography>
                    {
                        [...Array(pageCount).keys()].map(number => <Button
                            key={number}
                            onClick={() => setPage(number)}
                        >{number + 1}</Button>)
                    }

                </Box>
            </Paper >
            <EditStudents open={open} setOpen={setOpen} handleDelete={handleDelete} />
        </ >
    );
};

export default Students;