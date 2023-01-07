import {
    Sidebar,
    SidebarRoute
} from './components/Sidebar/Siderbar';
import RoomsPage from './pages/Rooms/RoomsPage';

function App() {
    const routes: Array<SidebarRoute> = [
        {
            path: "/",
            element: RoomsPage(),
        }
    ];

    return (
        <div>
            <Sidebar routes={routes}/>
        </div>
    );
}

export default App;
