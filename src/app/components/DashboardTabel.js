import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, users, usesUnic, usersTotal) {
  return { date, users, usesUnic, usersTotal };
}

const DashboardTabel = (data) => {
   
    const rows = data.data.map(item => {
        return createData(item.date, item.users, item.unic_users, item.unic_users)
    })

    return (
        <TableContainer component={Paper} className="dashboard_container">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Numar utilizatori total</TableCell>
                        <TableCell align="right">Numar utilizatori unici</TableCell>
                        <TableCell align="right">Numar utilizatori unici</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right">{row.users}</TableCell>
                            <TableCell align="right">{row.usesUnic}</TableCell>
                            <TableCell align="right">{row.usersTotal}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DashboardTabel;