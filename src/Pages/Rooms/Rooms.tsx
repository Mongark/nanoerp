import React from 'react';

import * as FirebaseService from '../../Firebase/FirebaseService';

import { Box, Button, Divider, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import DataTable from "../../Components/DataTable/DataTable";

import './styles.css';
import RoomInterface from 'src/Interfaces/RoomInterface';
import { PlusOne, Replay } from '@material-ui/icons';

const Rooms = () => {
    const [ tableHead, setTableHead ] = useState([
        {
            type: "unit",
            value: "Name"
        },
        {
            type: "unit",
            value: "Status"
        },
        {
            type: "unit",
            value: ""
        }
    ]);
    const [ tableBody, setTableBody ] = useState([[]]);

    const refresh = () => {
        try {
            // TODO: refactor this
            FirebaseService.getRooms().then(( item: any ) => {
                let data: any = [];
                const edit = {
                    type: "unit",
                    value:
                        <Box>
                            <Button
                                style={{
                                    float: 'right',
                                    fontSize: '70%',
                                    marginRight: '2%'
                                }}
                                variant='contained'
                                color='secondary'
                                >
                                Delete
                            </Button>
                            <Button
                                style={{ 
                                    float: 'right',
                                    fontSize: '70%',
                                    marginRight: '2%'
                                }}
                                variant='contained'
                                color='primary'
                                >
                                Edit
                            </Button>
                        </Box>
                };

                item.docs.map(( dt: any ) => {
                    const rw = dt.data();
                    data = [...data, [ rw[ "name" ], rw[ "status" ], edit ]];
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
            ).catch(( err: any ) => console.log( err ));

        } catch ( error ) { console.log( error )};
    }

    refresh();

    return (
        <div>
            <Paper style={{padding: '2%'}}>
                <Typography variant='h5'>Rooms</Typography>

                <Box style={{
                        marginTop: '0.25%'
                    }}>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={ addRoom }
                        style={{
                            margin: '0.5%',
                            marginLeft: '0',
                            marginRight: '0.4%',
                        }}
                        >
                            <Typography
                                style={{
                                    fontWeight: 500
                                }}
                            >
                                Add
                            </Typography>
                    </Button>
                    
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={ refresh }
                        style={{
                            margin: '0.5%',
                        }}
                        >
                            <Replay />
                    </Button>
                </Box>

                <Divider style={{ marginTop: '0.5%', marginBottom: '1.16%' }} />

                <DataTable style={{marginTop: '1%'}} tableHead={tableHead} tableBody={tableBody} />
            </Paper>
            
        </div>
    );
}

export default Rooms;