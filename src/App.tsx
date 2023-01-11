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

import RoomsPage from './pages/Rooms/RoomsPage';

import "./App.css";

import {useState} from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import {SideDrawer, SideDrawerRoute} from './components/SideDrawer/SideDrawer';

function App() {

    const [isDrawerToggled, toggleDrawer] = useState(false);

    const routes: Array<SideDrawerRoute> = [
        {
            name: "Rooms",
            path: "/",
            element: RoomsPage(),
        }
    ];

    const router = createBrowserRouter(routes);

    return (
        <div className="Application">
            <AppHeader toggleDrawer={toggleDrawer}/>

            <SideDrawer toggleDrawer={toggleDrawer} routes={routes} isDrawerToggled={isDrawerToggled}/>

            <div className="AppBody">
                <RouterProvider router={router}/>
            </div>
        </div>
    );
}

export default App;
