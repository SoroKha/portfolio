import '../App.css';
import { Container, Card, CardContent, Box, Grid, Typography } from '@mui/material';
import FadeIn from 'react-fade-in';
import { useState } from 'react';

const drawerWidth = 330;

export default function About() {
  const [scroll, setScroll] = useState('hidden');

  return (
    <div style={{overflowY: scroll}}>
    <FadeIn delay={100} onComplete={() => setScroll('auto')}>
    <Box
        component="main"
        sx={{ float: 'right', flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
      >
      <Container sx={{ py: 4, float: 'center', paddingTop: '75px' }} maxWidth="lg">
        <Typography variant='h2' fontWeight="fontWeightBold" gutterBottom>Hi, I'm Soroush! &#128075;</Typography>
        <Typography variant='h6' gutterBottom>I'm a recent graduate and aspiring Web Developer, excited to contribute to new projects.</Typography>
        <Typography variant='body1' gutterBottom>
        I decided to follow this career path during my university capstone project, where I was assigned to iAMconnected, an online health analytics dashboard.
        It was super exciting to finally work on a real-world project and I learned a ton during the experience, thanks to our senior developers and their guidance.          
        </Typography>
        <Typography variant='body1' gutterBottom>
        iAMconnected kept me on the team after graduation to work for them as a contractor, which has helped me continue refining my skills in a professional capacity.
        </Typography>
      </Container>
      <Container sx={{ py: 4, float: 'center' }} maxWidth="lg">
        <Typography variant='h6' gutterBottom>Here are some of the tools I've worked with, applied to professional/personal projects.</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} lg={3}>      
              <Card sx={{ maxWidth: 245 }}>
                <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                  <img src='about/frontend.png' alt='FrontEnd' width='171px' style={{padding: '10px'}}/>
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

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 245 }}>
              <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                <img src='about/backend.png' alt='FrontEnd' width='171px'/>
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

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 245 }}>
              <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                <img src='about/api.png' alt='FrontEnd' width='171px' style={{padding: '10px'}}/>
              </div>
              
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    APIs
                  </Typography>
                  <hr></hr>
                  <Typography variant="body1">
                    Stripe <br></br> YouTube <br></br> Fitbit <br></br> Oura <br></br> 
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 245 }}>
              <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                <img src='about/library.png' alt='FrontEnd' width='171px' style={{padding: '10px'}}/>
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
      </FadeIn>
    </div> 
  );
}