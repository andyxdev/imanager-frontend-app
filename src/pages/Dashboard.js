import { useEffect, useState } from "react";
import PieChart from "../components/PieChart";
import Table from "../components/Table";
import { Grid, Container, Typography } from "@mui/material";

const Dashboard = () => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("/api/status/");
    const data = await response.json();
    setStatus(data);
  };
  const getNumber = (state) => {
    const result = status.filter((stat) => {
      return stat.status === state;
    });

    return result.length;
  };

  console.log(status);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back
      </Typography>

      <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
          <span class="sr-only">Close</span>
        </button>
        <strong>Data and Records</strong> Learn more about employee
      </div>
      <div class="row mb-3">
        <div class="col-xl-3 col-sm-6 py-2">
          <div class="card bg-success text-white h-100">
            <div
              class="card-body bg-success"
              style={{ backgroundColor: "#57b960" }}
            >
              <div class="rotate">
                <i class="fa fa-check fa-4x"></i>
              </div>
              <h6 class="text-uppercase">COMPLETE</h6>
              <h1 class="display-4">{getNumber("Complete")}</h1>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
          <div class="card text-white bg-danger h-100">
            <div class="card-body bg-danger">
              <div class="rotate">
                <i class="fa fa-ban fa-4x"></i>
              </div>
              <h6 class="text-uppercase">REJECTED</h6>
              <h1 class="display-4">{getNumber("Rejected")}</h1>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
          <div class="card text-white bg-info h-100">
            <div class="card-body bg-info">
              <div class="rotate">
                <i class="fa fa-file fa-4x"></i>
              </div>
              <h6 class="text-uppercase">REQUESTED</h6>
              <h1 class="display-4">{getNumber("Requested")}</h1>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
          <div class="card text-white bg-warning h-100">
            <div class="card-body">
              <div class="rotate">
                <i class="fa fa-spinner fa-4x"></i>
              </div>
              <h6 class="text-uppercase">In Progress</h6>
              <h1 class="display-4">{getNumber("In progress")}</h1>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div class="row ">
        <div class="col-lg-7 col-md-6 col-sm-12">
          <h5 class="mt-3 mb-3 text-secondary">Installations</h5>
          <div class="table-responsive"></div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
          <h4 className="title mt-3 mb-3 text-center text-secondary">
            Data in Chart
          </h4>
          <div
            className="mb-5"
            style={{ height: "300px", width: "400px" }}
          ></div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
