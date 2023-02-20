import '../App.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import {RiComputerLine, RiDatabaseLine} from 'react-icons/ri';

const drawerWidth = 330;

export default function About() {
  return (
    <>
    <Box
        component="main"
        sx={{ float: 'right', flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      <Container sx={{ py: 4, float: 'center', paddingTop: '75px' }} maxWidth="md">
        <Typography variant='h2' gutterBottom>Hi, I'm Soroush! &#128075;</Typography>
        <Typography variant='h6' gutterBottom>I'm a recent graduate and aspiring Web Developer, seeking to contribute to exciting (and unexciting) projects.</Typography>
        <Typography variant='body1' gutterBottom>
        I decided to follow this career path during my university capstone project, where I was assigned to iAMconnected, an online health analytics dashboard.
        It was super exciting to finally work on a real-world project and I learned a ton during the experience, thanks to our senior developers and their guidance.          
        </Typography>
        <Typography variant='body1' gutterBottom>iAMconnected kept me on the team after graduation to work for them professionally, which has helped me continue refining my skills. </Typography>
      </Container>
        <Container sx={{ py: 4, float: 'center' }} maxWidth="md">
        <Typography variant='h6' gutterBottom>Here are some of the tools I've worked with, applied to professional/personal projects:</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>      
              <Card sx={{ maxWidth: 245 }}>
                <div style={{textAlign: 'center', display: 'inline-block'}}>
                  <RiComputerLine size='70%' />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Front End
                  </Typography>
                  <hr></hr>
                  <Typography variant="body1">
                    Vue <br></br> React <br></br> JavaScript <br></br> TypeScript
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 245 }}>
              <div style={{textAlign: 'center', display: 'inline-block'}}>
                <RiDatabaseLine size='70%' />
              </div>
              
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Back End
                  </Typography>
                  <hr></hr>
                  <Typography variant="body1">
                    Node JS <br></br> PHP <br></br> C# <br></br> MySQL <br></br> 
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 245 }}>
              <div style={{textAlign: 'center', display: 'inline-block'}}>
                <RiDatabaseLine size='70%' />
              </div>
              
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    APIs
                  </Typography>
                  <hr></hr>
                  <Typography variant="body1">
                    Stripe <br></br> YouTube <br></br>  <br></br>  <br></br> 
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 245 }}>
              <div style={{textAlign: 'center', display: 'inline-block'}}>
                <RiDatabaseLine size='70%' />
              </div>
              
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Libraries
                  </Typography>
                  <hr></hr>
                  <Typography variant="body1">
                  Bootstrap <br></br> MaterialUI <br></br>  <br></br>  <br></br> 
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </> 
  );
}