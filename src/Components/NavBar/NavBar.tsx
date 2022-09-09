import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SideDrawer from '../SideDrawer/SideDrawer';

const NavBar = () => {
  return (
    <div>
        <AppBar position='static' color='primary'>
            <Toolbar>
                <SideDrawer />
                
                <Typography style={{ fontWeight: '600' }} variant='h5'>NanoERP</Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar;