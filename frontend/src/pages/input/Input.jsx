import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { React, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from '@mui/material/Switch';
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function Input() {
  const [registrationsType, setRegistrationsType] = useState("");
  const [workshopsType, setworkshopsType] = useState("");

  const registrationType = (event) => {
    setRegistrationsType(event.target.value);
  };

  const workshops = (event) => {
    setworkshopsType(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mt: 10 },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="p-10">
        <div className="d-flex flex-row justify-content-center align-items-center mb-3">
          <div className="p-2">
            <TextField
              id="filled-search"
              label="Full Name"
              type="name"
              variant="filled"
              required
            />
          </div>
          <div className="p-2">
            <TextField
              id="filled-search"
              label="e-mail"
              type="email"
              variant="filled"
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="p-2">
            <FormControl variant="standard" sx={{ m: 10, width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Registration Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={registrationsType}
                onChange={registrationType}
                label="registrationsType"
              >
                <MenuItem value={"Attendee"}>Attendee</MenuItem>
                <MenuItem value={"Speaker"}>Speaker</MenuItem>
                <MenuItem value={"Sponsor"}>Sponsor</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="p-2">
            <FormControl variant="standard" sx={{ m: 10, width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Workshop Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={workshopsType}
                onChange={workshops}
                label="workshopsType"
              >
                <MenuItem value={"A-JavaScript"}>
                  1: Advanced JavaScript
                </MenuItem>
                <MenuItem value={"Accessibility"}>
                  2: Web Accessibility
                </MenuItem>
                <MenuItem value={"Future"}> 3: Future of Web Design</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="p-2">
            <FormGroup sx={{ m: 10 }}>
              <FormControlLabel
                required
                control={<Switch />}
                label="updates about the conference"
              />
            </FormGroup>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center mb-3">
          <div className="p-2">
            <Stack direction="row" spacing={2}>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </Box>
  );
}
