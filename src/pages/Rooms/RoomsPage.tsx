import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography
} from "@material-ui/core";

import { useEffect, useState } from "react";

import DataTable from "../../components/DataTable/DataTable";
import Api from "../../api/api";
import formatRoomData from "../../api/format/formatRoomData";
import { Add, Refresh } from "@material-ui/icons";
import {AxiosResponse} from "axios";

function RoomsPage() {
    const [data, setData] = useState({ headers: [], body: [] });
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [roomName, setRoomName] = useState('');

    const updateData = () => {
        Api.rooms.getAll().then((res: AxiosResponse) => {
            if(!res) return;
            if(!res.data) return;
            setData(formatRoomData(res.data));
        });
    };

    useEffect( updateData, [data] );

    return(
        <div>
            <Typography variant="h5">Rooms</Typography>

            <Container style={{ margin: 0, padding: '6px', paddingLeft: 0 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={updateData}
                >
                    <Refresh />
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: "5px" }}
                    onClick={() => setIsDialogOpen(true)}
                >
                    <Add />
                </Button>
            </Container>


            <DataTable
                headers={data.headers}
                body={data.body}
            />

            <Dialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                >
                <DialogTitle>Add Room</DialogTitle>
                <DialogContent style={{ padding: "12px" }}>
                    <DialogContentText>
                        Add your new room data
                    </DialogContentText>
                    <TextField
                        label="Room Name"
                        onChange={(e) => setRoomName(e.target.value)}
                        />
                </DialogContent>
                <DialogActions style={{ margin: 0 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => setIsDialogOpen(false)}
                        >
                            Cancel
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            Api.rooms.add({ name: roomName });
                            setIsDialogOpen(false);
                        }}
                        >
                            Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default RoomsPage;
