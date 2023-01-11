import {
    Button,
    Toolbar,
    Typography,
} from "@material-ui/core";

import {
    Dehaze
} from "@material-ui/icons";

export default function AppHeader(props: any) {
    return(
        <Toolbar className="AppToolbar" >
            <Button className="AppSidebarButton" variant="contained" onClick={() => props.toggleDrawer(true)}>
                <Dehaze />
            </Button>
            <Typography style={{ marginLeft: "10px" }} variant='h4'>NanoERP</Typography>
        </Toolbar>
    );
}
