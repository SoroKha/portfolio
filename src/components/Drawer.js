import * as React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import {useLocation} from 'react-router-dom';

const drawerWidth = 330;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const itemslist = [
    { text: "About", icon: <InfoOutlinedIcon />, route: '/' },
    { text: "Projects", icon: <ConstructionOutlinedIcon />, route: '/projects' },
    { text: "Resume", icon: <ContactPageOutlinedIcon />, route: '/resume' },
    { text: "Contact", icon: <AddIcCallIcon />, route: '/contact' },

  ];

  const currentRoute = (route) => {
    return itemslist.map((item) => {
      if (item.route === route.pathname) return item.text;
    })};
  
  const drawer = (
    <div>
      <Toolbar style={{flexDirection: 'column'}}>
        <img src='/icons/sk.png' alt='logo' width='200px'/>
       </Toolbar> 
      
      <Divider />
      <List>
        {itemslist.map((item, index) => {
          const { text, icon, route } = item;
          return (
            <ListItem style={{color: '#000000DE', marginBottom: '20px'}} key={text} component={Link} to={route} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '20px'}}   primary={text} />
              </ListItemButton>  
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Toolbar style={{justifyContent: 'space-evenly'}}>
        <a href='https://linkedin.com' target="_blank" rel="noreferrer">
          <img src='/icons/linkedin.png' alt='linkedin' width='55px'/>
        </a>
      
        <a href='https://github.com/SoroKha' target="_blank" rel="noreferrer">
          <img src='/icons/githubicon.png' alt='github' width='55px' />
        </a>
      </Toolbar>
    </div>
  );


  const container = window !== undefined ? () => window().document.body : undefined;
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{backgroundColor: '#010C80'}}>
  
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          {currentRoute(location)}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
          <div style={{paddingTop: '150px'}}>
          <div className='git-card'>
            <div>
              <img src='/icons/github.png' width='35px' color='white' alt='github' style={{marginBottom: '12px'}}/>
            </div>
            <p style={{color: 'white', fontSize: '20px', lineHeight: '24px', fontWeight: '600', margin: '0px'}}>Portfolio</p>
            <div style={{marginTop: '12px'}}>
              <Button href="https://github.com/SoroKha/portfolio" target="_blank" variant="light">
              <Typography style={{color: 'white'}}>View Code</Typography> 
              </Button>
            </div>
          </div>
          <div className='credits' style={{textAlign: 'center', paddingTop: '50px'}}>
            <Typography variant='overline'>Built by Soroush using React</Typography>
          </div>
        </div>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
          <div style={{paddingTop: '200px'}}>
          <div className='git-card'>
            <div>
              <img src='/icons/github.png' width='35px' color='white' alt='github' style={{marginBottom: '12px'}}/>
            </div>
            <p style={{color: 'white', fontSize: '20px', lineHeight: '24px', fontWeight: '600', margin: '0px'}}>Portfolio</p>
            <div style={{marginTop: '12px'}}>
              <Button href="https://github.com/SoroKha/portfolio" target="_blank" variant="light">
              <Typography style={{color: 'white'}}>View Code</Typography> 
              </Button>
            </div>
          </div>
          <div className='credits' style={{textAlign: 'center', paddingTop: '20px'}}>
            <Typography variant='overline'>Built by Soroush using React</Typography>
          </div>
        </div>
        </Drawer>
        
      </Box>
      
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
