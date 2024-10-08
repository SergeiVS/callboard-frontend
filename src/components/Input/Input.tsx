
import React from 'react';
import { TextField } from '@mui/material';
import Label from './Label';
import ErrorMessage from './ErrorMessage.tsx';

interface InputProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
}

const Input = ({ label, value, onChange, error, placeholder }: InputProps) => {
    return (
        <div>
            <Label text={label} />
            <TextField
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                error={!!error}
                fullWidth
            />
            {error && <ErrorMessage message={error} />}
        </div>
    );
};

export default Input;
