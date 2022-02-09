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

export default function BasicModal({ open, setOpen, handleDelete }) {
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        // axios.put(`${databaseUrl}/blogs/${_id}`, data)
        //     .then(res => {
        //         if (res.data.acknowledged) {
        //             handleToast('success', 'Blog Approved Succesfully');
        //             setOpen(false);
        //         }
        //     });
    };


    const handleApprove = id => {
        const data = {
            status: true
        };
        // axios.put(`${databaseUrl}/blogs/${id}`, data)
        //     .then(res => {
        //         if (res.data.acknowledged) {
        //             handleToast('success', 'Blog Approved Succesfully');
        //             setOpen(false);
        //         }
        //     });
    }
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
                            <Grid item xs={4} sm={4} md={4} >
                                <CssTextField
                                    sx={{ width: 1 }}
                                    label="Blogger"
                                    defaultValue='{blogPoster}'
                                    type='text'
                                    {...register("blogPoster", { required: true })} />
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} >
                                <CssTextField
                                    sx={{ width: 1 }}
                                    label="Blogger Email"
                                    defaultValue="{bloggerEmail}"
                                    type='text'
                                    {...register("bloggerEmail", { required: true })} />
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} >
                                <CssTextField
                                    sx={{ width: 1 }}
                                    label="Blog Title"
                                    defaultValue='{blogTitle}'
                                    type='text'
                                    {...register("blogTitle", { required: true })} />
                            </Grid>

                            <Grid item xs={4} sm={4} md={4} >
                                <CssTextField
                                    sx={{ width: 1 }}
                                    label="Location"
                                    defaultValue='{location}'
                                    type='text'
                                    {...register("location", { required: true })} />
                            </Grid>


                            <Grid item xs={4} sm={4} md={4} >
                                <CssTextField
                                    sx={{ width: 1 }}
                                    label="Rating"
                                    type='number'
                                    defaultValue={4}
                                    {...register("rating", { required: true })} />
                            </Grid>

                            <Grid item xs={4} sm={4} md={4} >
                                <CssTextField
                                    sx={{ width: 1 }}
                                    label="Cost"
                                    defaultValue={34}
                                    type='number'
                                    {...register("cost", { required: true })} />
                            </Grid>

                            <Grid item xs={4} sm={4} md={4} >
                                <CssTextField
                                    sx={{ width: 1 }}
                                    label="Description"
                                    defaultValue='{description}'
                                    type='textarea'
                                    {...register("description", { required: true })} />
                            </Grid>
                        </Grid>
                        <br />
                        <Stack direction="row" spacing={2}><Button size="small" variant="contained" color='success' onClick={() => handleApprove()}>
                            Approve
                        </Button>
                            <Button size="small" variant="contained" color='warning' type='submit'>
                                update
                            </Button>
                            <Button size="small" variant="contained" color='error'
                                onClick={() => handleDelete()}>
                                Delete
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
