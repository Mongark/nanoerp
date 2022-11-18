import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import DataType from "./DataType";

function DataTable(data: DataType) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {data.headers.map((item, index) => {
                            return (<TableCell key={index}>{item}</TableCell>);
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.body.map((item1, index1) => {
                        return (
                            <TableRow key={index1}>
                                {item1.map((item2, index2) => {
                                    return(
                                        <TableCell key={index2}>
                                            {item2}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DataTable;