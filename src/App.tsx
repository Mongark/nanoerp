import {
    Paper,
    Toolbar,
    Typography
} from '@material-ui/core';

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import { SidebarRoute } from './components/Sidebar/Siderbar';
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
        <div style={{ minHeight: "100%" }}>
            <Toolbar style={{ backgroundColor: "lightblue" }}>
                <Typography variant='h4'>NanoERP</Typography>
            </Toolbar>

            <Paper style={{ padding: "25px" }}>
                <RouterProvider router={router}/>
            </Paper>
        </div>
    );
}

export default App;
