import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const NotFound = () => {

    return (
        <>
            <Box sx={{ height: { xs: 'auto', md: '100vh' }, display: 'flex', alignItems: 'center', backgroundColor: '#ddd' }}>
                <Container maxWidth="sm" sx={{ p: 5, borderRadius: { xs: 0, md: 8 }, boxShadow: '0 0 11px rgb(0 0 0 / 30%)', backgroundColor: '#fff' }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" component="div"
                            sx={{ fontFamily: 'Tangerine' }}
                        >
                            Oops! we can not found the page
                            please dont try anonymous route
                        </Typography>
                        <img src='' alt="" style={{ width: '100%' }} />
                    </Box>
                </Container>
            </Box>
        </>

    );
};

export default NotFound;