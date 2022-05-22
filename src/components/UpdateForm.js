import { useEffect, useState } from "react";
import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Form = () => {
  const params = useParams();
  console.log(params);
  const [record, setRecord] = useState([]);

  const [formData, setFormData] = React.useState({
    customer_name: "",
    address: "",
    appointment_date: "",
  });
  const [testData, setTestData] = React.useState({
    customer_name: "Thulani Mazibuko",
    address: "5 Shosholoza Avenue,1559",
    appointment_date: "2022-04-10",
  });
  useEffect(() => {
    getData();
  }, [params.id]);

  const getData = async () => {
    const response = await fetch(`/api/installations/${params.id}`);
    const data = await response.json();
    setRecord(data);
  };
  console.log(record);
  console.log(formData);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    createInstallation();
  };

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const createInstallation = async () => {
    console.log("fecthing POST");
    fetch(`/api/installations/`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    });
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

  return (
    <Stack component="form" onSubmit={handleSubmit} noValidate spacing={3}>
      <TextField
        id="standard-basic"
        label="Name"
        name="customer_name"
        variant="standard"
        fullWidth={true}
        defaultValue=""
        value={Object.keys(params).length === 0 ? " " : record.customer_name}
        onChange={handleChange}
      />
      <TextField
        id="standard-basic"
        label="Address"
        name="address"
        variant="standard"
        fullWidth={true}
        value={record?.address}
        onChange={handleChange}
      />
      <TextField
        id="date"
        label="Appointment Date"
        name="appointment_date"
        type="date"
        value={record?.appointment_date}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />
      <Divider />

      <div style={styles.buttons}>
        <Button variant="contained" color="error">
          Cancel
        </Button>
        <Button type="submit" variant="contained" style={styles.saveButton}>
          Save
        </Button>
      </div>
    </Stack>
  );
};

export default Form;
