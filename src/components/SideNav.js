import { Sidebar, Menu, MenuItem, ProSidebarProvider } from 'react-pro-sidebar';
import { FaHome, FaAddressCard } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { MdOutlineContactPage } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import '../App.css';

const themes = {
    dark: {
      sidebar: {
        backgroundColor: '#0b2948',
        color: '#8ba1b7',
      },
      menu: {
        menuContent: '#082440',
        icon: '#59d0ff',
        hover: {
          backgroundColor: '#00458b',
          color: '#b6c8d9',
        },
        disabled: {
          color: '#3e5e7e',
        },
      },
    },
};

export default function SideNav() {
    return (
      <ProSidebarProvider>
        <Sidebar
        style={{color: '#8BA1B7', height: '100vh', float: 'left'}}
        width='350px'
        image='https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg'
        color='#0B2745'
        backgroundColor='rgb(11, 39, 69, 0.9)'
        
        
        >
        <img src='sk.png' alt='SKLogo' width='180px' style={{marginLeft: '75px', marginTop: '20px', marginBottom: '20px'}}/>
        <Menu
        menuItemStyles={{
            button: ({ level }) => {
                
                // only apply styles on first level elements of the tree
                if (level === 0)
                return {
                    '&:hover': {
                        backgroundColor: themes.dark.menu.hover.backgroundColor,
                        color: themes.dark.menu.hover.color,
                    },
                    fontSize: '25px', marginBottom: '20px'
                };
            },
        }}
        >   
         <MenuItem icon=<FaHome />> About </MenuItem>
         <MenuItem icon=<AiOutlineFundProjectionScreen />> Projects </MenuItem>
         <MenuItem icon=<MdOutlineContactPage />> Resume </MenuItem>
         <MenuItem icon=<FaAddressCard />> Contact </MenuItem>

        </Menu>
        <div className='nav-footer'>
          <div className='git-card'>
            <div>
              <img src='/github.png' width='35px' color='white' alt='github' style={{marginBottom: '12px'}}/>
            </div>
            <p style={{color: 'white', fontSize: '20px', lineHeight: '24px', fontWeight: '600', margin: '0px'}}>Portfolio</p>
            <div style={{marginTop: '12px'}}>
              <Button href="https://github.com/SoroKha/portfolio" target="_blank" variant="light">
              View Code
              </Button>
            </div>
          </div>
          <div className='credits' style={{textAlign: 'center', paddingTop: '50px'}}>
            <p>Built by Soroush using React</p>
          </div>
        </div>

        </Sidebar>
        </ProSidebarProvider>
    );
}