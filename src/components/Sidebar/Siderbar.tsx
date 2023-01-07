import { useState } from "react";

export interface SidebarRoute {
    name: string,
    path: string,
    element: any,
}

export interface SidebarProps {
    routes: Array<SidebarRoute>,
}

export default function Sidebar(props: SidebarProps) {
    const [isActive, setIsActive] = useState(false);

    return(
        <div>
            Hello
        </div>
    );
}
