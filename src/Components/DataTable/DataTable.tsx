import React from 'react';

import { Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";

import './styles.css'

const DataTable = ( props: any ) => {

    return(
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead className='Head'>
                        <TableRow>
                            {props.tableHead.map(( item: any, index: number ) => {
                                return(
                                    <TableCell key={ index } style={{ background: 'lightgrey' }}>
                                        {
                                            ( item.type == "unit" )
                                                ? <Typography>{ item.value }</Typography> :
                                            ( item.type == "select" )
                                                ? <Select>{ item.value }</Select> : "invalid"
                                        }
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.tableBody.map(( row: any, index: number ) => {
                            return(
                                <TableRow key={ index }>
                                    {row.map(( item: any, index2: number ) => {
                                        return(
                                            <TableCell key={ index2 }>
                                                {
                                                    ( item.type == "unit" )
                                                    ? item.value :
                                                ( item.type == "select" )
                                                    ? <Select>{ item.value }</Select> : "invalid"
                                                }
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DataTable;