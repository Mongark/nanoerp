import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import Drawer from '../SideDrawer/SideDrawer'

export default function () {
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
