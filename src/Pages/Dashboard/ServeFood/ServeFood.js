import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';

const ServeFood = () => {
    const [foods, setFoods] = useState([]);
    const [student, setStudent] = useState({});
    const [search, setSearch] = useState('');
    const [shift, setShift] = useState('');
    const [foodItem, setFoodItem] = useState([]);
    const [foodSelect, setFoodSelect] = useState('');
    const [date, setDate] = useState('');
    const [toggle, setToggle] = useState(false)

    React.useEffect(() => {
        axios.get(`https://yooda-hostel-server-side.herokuapp.com/student/roll/${search}`)
            .then(res => {
                setStudent(res.data);
            })
    }, [search, toggle]);

    React.useEffect(() => {
        axios.get(`https://yooda-hostel-server-side.herokuapp.com/foods`)
            .then(res => {
                setFoods(res.data.result);
            })
    }, []);

    const handleAddFood = food => {
        setFoodSelect(food)
        if (foodItem.includes(food) || foodItem.length > 4) return;

        const newFoods = [...foodItem, food];
        setFoodItem(newFoods);
    };

    const handleSubmit = () => {
        const data = {
            studentId: student._id,
            date,
            shift,
            status: 'served',
            foodItem
        };
        const statusUpdate = { status: 'served' }
        axios.put(`https://yooda-hostel-server-side.herokuapp.com/serve/${student._id}`, statusUpdate)
            .then(res => {
                if (res.data.insertedId) {
                }
            });

        axios.post('https://yooda-hostel-server-side.herokuapp.com/serve', data)
            .then(res => {
                if (res.data.insertedId) {
                    window.alert('served');
                    setToggle(!toggle);
                }
            });
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', mt: 10 }}>
            <Box sx={{ p: 3 }}>
                <Typography variant="h4" component="div" sx={{ m: '0 auto' }}>
                    Search student using Roll
                </Typography>
                <br />
                <TextField
                    onChange={e => setSearch(e.target.value)}
                    sx={{ testAlign: 'center', maxWidth: 'lg' }}
                    label="Roll"
                    type='number'
                    variant="outlined"
                />
            </Box>
            {student.fullName && <Box sx={{ p: 3 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>
                            Name: {student.fullName}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>
                            Roll: {student.roll}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>
                            Class: {student.roll}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>
                            Hall: {student.hall}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>
                            Status: {student.status}
                        </Typography>
                        {foodItem.length !== 0 && <Box>
                            <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>
                                Foods:
                            </Typography>
                            <Stack direction='row'>
                                {
                                    foodItem.map(item => <Typography
                                        key={item}
                                        variant="caption"
                                        display="block"
                                    >
                                        {item},
                                    </Typography>)
                                }
                            </Stack>
                        </Box>}
                    </Grid>
                    <Grid item xs={6}>
                        {student.status !== 'served' ? <Box componant='form'>
                            <Stack spacing={2}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Shift</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={shift}
                                        label="Age"
                                        onChange={e => setShift(e.target.value)}
                                    >
                                        <MenuItem value={'morning'}>Morning</MenuItem>
                                        <MenuItem value={'noon'}>Noon</MenuItem>
                                        <MenuItem value={'night'}>Night</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    type='date'
                                    variant="outlined"
                                    onChange={e => setDate(e.target.value)}
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Selelct Food</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={foodSelect}
                                        label="Selelct Food"
                                        onChange={e => handleAddFood(e.target.value)}
                                    >
                                        {
                                            foods.map(fd => <MenuItem
                                                key={fd._id}
                                                value={fd.name}>{fd.name}</MenuItem>)
                                        }
                                    </Select>
                                </FormControl>
                            </Stack>

                        </Box>
                            :
                            <Typography variant="h3" component="div" sx={{ m: '0 auto' }}>
                                Already served
                            </Typography>
                        }
                    </Grid>
                </Grid>
                {student.status !== 'served' && <Button sx={{ my: 2, px: 5 }} variant="contained" color='warning' onClick={handleSubmit}>
                    Serve
                </Button>}

            </Box>}
        </Paper>

    );
};

export default ServeFood;