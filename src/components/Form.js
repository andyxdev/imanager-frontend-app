import { useEffect, useState } from "react";
import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Link } from "react-router-dom";
import { set } from "date-fns";
import StatusDialogue from "../components/StatusDialogue";

const Form = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState([]);
  const [status, setStatus] = useState({
    status: "",
    notes: "",
    installation: "",
  });
  const [editstatus, setEditStatus] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [recordid, setRecordid] = React.useState("");

  const [formData, setFormData] = React.useState({
    customer_name: "",
    address: "",
    appointment_date: "",
  });
  useEffect(() => {
    getData();
    getStatus();
  }, [params.id]);

  useEffect(() => {
    setStatus((prevStatusData) => {
      return {
        ...prevStatusData,
        installation: params.id,
      };
    });
  }, [status]);

  const getData = async () => {
    const response = await fetch(`/api/installations/${params.id}`);
    const data = await response.json();
    setFormData(data);
  };

  const getStatus = async () => {
    const response = await fetch(`/api/status/${params.statusid}`);
    const data = await response.json();
    setStatus(data);
  };

  const getEditStatus = () => {
    const edit = status.find((stat) => {
      return stat.installation == params.id;
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(params).length === 0) {
      createInstallation();
    } else {
      updateInstallation();
      createStatus();
    }
  };

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
    setStatus((prevStatusData) => {
      return {
        ...prevStatusData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const createInstallation = async () => {
    const response = await fetch(`/api/installations/`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setRecordid(data.id);
    setOpen(true);
  };

  const updateInstallation = async () => {
    fetch(`/api/installations/${params.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  const createStatus = async () => {
    const response = await fetch(`/api/status/`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(status),
    });
  };

  const handleCancel = () => {
    navigate("/");
  };

  const closeDialogue = () => {
    setOpen(false);
  };

  const styles = {
    buttons: {
      marginTop: 30,
      float: "right",
    },
    saveButton: {
      marginLeft: 5,
    },
  };

  console.log(formData);
  console.log(status);

  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="standard-basic"
        label="Name"
        name="customer_name"
        variant="standard"
        fullWidth={true}
        defaultValue=""
        value={formData?.customer_name}
        onChange={handleChange}
      />
      <TextField
        id="standard-basic"
        label="Address"
        name="address"
        variant="standard"
        fullWidth={true}
        value={formData?.address}
        onChange={handleChange}
      />
      <TextField
        id="date"
        label="Appointment Date"
        name="appointment_date"
        type="date"
        value={formData?.appointment_date}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />
      {Object.keys(params).length != 0 && <Divider />}
      {Object.keys(params).length != 0 && (
        <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
      )}

      {Object.keys(params).length != 0 && (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status?.status}
          label="status"
          name="status"
          onChange={handleChange}
        >
          <MenuItem value="Requested">Requested</MenuItem>
          <MenuItem value="In progress">In progress</MenuItem>
          <MenuItem value="Complete">Complete</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
      )}
      <Divider />

      <div style={styles.buttons}>
        <Button variant="contained" color="error" onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          style={styles.saveButton}
          onClick={handleFormSubmit}
        >
          Save
        </Button>
        <StatusDialogue
          opendialogue={open}
          recordid={recordid}
          handleClose={closeDialogue}
        />
      </div>
    </Stack>
  );
};

export default Form;
