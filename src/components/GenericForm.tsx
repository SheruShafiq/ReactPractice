import { Box, Button, TextField } from "@mui/material";
import React, { useEffect } from "react";

const App = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [verified, setVerified] = React.useState(false);

  const verify = () => {
    if (email.includes("@") && password.length > 8) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  useEffect(() => {
    verify();
  }, [email, password]);

  const onSubmit = () => {
    console.log(email, password);
  };
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} maxWidth={"40%"}>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="user-email"
          label="Email"
          variant="standard"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="user-password"
          label="Password"
          variant="standard"
        />
        <Button
          onClick={() => onSubmit()}
          sx={{
            mt: "1rem",
          }}
          variant="contained"
          disabled={!verified}
        >
          Login
        </Button>
      </Box>
    </>
  );
};

export default App;
