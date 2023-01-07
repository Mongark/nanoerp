import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import Sidebar, {SidebarRoute} from './components/Sidebar/Siderbar';

import RoomsPage from './pages/Rooms/RoomsPage';


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

            <Sidebar routes={routes} />
        </div>
    );
}

export default App;
