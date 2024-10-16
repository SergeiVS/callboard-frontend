import React from 'react';
import { InputProps } from './types';
import { StyledInput, StyledInput2 } from './styles';

const Input = ({ value, onChange, error, placeholder, label}: InputProps) => {
    return (
        <StyledInput
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            label={label}
            error={!!error}
            helperText={error}
            fullWidth
        />
        
           
        
    );

};

export default Input;