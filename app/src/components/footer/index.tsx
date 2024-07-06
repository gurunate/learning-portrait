import { Box } from "@mui/material";
import Copyright from "../copyright";
import React from 'react';

const Footer: React.FC = () => (
    <Box sx={{ height: '34px', borderTop: '1px solid #D5D9DB', px: '24px', py: '8px', gap: '4px'}}>
        <footer data-testid="footer">
            <Copyright data-testid="copyright"/>
        </footer>
    </Box>
);

export default Footer;
