import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
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

export default function BasicModal({ open, setOpen, item }) {
    const { register, handleSubmit } = useForm();
    const { _id, name, price } = item;

    const onSubmit = data => {
        axios.put(`https://yooda-hostel-server-side.herokuapp.com/foods/${_id}`, data)
            .then(res => {
                if (res.data.acknowledged) {
                    window.alert('Food item updated Succesfully');
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
                        sx={{ mt: 5, textAlign: 'center' }}
                    >

                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12 }} sx={{ justifyContent: 'center' }}>
                            <Grid item xs={4} sm={6} >
                                <CssTextField
                                    label="Food Name"
                                    defaultValue={name}
                                    type='text'
                                    {...register("name", { required: true })} />
                            </Grid>
                            <Grid item xs={4} sm={6} >
                                <CssTextField
                                    label="Food Price"
                                    defaultValue={price}
                                    type='text'
                                    {...register("price", { required: true })} />
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
