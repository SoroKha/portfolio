import { Box, Container } from '@mui/material';

const drawerWidth = 330;

export default function Resume() {
    return (
        <Box
        component="main"
        sx={{ float: 'right', flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
        <Container sx={{ py: 4, paddingTop: '75px' }} maxWidth="lg">
            <iframe title='Soroush Khammar Resume' src="Soroush_Khammar_Resume.pdf" width="100%" height="900px">  
            </iframe>
        </Container>
        </Box>
    );
}