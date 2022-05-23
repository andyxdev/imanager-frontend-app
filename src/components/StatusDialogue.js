import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

export default function FormDialog({ opendialogue, recordid, handleClose }) {
  const [status, setStatus] = React.useState({
    status: "",
    notes: "",
    installation: "",
  });

  console.log(status);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Create called");
    createStatus();
  };

  const createStatus = async () => {
    const response = await fetch(`/api/status`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(status),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Create called");
  };

  const handleChange = (event) => {
    setStatus((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
        installation: recordid,
      };
    });
  };

  return (
    <div>
      <Dialog open={opendialogue} onClose={handleClose}>
        <DialogTitle>Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select installation Status.The Default status of Requested will be
            selected if no selection is made.
          </DialogContentText>

          <Stack component="form" noValidate spacing={3}>
            <Divider />
            <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
            <Divider />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="status"
              name="status"
              onChange={handleChange}
            >
              <MenuItem value="Requested">Requested</MenuItem>
              <MenuItem value="In progress">In progress</MenuItem>
              <MenuItem value="Complete">Complete</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
            </Select>
            <Divider />
            <TextField
              id="standard-multiline-static"
              label="Notes"
              name="notes"
              multiline
              rows={4}
              variant="standard"
              onChange={handleChange}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" onClick={handleSubmit}>
                save
              </Button>
            </DialogActions>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
}
