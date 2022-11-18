import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import DataType from "./DataType";

function DataTable(data: DataType) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {data.headers.map((item) => {
                            return(<TableCell>{item}</TableCell>);
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">T1</TableCell>
                        <TableCell align="right">T2</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DataTable;