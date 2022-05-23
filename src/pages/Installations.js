import { useEffect, useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/";
import Tables from "../components/Table";
import { useParams, useNavigate } from "react-router-dom";

export default function Installations() {
  const [record, setRecord] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    getData();
    getStatus();
  }, []);

  const getData = async () => {
    const response = await fetch("/api/installations");
    const data = await response.json();
    setRecord(data);
  };

  const getStatus = async () => {
    const response = await fetch("/api/status");
    const data = await response.json();
    setStatus(data);
  };

  return (
    <div class="col main pt-5 mt-3">
      <hr />

      <div class="row ">
        <div class="col-lg-10 col-md-8 col-sm-12">
          <h5 class="mt-3 mb-3 text-secondary">Installations</h5>
          <div class="table-responsive">
            <Tables Customers={record} Statuses={status} />
          </div>
        </div>
      </div>
    </div>
  );
}
