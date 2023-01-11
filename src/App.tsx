import {
    Paper,
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

function App() {
    const routes: Array<SidebarRoute> = [
        {
            name: "Rooms",
            path: "/",
            element: RoomsPage(),
        }
    ];

    const router = createBrowserRouter(routes);

    return (
        <div className="Application">
            <Toolbar className="AppToolbar" >
                <Typography variant='h4'>NanoERP</Typography>
            </Toolbar>

            <div className="AppBody">
                <RouterProvider router={router}/>
            </div>
        </div>
    );
}

export default App;
