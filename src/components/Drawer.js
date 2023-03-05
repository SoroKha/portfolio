import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import {useLocation} from 'react-router-dom';

const drawerWidth = 330;

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const itemslist = [
    { text: "About", icon: <InfoOutlinedIcon />, route: '/' },
    { text: "Projects", icon: <ConstructionOutlinedIcon />, route: '/projects' },
    { text: "Resume", icon: <ContactPageOutlinedIcon />, route: '/resume' },
    { text: "Contact", icon: <AddIcCallIcon />, route: '/contact' },
    { text: "GitHub", icon: <GitHubIcon />, route: 'https://github.com/SoroKha', target: '_blank', extraIcon: <OpenInBrowserIcon /> },
    { text: "LinkedIn", icon: <LinkedInIcon />, route: 'https://www.linkedin.com/in/soroushkhammar/', target: '_blank', extraIcon: <OpenInBrowserIcon /> },
  ];

  const container = window !== undefined ? () => window().document.body : undefined;
  const location = useLocation();

  const currentRoute = (route) => {
    return itemslist.map((item) => {
      if (item.route === route.pathname || (item.route + '/') === route.pathname) return item.text;
      return null;
    })};
  
  const drawer = (
    <div>
      <Toolbar style={{flexDirection: 'column'}}>
        <img src='/icons/sk.png' alt='logo' width='200px'/>
       </Toolbar> 
      
      <Divider />
      <List>
        {itemslist.map((item, index) => {
          const { text, icon, route, target, extraIcon } = item;
          return (
            <ListItem style={{color: '#000000DE', marginBottom: '20px'}} key={text} component={Link} to={route} target={target} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText disableTypography style={{fontSize: '20px', fontFamily: 'Times'}} primaryTypographyProps={{fontSize: '20px'}}   primary={text}/><ListItemIcon>{extraIcon}</ListItemIcon>
                
              </ListItemButton>  
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Toolbar>
      <div style={{width: '100%', paddingTop: '20%'}}>
          <div className='git-card'>
            <div>
              <img src='/icons/github.png' width='35px' color='white' alt='github' style={{marginBottom: '24px'}}/>
            </div>
            <Typography style={{color: 'white', fontSize: '20px', lineHeight: '24px', fontWeight: '600', margin: '0px'}}>Portfolio</Typography>
            <div>
              <Button href="https://github.com/SoroKha/portfolio" target="_blank" variant="light">
              <Typography style={{color: 'white'}}>View Code</Typography> 
              </Button>
            </div>
          </div>
          <div className='credits' style={{textAlign: 'center', paddingTop: '20px'}}>
            <Typography variant='overline' sx={{color: 'grey'}}>Built by Soroush using React</Typography>
          </div>
        </div>
      </Toolbar>
    </div>
  );

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
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'linear-gradient(to top, #ece9e6, #ffffff)',
              }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'linear-gradient(to top, #ece9e6, #ffffff)',
              }
          }}
          open
         
        >
          {drawer}
        </Drawer> 
      </Box>
    </Box>
  );
}
