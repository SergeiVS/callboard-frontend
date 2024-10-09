import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const StyledInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
        color: theme.palette.text.primary,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.primary.main,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.secondary.main,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.success.main,
        },
    },
}));