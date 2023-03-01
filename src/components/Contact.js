import '../App.css';
import React, { useRef, useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Box, Container } from '@mui/material';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import FadeIn from 'react-fade-in';


const drawerWidth = 330;

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

export default function Contact() {
    const form = useRef();
    const [verified, setVerified] = useState(false);

    function captcha() {
        setVerified(true);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Thank you!',
              text: 'Message sent successfully!',
              target: document.getElementById('swal')
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
              target: document.getElementById('swal')
            })
          });
        e.target.reset()
      };
    
    
    return (
    <>
    <GoogleReCaptcha onVerify={captcha} />
    <FadeIn delay={100}>
    <Box
        component="main"
        sx={{ float: 'right', flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      <Container sx={{ py: 4, float: 'center', paddingTop: '75px' }} maxWidth="md">
      <div id='swal'></div>
      <Grid>
        <Card style={{ maxWidth: 800, padding: "20px 5px 0px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Me
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Enter your details and I will get back to you within 24 hours.
          </Typography> 
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField name='first_name' placeholder="Enter your name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name='last_name' placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField name='user_email' type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField name='message' label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                
                <Grid item xs={12} style={{paddingTop: '10px'}}>
                  <Button disabled={!verified} type="submit" size='large' variant="contained" color="primary" style={{width: '304px'}}>Send Message</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      </Container>
      </Box>
      </FadeIn>
    </>
  );
}

