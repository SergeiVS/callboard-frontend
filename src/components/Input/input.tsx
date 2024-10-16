import React from 'react';
import { InputProps } from './types';
import { StyledInput} from './styles';

const Input = ({ value, onChange, error, placeholder, label, disabled = false}: InputProps) => {
    return (
        <StyledInput
            type='password'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            label={label}
            error={!!error}
            helperText={error}
            fullWidth
            disabled={disabled}
        />
        
           
        
    );

};

export default Input;