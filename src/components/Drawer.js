import * as React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

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
  const drawer = (
    <div>
      <Toolbar></Toolbar>
      <Divider />
      <List>
        {itemslist.map((item, index) => {
          const { text, icon, route } = item;
          return (
            <ListItem style={{color: '#000000DE'}} key={text} component={Link} to={route} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>  
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Toolbar style={{justifyContent: 'space-evenly'}}>
        <a href='https://linkedin.com' target="_blank" rel="noreferrer">
          <img src='linkedin.png' alt='linkedin' width='55px'/>
        </a>
      
        <a href='https://github.com/SoroKha' target="_blank" rel="noreferrer">
          <img src='githubicon.png' alt='github' width='55px' />
        </a>
      </Toolbar>
    </div>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

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
        <Toolbar>
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
            
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
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
              <img src='/github.png' width='35px' color='white' alt='github' style={{marginBottom: '12px'}}/>
            </div>
            <p style={{color: 'white', fontSize: '20px', lineHeight: '24px', fontWeight: '600', margin: '0px'}}>Portfolio</p>
            <div style={{marginTop: '12px'}}>
              <Button href="https://github.com/SoroKha/portfolio" target="_blank" variant="light">
              <Typography style={{color: 'white'}}>View Code</Typography> 
              </Button>
            </div>
          </div>
          <div className='credits' style={{textAlign: 'center', paddingTop: '50px'}}>
            <p>Built by Soroush using React</p>
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
          <div style={{paddingTop: '320px'}}>
          <div className='git-card'>
            <div>
              <img src='/github.png' width='35px' color='white' alt='github' style={{marginBottom: '12px'}}/>
            </div>
            <p style={{color: 'white', fontSize: '20px', lineHeight: '24px', fontWeight: '600', margin: '0px'}}>Portfolio</p>
            <div style={{marginTop: '12px'}}>
              <Button href="https://github.com/SoroKha/portfolio" target="_blank" variant="light">
              <Typography style={{color: 'white'}}>View Code</Typography> 
              </Button>
            </div>
          </div>
          <div className='credits' style={{textAlign: 'center', paddingTop: '50px'}}>
            <p>Built by Soroush using React</p>
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
