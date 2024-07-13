import { Box } from "@mui/material";
import Copyright from "../copyright";
import React from 'react';

const Footer: React.FC = () => (
    <Box sx={{ position: 'absolute', height: '34px', width: '100%', borderTop: '1px solid #D5D9DB', px: '24px', py: '8px', gap: '4px', bottom: 0 }}>
        <footer data-testid="footer">
            <Copyright data-testid="copyright"/>
        </footer>
    </Box>
);

export default Footer;
