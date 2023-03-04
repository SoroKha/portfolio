import Carousel from 'react-material-ui-carousel'
import { Box, Button, Container, Card, Typography, CardContent } from '@mui/material'
import { useState } from 'react';
import FadeIn from 'react-fade-in';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { IAMC, portfolio } from '../data/projectData';
import {
    ReactIcon,
    VueIcon,
    TSIcon,
    JSIcon,
    DotNetIcon,
    PostgresIcon,
    PHPIcon,
    MySQLIcon
} from '../data/iconsData';

const drawerWidth = 330;

export default function Projects() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [slides, setSlides] = useState([]);

    function initLightbox(index, itemSlides) {
        if (itemSlides === 'IAMC') itemSlides = IAMC;
        if (itemSlides === 'portfolio') itemSlides = portfolio;
        setSlides(itemSlides);
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
        <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        carousel={{finite: true}}
        animation={{swipe: 300}}
        index={index}
        plugins={[Thumbnails]}
        />
        <FadeIn delay={100}>
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
                    <VueIcon /><TSIcon /><PHPIcon /><MySQLIcon />

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
                    <ReactIcon /><TSIcon /><DotNetIcon /><PostgresIcon />
                    
                    <Typography gutterBottom variant="h5" component="div">
                        ReStore eCommerce (WIP)
                        <Button variant="outlined" href="https://github.com/SoroKha/ReStore" underline="none" target="_blank" sx={{float: 'right'}}>
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

                    <ReactIcon /><JSIcon />

                    <Typography gutterBottom variant="h5" component="div">
                        Portfolio
                        <Button variant="outlined" href="https://github.com/SoroKha/portfolio" underline="none" target="_blank" sx={{float: 'right'}}>
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