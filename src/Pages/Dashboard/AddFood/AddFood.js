import * as React from 'react';
import axios from 'axios';
import { Button, Paper, Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Pagination } from '@mui/material';
import { useForm } from "react-hook-form";
import EditFood from './EditFood';

const AddFood = () => {
    const [foodItems, setFoodItems] = React.useState([]);
    const [displayFoodItems, setDisplayFoodItems] = React.useState([]);
    const [editItem, setEditItem] = React.useState({});
    const [page, setPage] = React.useState(0);
    const [pageCount, setPageCount] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const size = 10;

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/foods', data)
            .then(res => {
                if (res.data.insertedId) {
                    window.alert('food added');
                    reset();
                }
            });
    };

    // load foods 
    React.useEffect(() => {
        axios.get(`http://localhost:5000/foods?page=${page}&&size=${size}`)
            .then(res => {
                setFoodItems(res.data.result);
                setDisplayFoodItems(res.data.result);
                const count = res.data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [page, open]);

    // delete handler
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


    const handleOpen = data => {
        setOpen(true);
        setEditItem(data)
    }
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', mt: 10 }}>
            <Typography variant="body1" sx={{ pl: 3, pt: 3 }} >
                Add Food
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ px: 3 }} >

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={2} sm={4} md={4} >
                        <TextField
                            size='small'
                            fullWidth
                            label="Food Name"
                            variant="outlined"
                            type='text'
                            {...register("name", { required: true })}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <TextField
                            size='small'
                            fullWidth
                            label="$Price"
                            variant="outlined"
                            type='number'
                            {...register("price", { required: true })}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Button type='submit' variant="contained" color="success">
                            Add Food
                        </Button>
                    </Grid>
                </Grid>


            </Box>
            <Typography variant="body1" sx={{ pl: 3, pt: 3 }} >
                Foods
            </Typography>
            <TableContainer sx={{ minHeight: 350, background: '#ddd' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                No.
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Price
                            </TableCell>
                            <TableCell>
                                Edit
                            </TableCell>
                            <TableCell>
                                Delete
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            foodItems.map(item => <TableRow
                                key={item._id}
                                hover
                                role="checkbox" >
                                <TableCell >
                                    {foodItems.indexOf(item) + 1}
                                </TableCell>
                                <TableCell >
                                    {item.name}
                                </TableCell>
                                <TableCell >
                                    ${item.price}
                                </TableCell>
                                <TableCell >
                                    <Button onClick={() => handleOpen(item)} size="small" variant="contained" color='success'>EDIT</Button>
                                </TableCell>
                                <TableCell >
                                    <Button size="small" variant="contained" color='error'>Delete</Button>
                                </TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination sx={{ p: 2 }} count={pageCount} variant="outlined" shape="rounded" />
            <EditFood open={open} setOpen={setOpen} item={editItem} />
        </Paper >
    );
};

export default AddFood;