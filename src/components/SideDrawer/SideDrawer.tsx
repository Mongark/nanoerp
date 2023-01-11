import {Drawer} from "@material-ui/core";
import {Button} from "@material-ui/core";
import RoomsPage from "../../pages/Rooms/RoomsPage";

export interface SideDrawerRoute {
    name: string,
    path: string,
    element: any,
}

interface SideDrawerProps {
    routes: Array<SideDrawerRoute>,
    isDrawerToggled: boolean,
    toggleDrawer: any,
}


export function SideDrawer(props: SideDrawerProps) {

    return(
        <Drawer anchor='left' open={props.isDrawerToggled} onClose={() => toggleDrawer(false)}>
            {props.routes.map((route: SideDrawerRoute) => {
                return(
                    <Button href={route.path}>
                        {route.name}
                    </Button>
                );
            })}
        </Drawer>
    );
}
