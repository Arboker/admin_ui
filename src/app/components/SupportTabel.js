import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatFullDate } from '../../helpers/main';

function createData(name, idnp, phone, pan, transaction) {
  return { name, idnp, phone, pan, transaction };
}

const SupportTable = (props) => {
    const rows = props.data.map(item => {
        item.transactionStr = formatFullDate(item.transaction);
        return createData(item.name, item.idnp, item.phone, item.pan, item.transactionStr)
    })
  return (
    <TableContainer component={Paper} className="support_table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nume Prenume</TableCell>
            <TableCell align="right">IDNP</TableCell>
            <TableCell align="right">Nr. Telefon</TableCell>
            <TableCell align="right">PAN Card</TableCell>
            <TableCell align="right">Last transaction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.idnp}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.pan}</TableCell>
              <TableCell align="right">{row.transaction}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SupportTable;