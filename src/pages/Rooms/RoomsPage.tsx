import { Typography } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import DataTable from "../../components/DataTable/DataTable";
import Api from "../../api/api";

function formatRoomData(dt: any) {
    const headers = ["Name"];
    const body: any[] = [];
    dt.map((item: any) => {
        body.push([item.name]);
    });
    return { headers: headers, body: body };
}

function RoomsPage() {
    const [data, setData] = useState({
        headers: ["Header 1", "Header 2", "Header 3"],
        body: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    });

    Api.rooms.getAll().then((res) => {
        const dt = formatRoomData(res.data);
        setData(dt);
    });

    return(
        <div>
            <Typography variant="h4">Rooms</Typography>

            <DataTable
                headers={data.headers}
                body={data.body}
            />
        </div>
    );
}

export default RoomsPage;