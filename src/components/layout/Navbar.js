import React from 'react'
// import Contacts from '../contacts/Contacts'
// import AddContact from '../contacts/AddContact';

// import Tab from '@material-ui/core/Tab';
// import Tabs from '@material-ui/core/Tabs';
// import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Home from '@material-ui/icons/Home';
import Add from '@material-ui/icons/Add';


const Navbar = () => {
    
    return (
        <div style={{ width: '100%' }}>
            <AppBar position="static">
                <Toolbar>
                    
                        <Box p={1}>
                            Contact Manager
                        </Box>
                        <Box p={1} flexGrow={1}>
                            
                        </Box>
                        <Box p={2}>
                            <Home/>
                        </Box>
                        <Box p={2}>
                            <Add/>
                        </Box>
                    
                </Toolbar>
                
            </AppBar>
        </div>
        
    )
}

export default Navbar
