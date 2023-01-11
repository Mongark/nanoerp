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
import AppHeader from './components/AppHeader/AppHeader';

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
            <AppHeader toggleDrawer={toggleDrawer}/>

            <Drawer anchor='left' open={isDrawerToggled} onClose={() => toggleDrawer(false)}>
                {routes.map((route: SidebarRoute) => {
                    return(
                        <Button href={route.path}>
                            {route.name}
                        </Button>
                    );
                })}
            </Drawer>

            <div className="AppBody">
                <RouterProvider router={router}/>
            </div>
        </div>
    );
}

export default App;
