import { Typography } from "@material-ui/core";
import DataTable from "../../components/DataTable/DataTable";

function RoomsPage() {
    return(
        <div>
            <Typography variant="h4">Rooms</Typography>

            <DataTable
                headers={["Header 1", "Header 2", "Header 3"]}
                body={[[1, 2, 3], [4, 5, 6]]}
            />
        </div>
    );
}

export default RoomsPage;