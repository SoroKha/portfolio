import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaHome, FaAddressCard } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { MdOutlineContactPage } from 'react-icons/md';
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
        <Sidebar
        style={{color: '#8BA1B7', height: '100vh'}}
        width='350px'
        image='https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg'
        backgroundColor='rgb(249, 249, 249, 0.1)'
        
        color='#8BA1B7'
        >
        <p style={{fontWeight: "700", fontSize: "40px", color: "#0098e5", textAlign: 'center'}}>
        Soroush <br></br> Khammar
        </p>
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
            <MenuItem icon=<FaHome />> Home </MenuItem>
            <MenuItem icon=<AiOutlineFundProjectionScreen />> Projects </MenuItem>
            <MenuItem icon=<MdOutlineContactPage />> Resume </MenuItem>
            <MenuItem icon=<FaAddressCard />> Contact </MenuItem>
        </Menu>
        
        </Sidebar>
    );
}