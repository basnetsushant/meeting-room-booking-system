import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const PasswordInput = ({
  password,
  handlePassword,
  error,
  helperText,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      label="Password"
      value={password}
      onChange={handlePassword}
      fullWidth
      className={className}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
