import React from 'react';

export interface InputProps {
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
    label?: string;
}