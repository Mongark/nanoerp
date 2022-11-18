import { Typography } from "@material-ui/core";
import DataTable from "../../components/DataTable/DataTable";

function RoomsPage() {
    return(
        <div>
            <Typography variant="h4">Rooms</Typography>

            <DataTable headers={[]} body={[]} />
        </div>
    );
}

export default RoomsPage;