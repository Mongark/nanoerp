import { Button, Container, Typography } from "@material-ui/core";
import { useState } from "react";
import DataTable from "../../components/DataTable/DataTable";
import Api from "../../api/api";
import formatRoomData from "../../api/format/formatRoomData";

function RoomsPage() {
    const [data, setData] = useState({ headers: [], body: [] });

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

            <Container style={{ margin: 0, padding: '6px', paddingLeft: 0 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={updateData}
                >
                    Update data
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: "5px" }}
                >
                    Add room
                </Button>
            </Container>
            

            <DataTable
                headers={data.headers}
                body={data.body}
            />
        </div>
    );
}

export default RoomsPage;