import React from 'react';

import * as FirebaseServices from '../../Firebase/FirebaseService';

import { Button, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import DataTable from "../../Components/DataTable/DataTable";

import './styles.css';

const Rooms = () => {
    const [ tableHead, setTableHead ] = useState(["Name"]);
    const [ tableBody, setTableBody ] = useState([[]]);

    const refresh = () => {
        try {
            // TODO: refactor this
            FirebaseServices.getRooms().then((item) => {
                let data: any = [];
                item.docs.map(( dt ) => {
                    const rw = dt.data();
                    data = [...data, [rw["name"]]];
                });
                
                setTableBody(data);
            }).catch((err) => alert(err));
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <Paper className="Rooms">
                <Typography>Rooms</Typography>

                <Button variant='contained' color='secondary' onClick={ refresh } >Refresh</Button>

                <DataTable tableHead={tableHead} tableBody={tableBody} />
            </Paper>
            
        </div>
    );
}

export default Rooms;