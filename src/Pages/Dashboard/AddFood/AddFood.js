import * as React from 'react';
import axios from 'axios';
import { Button, Paper, Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Pagination } from '@mui/material';
import { useForm } from "react-hook-form";

const AddFood = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log({ ...data });


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
                        <TableRow
                            hover
                            role="checkbox"
                        >
                            <TableCell >
                                allUser.indexOf(singleUser) + 1
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
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination sx={{ p: 2 }} count={10} variant="outlined" shape="rounded" />
        </Paper >
    );
};

export default AddFood;