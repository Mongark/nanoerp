import {
    createBrowserRouter, RouterProvider
} from "react-router-dom";

export interface SidebarRoute {
    path: string,
    element: any,
}

export interface SidebarProps {
    routes: Array<SidebarRoute>,
}

export function Sidebar(props: SidebarProps) {
    const router = createBrowserRouter(props.routes);

    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}
