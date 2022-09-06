import React from 'react';

import { Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import DataTable from "../../Components/DataTable/DataTable";

import './styles.css';

const Rooms = () => {
    const [tableHead, setTableHead] = useState([]);
    const [tableBody, setTableBody] = useState([[]]);

    return (
        <div>
            <Paper className="Rooms">
                <Typography>Rooms</Typography>

                <DataTable tableHead={tableHead} tableBody={tableBody} />
            </Paper>
            
        </div>
    );
}

export default Rooms;