import { Button, Typography } from "@material-ui/core";
import { useState } from "react";
import DataTable from "../../components/DataTable/DataTable";
import Api from "../../api/api";
import formatRoomData from "../../api/format/formatRoomData";

function RoomsPage() {
    const [data, setData] = useState({
        headers: ["Header 1", "Header 2", "Header 3"],
        body: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    });

    const updateData = () => {
        Api.rooms.getAll().then((res) => {
            const dt = formatRoomData(res.data);
            setData(dt);
        });
    };

    updateData();

    return(
        <div>
            <Typography variant="h4">Rooms</Typography>

            <Button
                variant="contained"
                color="primary"
                onClick={updateData}
                >
                    Update data
            </Button>

            <DataTable
                headers={data.headers}
                body={data.body}
            />
        </div>
    );
}

export default RoomsPage;