'user client';

import Container from "@mui/material/Container";
import Copyright from "../copyright";
import React from 'react';

const Footer: React.FC = () => (
    <footer>
        <Container data-testid="footer">
            <Copyright data-testid="copyright"/>
        </Container>
    </footer>
);

export default Footer;
