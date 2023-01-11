import {
    Button,
    Drawer,
    Toolbar,
    Typography
} from '@material-ui/core';

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import {
    SidebarRoute
} from './components/Sidebar/Siderbar';

import RoomsPage from './pages/Rooms/RoomsPage';

import "./App.css";
import {
    Dehaze
} from '@material-ui/icons';
import {useState} from 'react';

function App() {
    const routes: Array<SidebarRoute> = [
        {
            name: "Rooms",
            path: "/",
            element: RoomsPage(),
        }
    ];

    const [isDrawerToggled, toggleDrawer] = useState(false);

    const router = createBrowserRouter(routes);

    return (
        <div className="Application">
            <Toolbar className="AppToolbar" >
                <Button className="AppSidebarButton" variant="contained" onClick={() => toggleDrawer(true)}>
                    <Dehaze />
                </Button>
                <Typography style={{ marginLeft: "10px" }} variant='h4'>NanoERP</Typography>
            </Toolbar>

            <Drawer anchor='left' open={isDrawerToggled} onClose={() => toggleDrawer(false)}>
                {routes.map((route: SidebarRoute) => {
                    return <Button>{route.name}</Button>
                })}
            </Drawer>

            <div className="AppBody">
                <RouterProvider router={router}/>
            </div>
        </div>
    );
}

export default App;
