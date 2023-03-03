import Carousel from 'react-material-ui-carousel'
import { Box, Button, Container, Card, Typography, CardContent } from '@mui/material'
import React from 'react';
import FadeIn from 'react-fade-in';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const drawerWidth = 330;

export default function Projects() {
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    var IAMC = [
        {
            name: "iamc5",
            src: "projects/iamc5.png",
            parent: 'IAMC',
            caption: '',
            index: 0,
        },
        {
            name: "iamc1",
            src: "projects/iamc1.png",
            parent: 'IAMC',
            caption: 'Challenge page contains sortable leaderboard and chatroom with Discord-like threads - users are sent email notifications for unread messages',
            index: 1,
        },
        {
            name: "iamc2",
            src: "projects/iamc2.png",
            parent: 'IAMC',
            caption: 'Profile picture functionality implemented using Vue Croppie',
            index: 2
        },
        {
            name: "iamc3",
            src: "projects/iamc3.png",
            parent: 'IAMC',
            caption: 'Configured subscription plans using Stripe hooks, which are validated through their API',
            index: 3
        },
        {
            name: "iamc4",
            src: "projects/iamc4.png",
            parent: 'IAMC',
            caption: 'Meditation course records time spent listening and adds it to the users meditation log upon pausing/completing the MP3',
            index: 4
        },
    ]

    var portfolio = [
        {
            name: "portfolio1",
            src: "projects/portfolio1.png",
            parent: 'portfolio',
            caption: '',
            index: 0,
        },
        {
            name: "portfolio2",
            src: "projects/portfolio2.png",
            parent: 'portfolio',
            caption: 'Challenge page contains sortable leaderboard and chatroom with Discord-like threads - users are sent email notifications for unread messages',
            index: 1,
        },
        {
            name: "portfolio3",
            src: "projects/portfolio3.png",
            parent: 'portfolio',
            caption: 'Challenge page contains sortable leaderboard and chatroom with Discord-like threads - users are sent email notifications for unread messages',
            index: 2,
        },
    ]

    const [slides, setSlides] = React.useState([]);

    function initLightbox(index, itemSlides) {
        setSlides(eval(itemSlides));
        setIndex(index);
        setOpen(true);
    }


    function Item(props)
    {
        return (        
            <a href='#gallery' onClick={() => initLightbox(props.item.index, props.item.parent)}>
                <img src={props.item.src} alt='carouselImg' height="544px" component="img" loading='lazy'/>
                <Typography variant='caption' className='imageCaption'>
                    {props.item.caption}
                </Typography>  
            </a>
        )
    }
    return (     
        <div>
        <FadeIn delay={100}>
        <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        carousel={{finite: true, preload: 3}}
        animation={{swipe: 200}}
        index={index}
        />
        <Box
        className='background'
        component="main"
        sx={{ float: 'right', flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Container sx={{ py: 4, float: 'center', paddingTop: '75px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} maxWidth="lg">
                <Typography variant='h4' gutterBottom>Here are some of the projects I've worked on.</Typography>
                <Card sx={{ maxWidth: 1000, marginBottom: '35px' }}>
                    <div style={{position: 'relative', textAlign: 'center'}}>
                      <Carousel
                        autoPlay={false}
                        swipe={false}
                        navButtonsAlwaysVisible='true'
                        animation='fade'
                        cycleNavigation={false}                      
                        >
                            {
                                IAMC.map( (item, i) => <Item key={i} item={item} /> )
                            }
                        </Carousel>          
                    </div>
                    
                    <CardContent>
                    <img src='icons/vue_icon.png' title='Vue' alt='Vue' style={{paddingRight: '10px'}} />
                    <img src='icons/ts_icon.png' title='TypeScript' alt='TypeScript' style={{paddingRight: '10px'}} />
                    <img src='icons/php_icon.png' title='PHP' alt='PHP' style={{paddingRight: '10px'}} />
                    <img src='icons/mysql_icon.png' title='MySQL' alt='MySQL' style={{paddingRight: '10px'}} />
                    <Typography gutterBottom variant="h5" component="div">
                        iAMconnected
                        <Button variant="outlined" href="https://app.iamconnected.com" target="_blank" underline="none" sx={{marginLeft: '10px', float: 'right'}}>
                        Visit Site
                        </Button>
                    </Typography>
                    <Typography variant="body1">
                        I began working on iAMconnected in August 2022, as part of my university capstone project.
                        This was the first time I had worked on a web development project - there was a ton to learn.
                        However, it was a fantastic experience and I found the work very rewarding. Towards the end of the semester,
                        iAMconnected asked me to stay on the team and I have been working for them as a contractor ever since.
                    </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 1000, marginBottom: '35px' }}>
                <div style={{position: 'relative', textAlign: 'center'}}>
                    <Carousel
                    autoPlay={false}
                    swipe={false}
                    navButtonsAlwaysVisible='true'
                    animation='fade'
                    cycleNavigation={false}
                    >
                        
                    </Carousel>
                </div>
                    <CardContent>
                    <img src='icons/react_icon.png' title='React' alt='React' style={{paddingRight: '10px'}} />
                    <img src='icons/ts_icon.png' title='TypeScript' alt='TypeScript' style={{paddingRight: '10px'}} />
                    <img src='icons/dotnet_icon.png' title='.Net' alt='.Net' style={{paddingRight: '10px'}} />
                    <img src='icons/postgres_icon.png' title='Postgres' alt='Postgres' style={{paddingRight: '10px'}} />
                    
                    <Typography gutterBottom variant="h5" component="div">
                        ReStore eCommerce (WIP)
                        <Button variant="outlined" href="#" underline="none" target="_blank" sx={{float: 'right'}}>
                        GitHub
                        </Button>           
                    </Typography> 
                
                              
                    <Typography variant="body1">
                        Interested in learning React and .NET, I decided to create a mock eCommerce site. There
                        were a lot of front end and server-side facets to incorporate, which made it very valuable
                        for learning the intricacies of both tools. 
                    </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 1000, marginBottom: '35px' }}>
                <div style={{position: 'relative', textAlign: 'center'}}>
                    <Carousel
                    autoPlay={false}
                    swipe={false}
                    navButtonsAlwaysVisible='true'
                    animation='fade'
                    cycleNavigation={false}
                    >
                        {
                            portfolio.map( (item, i) => <Item key={i} item={item} /> )
                        }
                    </Carousel>
                </div>
                    <CardContent>

                    <img src='icons/react_icon.png' title='React' alt='React' style={{paddingRight: '10px'}} />
                    <img src='icons/js_icon.png' title='JavaScript' alt='JavaScript' style={{paddingRight: '10px'}} />

                    <Typography gutterBottom variant="h5" component="div">
                        Portfolio
                        <Button variant="outlined" href="#" underline="none" target="_blank" sx={{float: 'right'}}>
                        GitHub
                        </Button> 
                    </Typography>
                    <Typography variant="body1">
                        Every web developer needs a portfolio website - I decided to build mine using MaterialUI, a fantastic
                        component library.
                        I configured the contact form with EmailJS and used Google reCAPTCHA to validate
                        against spam (unnecessary but a good excuse to learn something new).
                    </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
        </FadeIn>
        </div>
    );
}