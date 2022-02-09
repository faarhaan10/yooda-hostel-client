import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';

const Banner = () => {
    return (
        <Box style={{background:'linear-gradient(to right, #7f00ff, #e100ff)'}}
            sx={{ textAlign: 'center' }}>
            <Container sx={{ py: 8 }}>
                <Box sx={{
                    height:'70vh',
                    width:'100%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                <Box sx={{}}>
                <Typography
                    variant="h3"
                    gutterBottom
                    component="div"
                >
                    WELCOME TO ADMIN PANEL
                </Typography>
                    <Button variant="contained">Book Now</Button>
                </Box>
                </Box>
            </Container>

        </Box>
    );
};

export default Banner;