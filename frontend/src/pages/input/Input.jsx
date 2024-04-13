import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input(){




    return(
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
      
        <div>
        <TextField
            id="filled-search"
            label="Full Name"
            type="text"
            variant="filled"
          />
          <TextField
            id="filled-search"
            label="Full Name"
            type="text"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
        <TextField
            id="filled-search"
            label="Full Name"
            type="text"
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        
         
        </div>
     
      </Box>



    )
}