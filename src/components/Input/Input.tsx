import React from 'react';
import { Input } from '@mui/material';

const Input = ({ label, value, onChange, type = 'text', ...props }) => {
    return (
        <Input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={label}
            {...props}
            fullWidth
        />
    );
};

export default Input;