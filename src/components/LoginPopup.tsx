import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";

interface Props {
  open: boolean;
  onLogin: (details: {}) => void;
  onClose?: () => void;
}

export const LoginPopup = ({ open, onLogin, onClose }: any) => {
  const auth = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("handleLogin: ", username);

    auth.login(username, password);
    // onLogin({ username, password });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        <label>Username</label>
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Modal>
  );
};
