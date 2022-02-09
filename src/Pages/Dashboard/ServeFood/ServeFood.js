import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const ServeFood = () => {
    const [search, setSearch] = useState('');
    const [shift, setShift] = React.useState('');


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
            <Box sx={{ p: 3 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>
                            Name:
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>
                            Roll:
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>
                            Class:
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>
                            Hall:
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>
                            Status:
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Box componant='form'>
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
                                    label="Date"
                                    type='date'
                                    variant="outlined"
                                />
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
                            </Stack>

                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </Paper>

    );
};

export default ServeFood;