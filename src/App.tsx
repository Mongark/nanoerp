import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import RoomsPage from './pages/Rooms/RoomsPage';

export interface SidebarRoute {
    path: string,
    element: any,
}

export interface SidebarProps {
    routes: Array<SidebarRoute>,
}

function App() {
    const routes: Array<SidebarRoute> = [
        {
            path: "/",
            element: RoomsPage(),
        }
    ];

    const router = createBrowserRouter(routes);

    return (
        <div>
            <RouterProvider router={router}/>

            <Sidebar />
        </div>
    );
}

export default App;
