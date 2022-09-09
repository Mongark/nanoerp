import React from 'react';

import * as FirebaseService from '../../Firebase/FirebaseService';

import { Box, Button, Divider, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import DataTable from "../../Components/DataTable/DataTable";

import './styles.css';
import RoomInterface from 'src/Interfaces/RoomInterface';

const Rooms = () => {
    const [ tableHead, setTableHead ] = useState([
        {
            type: "unit",
            value: "Name"
        },
        {
            type: "unit",
            value: "Status"
        }
    ]);
    const [ tableBody, setTableBody ] = useState([[]]);

    const refresh = () => {
        try {
            // TODO: refactor this
            FirebaseService.getRooms().then(( item: any ) => {
                let data: any = [];
                item.docs.map(( dt: any ) => {
                    const rw = dt.data();
                    data = [...data, [ rw[ "name" ], rw[ "status" ] ]];
                });
                
                setTableBody( data ); 
            }).catch(( err: any ) => alert( err ));
        } catch ( error ) {
            alert( error );
        }
    }

    const addRoom = () => {
        try {
            const sample_room: RoomInterface = {
                name: {
                    type: "unit",
                    value: "New room name"
                },
                status: {
                    type: "select",
                    value: "Vacant"
                }
            }

            // TODO: refactor this
            FirebaseService.addRoom( sample_room )
                .then(( item: any ) => {
                    refresh();
                }
            ).catch(( err: any ) => alert( err ));

        } catch ( error ) { alert( error )};
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
                        style={{margin: '0.5%', marginLeft: '0', marginRight: '0.25%'}}
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