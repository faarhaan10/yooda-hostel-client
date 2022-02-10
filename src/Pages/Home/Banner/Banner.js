import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Box style={{ background: 'linear-gradient(to right, #7f00ff, #e100ff)' }}
            sx={{ textAlign: 'center' }}>
            <Container sx={{ py: 8 }}>
                <Box sx={{
                    height: '85vh',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box sx={{}}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            component="div"
                            sx={{ fontWeight: 'bold', color: "cornsilk" }}
                        >
                            WELCOME TO ADMIN PANEL
                        </Typography>
                        <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                            <Button sx={{ px: 6, py: 2, background: 'transparent' }} variant="contained" color='error'>explore</Button>
                        </Link>
                    </Box>
                </Box>
            </Container>

        </Box>
    );
};

export default Banner;