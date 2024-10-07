import { styled } from '@mui/system';
import { Input as MuiInput } from '@mui/material';

export const StyledInput = styled(MuiInput)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    '& .MuiInputBase-input': {
        color: theme.palette.text.primary,
    },
    '&:hover': {
        borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused': {
        borderColor: theme.palette.primary.main,
    },
}));