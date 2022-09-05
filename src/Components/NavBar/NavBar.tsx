import { AppBar, Toolbar } from '@material-ui/core';
import Drawer from '../SideDrawer/SideDrawer';

const NavBar = () => {
  return (
    <div>
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Drawer />
                NanoERP
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar;