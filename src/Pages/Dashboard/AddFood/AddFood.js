import * as React from 'react';
import axios from 'axios';
import { Button, Paper, Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Pagination, Stack } from '@mui/material';
import { useForm } from "react-hook-form";
import EditFood from './EditFood';

const AddFood = () => {
    const [foodItems, setFoodItems] = React.useState([]);
    const [displayFoodItems, setDisplayFoodItems] = React.useState([]);
    const [editItem, setEditItem] = React.useState({});
    const [isAdded, setIsAdded] = React.useState('');
    const [page, setPage] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [pageCount, setPageCount] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const size = 5;

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/foods', data)
            .then(res => {
                if (res.data.insertedId) {
                    window.alert('food added');
                    setIsAdded(res.data.insertedId)
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
                setTotal(count);
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [page, open, isAdded]);

    // delete handler
    const handleDelete = id => {

        axios.delete(`http://localhost:5000/foods/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    alert('Users deleted Succesfully');
                    const restFoods = foodItems.find(item => item._id !== id);
                    setFoodItems(restFoods);
                }
            });
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
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ p: 3 }} >
                    Foods in this page: {foodItems.length}
                </Typography>
                <Typography variant="body1" sx={{ p: 3 }} >
                    Total Food Items: {total}
                </Typography>
            </Stack>

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
                                    <Button onClick={() => handleDelete(item._id)} size="small" variant="contained" color='error'>Delete</Button>
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

            <EditFood open={open} setOpen={setOpen} item={editItem} />
        </Paper >
    );
};

export default AddFood;