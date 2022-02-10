import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Welcome = () => {
    return (
        <Box sx={{
            height: '95vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Paper sx={{ width: { xs: '100%', md: '50%' }, borderRadius: '10px' }}>

                <Box sx={{ p: 3, textAlign: 'center' }} >
                    <Typography variant="h4" sx={{ p: 2, fontWeight: 'bold' }} >
                        YOU MADE IT!
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default Welcome;
