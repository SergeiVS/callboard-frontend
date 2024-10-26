import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from '@mui/material';
const ErrorMessage = ({ message }) => {
    return _jsx(Typography, { color: "error", children: message });
};
export default ErrorMessage;
