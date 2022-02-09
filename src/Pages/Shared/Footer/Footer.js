import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Box sx={{ position: 'fixed', bottom: 0, display: 'block', width: 1, backgroundColor: 'white', py: 2 }}>
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Hero Rider 2022 | &copy; FARHAN
                </Typography>
            </Box>

        </div>
    );
};

export default Footer;