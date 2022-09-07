import React from 'react';

import * as FirebaseServices from '../../Firebase/FirebaseService';

import { Box, Button, Divider, Paper, Typography } from "@material-ui/core";
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
                    data = [...data, [ rw[ "name" ] ]];
                });
                
                setTableBody( data ); 
            }).catch(( err ) => alert( err ));
        } catch ( error ) {
            alert( error );
        }
    }

    const addRoom = () => {
        try {
            // TODO: refactor this
            FirebaseServices.addRoom({name: "Added room"}).then((item) => {
                refresh(); 
            }).catch(( err ) => alert( err ));
        } catch ( error ) {
            alert( error );
        }
    }

    refresh();

    return (
        <div>
            <Paper style={{padding: '2%'}}>
                <Typography variant='h5'>Rooms</Typography>

                <Divider style={{marginTop: '0.5%', marginBottom: '0.5%'}} />

                <Box>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={ refresh }
                        style={{margin: '0.5%', marginLeft: '0'}}
                        >
                            Refresh
                    </Button>
                    
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={ addRoom }
                        style={{margin: '0.5%'}}
                        >
                            Add Room
                    </Button>
                </Box>

                <DataTable style={{marginTop: '1%'}} tableHead={tableHead} tableBody={tableBody} />
            </Paper>
            
        </div>
    );
}

export default Rooms;