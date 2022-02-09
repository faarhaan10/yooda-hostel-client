import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Box sx={{ position: 'fixed', bottom: 0, display: 'block', width: 1, backgroundColor: '#00000096', py: 2 }}>
                <Typography variant="body1" sx={{ textAlign: 'center' ,color:'white'}}>
                    YOODA HOSTEL 2022 | &copy; FARHAN
                </Typography>
            </Box>

        </div>
    );
};

export default Footer;