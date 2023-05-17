import { Button, Card, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { useStyle, Text } from "./LoginStyles";
import Blogger from "../../assets/blogger.webp";
const Login = () => {
  const classes = useStyle();
  const handleSingup = async (username, email, password) => {
    const data = {
      username,
      email,
      password,
    };
    const request = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    console.log(response);
    //  duplicate // 11000;
  };
  const loginUsernameRef = useRef(null);
  const loginPassRef = useRef(null);
  const signupUsernameRef = useRef(null);
  const signupPassRef = useRef(null);
  const signupEmailref = useRef(null);
  const [toggleSignup, setToggleSignup] = useState(false);
  return (
    <>
      <Box className={classes.loginContainer}>
        <Card
          className={classes.loginCard}
          style={{ display: toggleSignup ? "none" : "block" }}
        >
          <Text className={classes.loginHeading}>Nerd Talks</Text>
          <Box className={classes.inputWrapper}>
            <Text className={classes.loginText}>Create an account</Text>
            <Box className={classes.inputFieldWrapper}>
              <TextField
                label="Username"
                className={classes.inputField}
                inputRef={signupUsernameRef}
              />
              <TextField
                label="Email"
                className={classes.inputField}
                inputRef={signupEmailref}
              />
              <TextField
                label="Password"
                className={classes.inputField}
                inputRef={signupPassRef}
              />
            </Box>
            <Box textAlign={"center"} mt={3}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={(e) => {
                  handleSingup(
                    signupUsernameRef.current.value,
                    signupEmailref.current.value,
                    signupPassRef.current.value
                  );
                }}
              >
                Sign up
              </Button>
              <Text className={classes.infoText}>Already have an account?</Text>
              <Text
                className={classes.loginInfoText}
                onClick={() => {
                  setToggleSignup(!toggleSignup);
                }}
              >
                Login
              </Text>
            </Box>
          </Box>
        </Card>
        <Box
          className={classes.imageContainer}
          component={"img"}
          src={Blogger}
        />
        <Card
          className={classes.signupCard}
          style={{ display: toggleSignup ? "block" : "none" }}
        >
          <Text className={classes.loginHeading}>Nerd Talks</Text>
          <Box className={classes.signupInputWrapper}>
            <Text className={classes.loginText}>Login to your account</Text>
            <Box className={classes.inputFieldWrapper}>
              <TextField
                label="Email"
                className={classes.inputField}
                inputRef={loginUsernameRef}
              />
              <TextField
                label="Password"
                className={classes.inputField}
                inputRef={loginPassRef}
              />
            </Box>
            <Box textAlign={"center"} mt={3}>
              <Button variant="contained" className={classes.button}>
                Login
              </Button>
              <Text className={classes.infoText}>Don't have an account?</Text>
              <Text
                className={classes.loginInfoText}
                onClick={() => {
                  setToggleSignup(!toggleSignup);
                }}
              >
                Signup
              </Text>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Login;
