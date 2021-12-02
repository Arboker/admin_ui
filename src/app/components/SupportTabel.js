import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, idnp, phone, pan, transaction) {
  return { name, idnp, phone, pan, transaction };
}

const rows = [
  createData('John Doe', 200542345876452, "+373 794 456969", "2019 3820 2323 4477", "14:45 12/12/18"),
  createData('Max Star', 200542345876452, "+373 794 239543", "2019 3820 2323 4477", "14:45 11/12/18"),
  createData('Denis Dev', 200542345876452, "+373 794 395235", "2019 3820 2323 4477", "14:45 10/12/18")
];

const SupportTable = () => {
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