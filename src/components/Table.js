import { useEffect, useState } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import AlertDialog from "../components/Dialogue";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export default function BasicTable({ Customers, Statuses }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const records = Customers.map((rec) => {
    const status = Statuses.find((stat) => {
      return stat.installation == rec.id;
    });

    return {
      ...rec,
      status: status?.status,
      statusid: status?.id,
    };
  });

  console.log(records);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getColor = (status) => {
    if (status == "Requested") {
      return "White";
    } else if (status == "In progress") {
      return "Yellow";
    } else if (status == "Complete") {
      return "Green";
    } else if (status == "Rejected") {
      return "Red";
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Number (100g serving)</TableCell>
              <TableCell align="right">Customer Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Appointment Date</TableCell>
              <TableCell align="right">Date Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((output) => (
                <TableRow
                  key={output.id}
                  sx={{
                    backgroundColor: getColor(output.status),
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {output.id}
                  </TableCell>
                  <TableCell align="right">{output.customer_name}</TableCell>
                  <TableCell align="right">{output.address}</TableCell>
                  <TableCell align="right">{output.appointment_date}</TableCell>
                  <TableCell align="right">{output.date_created}</TableCell>
                  <TableCell align="right">
                    <Link to={`/installation/${output.id}/${output.statusid}`}>
                      <Fab size="medium" color="primary" aria-label="edit">
                        <EditIcon />
                      </Fab>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Fab size="medium" color="warning" aria-label="edit">
                      <AlertDialog recordid={output.id} />
                    </Fab>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={records.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
