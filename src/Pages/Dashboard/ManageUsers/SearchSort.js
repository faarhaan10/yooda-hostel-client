import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function CustomizedInputBase({ allUser, setDisplayUser }) {

    const handleSort = (event) => {
        const option = event.target.value;
        let sortedUsers;
        if (option === 'a') {
            sortedUsers = allUser.filter(user => user.age >= 18 && user.age <= 25);
        }
        else {
            sortedUsers = allUser.filter(user => user.age >= 26 && user.age <= 30);
        }
        setDisplayUser(sortedUsers);

    };

    const handleSearch = e => {
        const searchText = e.target.value;
        const matchedUser = allUser.filter(c => Object.values(c).toString().toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));

        setDisplayUser(matchedUser);
    }
    return (
        <Paper
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Name or email or phone"
                onChange={handleSearch}
            />
            <SearchIcon />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <FormControl variant="standard" autoWidth>
                <InputLabel >Sort</InputLabel>
                <Select
                    onChange={handleSort}
                >
                    <MenuItem value={'a'}>Age 18-25</MenuItem>
                    <MenuItem value={'b'}>Age 25-30</MenuItem>
                </Select>
            </FormControl>
        </Paper>
    );
}
