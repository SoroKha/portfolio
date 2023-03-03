import { Box, Container } from '@mui/material';
import FadeIn from 'react-fade-in';
import React from 'react';


const drawerWidth = 330;

export default function Resume() {
    const [scroll, setScroll] = React.useState('hidden');
    return (
        <div style={{overflowY: scroll}}>
        <FadeIn delay={100}  onComplete={() => setScroll('scroll')}>
        <Box
        className='background'
        component="main"
        sx={{ float: 'right', flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, height: '100vh' }}
        >
        <Container sx={{ py: 4, paddingTop: '75px', paddingBottom: '0px', height: '100%' }} maxWidth="lg">
            <iframe title='Soroush Khammar Resume' src="Soroush_Khammar_Resume.pdf" width="100%" height="100%">  
            </iframe>
        </Container>
        </Box>
        </FadeIn>
        </div>
    );
}