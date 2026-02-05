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

export default function LoginPage() {
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
              <form className="login-form">
                <div className="fields-group">
                  <TextField
                    label="Email"
                    fullWidth
                    className="field-texts"
                    variant="outlined"
                  />
                  <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    className="field-texts"
                    variant="outlined"
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
