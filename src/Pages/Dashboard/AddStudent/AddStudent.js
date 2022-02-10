import * as React from 'react';
import axios from 'axios';
import { Button, Paper, Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";

const AddStudent = () => {
    const [status, setStatus] = React.useState('');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const newData = { ...data, status };
        axios.post('http://localhost:5000/students', newData)
            .then(res => {
                if (res.data.insertedId) {
                    window.alert('student added');
                    reset();
                }
            });
    };



    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', mt: 10 }}>
            <Typography variant="body1" sx={{ p: 2 }} >
                Result in page
                <br />
                Selected:
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ p: 3 }} >

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={2} sm={4} md={4} >
                        <TextField
                            size='small'
                            fullWidth
                            label="Full Name"
                            variant="outlined"
                            {...register("fullName", { required: true })}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <TextField
                            size='small'
                            fullWidth
                            label="Roll"
                            variant="outlined"
                            type='number'
                            {...register("roll", { required: true })}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <TextField
                            size='small'
                            fullWidth
                            label="Age"
                            variant="outlined"
                            type='number'
                            {...register("age", { required: true })}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <TextField
                            size='small'
                            fullWidth
                            label="Class"
                            variant="outlined"
                            type='number'
                            {...register("class", { required: true })}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <TextField
                            size='small'
                            fullWidth
                            label="Hall Name"
                            variant="outlined"
                            {...register("hall", { required: true })}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <FormControl fullWidth size='small'>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status}
                                label="Status"
                                onChange={e => setStatus(e.target.value)}
                                required
                            >
                                <MenuItem value={'active'}>Active</MenuItem>
                                <MenuItem value={'inActive'}>inActive</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button sx={{ mt: 2 }} type='submit' variant="contained" color="success">
                    Add
                </Button>
            </Box>

        </Paper >
    );
};

export default AddStudent;