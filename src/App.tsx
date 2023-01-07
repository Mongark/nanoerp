import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import RoomsPage from './pages/Rooms/RoomsPage';

export interface SidebarRoute {
    name: string,
    path: string,
    element: any,
}

export interface SidebarProps {
    routes: Array<SidebarRoute>,
}

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
        <div>
            <RouterProvider router={router}/>


        </div>
    );
}

export default App;
