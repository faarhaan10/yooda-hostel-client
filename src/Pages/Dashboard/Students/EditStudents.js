import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Modal from '@mui/material/Modal';
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'orange',
        },
        '&:hover fieldset': {
            borderColor: 'hotpink',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ open, setOpen, editStudent }) {
    const [newStatus, setNewStatus] = React.useState('');
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        let newData;
        if (newStatus) {
            newData = { ...data, status: newStatus };
        } else {
            newData = { ...data, status: editStudent.status };
        }

        axios.put(`http://localhost:5000/students/${editStudent._id}`, newData)
            .then(res => {
                if (res.data.acknowledged) {
                    window.alert('Food item updated Succesfully');
                    setNewStatus('')
                    setOpen(false);

                }
            });
    };

    const handleClose = () => setOpen(false);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ mt: 5 }}
                    >

                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={2} sm={4} md={4} >
                                <TextField
                                    size='small'
                                    fullWidth
                                    label="Full Name"
                                    defaultValue={editStudent.fullName}
                                    variant="outlined"
                                    {...register("fullName", { required: true })}
                                />
                            </Grid>
                            <Grid item xs={2} sm={4} md={4} >
                                <TextField
                                    size='small'
                                    fullWidth
                                    label="Roll"
                                    defaultValue={editStudent.roll}
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
                                    defaultValue={editStudent.age}
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

                                    defaultValue={editStudent.class}
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
                                    defaultValue={editStudent.hall}
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
                                        defaultValue={editStudent.status}
                                        label="Status"
                                        onChange={e => setNewStatus(e.target.value)}
                                        required
                                    >
                                        <MenuItem value={'active'}>Active</MenuItem>
                                        <MenuItem value={'inActive'}>inActive</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <br />
                        <Button size="small" variant="contained" color='warning' type='submit'>
                            update
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
