import {
  Card,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import "../scss/LoginPage.scss";
import PasswordInput from "./PasswordInput";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!email || !password) {
    //   alert("Please fill in all fields");
    //   return;
    // }

    // console.log({ email, password });
  };

  return (
    <div className="login-page">
      <Card className="login-card">
        <div className="login-layout">
          <div className="login-content">
            <div className="login-left">
              <img
                src="https://swifttech.com.np/wp-content/uploads/2025/04/swift-logo.svg"
                alt="Swift Logo"
              />

              <Typography className="login-text">
                Use your Outlook Account
              </Typography>
            </div>

            <div className="login-right">
              <form
                className="login-form"
                onSubmit={handleSubmit}
              >
                <div className="fields-group">
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    className="field-texts"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <PasswordInput
                    password={password}
                    handlePassword={(e) => setPassword(e.target.value)}
                    className="field-texts"
                  />
                </div>

                <div className="options-group">
                  <Link
                    href="#"
                    underline="hover"
                  >
                    Forgot password?
                  </Link>

                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                  />
                </div>

                <div className="button-group">
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                  >
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
