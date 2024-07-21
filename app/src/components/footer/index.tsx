import { Box } from "@mui/material";
import Copyright from "../copyright";
import React from 'react';

const Footer: React.FC = () => (
    <Box sx={{ position: 'absolute', height: '34px', width: '100%', backgroundColor: '#FCFCFC', borderTop: '1px solid #D5D9DB', px: '24px', py: '8px', gap: '4px', bottom: 0, zIndex: 999 }}>
        <footer data-testid="footer">
            <Copyright data-testid="copyright"/>
        </footer>
    </Box>
);

export default Footer;
