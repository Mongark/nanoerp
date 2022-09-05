import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { useState } from "react";

const DataTable = ( props: any ) => {

    return(
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {props.tableHead.map(( item: any ) => {
                                return(
                                    <TableCell>{ item }</TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.tableBody.map((row: any) => {
                            return(
                                <TableRow>
                                    {row.map((item: any) => {
                                        return(
                                            <TableCell>{ item }</TableCell>
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