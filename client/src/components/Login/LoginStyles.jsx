import { makeStyles } from "@mui/styles";
import { fontFamily } from "@mui/system";
import styled from "styled-components";

export const useStyle = makeStyles({
  loginContainer: {
    display: "flex",
    background: "black",
    alignItems: "center",
  },
  loginCard: {
    width: "35%",
    height: "100vh",
    borderRadius: " 0 1rem 1rem 0!important",
    padding: " 0.5rem 1.5rem",
    transition: "all 2s"
  },
  signupCard: {
    width: "35%",
    height: "100vh",
    borderRadius: " 1rem  0 0 1rem !important",
    padding: " 0.5rem 1.5rem",
    transition: "all 2s"
  },
  imageContainer: {
    width: "55%",
    margin: "auto",
    // border: "1px solid green",
  },
  inputWrapper: {
    // border: "1px solid black",
    marginTop: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signupInputWrapper:{
    marginTop: "15%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputFieldWrapper: {
    marginTop: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  loginHeading: {
    fontFamily: "Teko",
    fontWeight: 700,
    color: "inherit",
    textDecoration: "none",
    fontSize: "3rem",
  },
  inputField: {
    width: "90%",
    marginBottom: "5%!important",
    borderRadius: "15px!important",
  },
  loginText: {
    fontSize: "2rem",
    fontFamily: "Poppins",
    fontWeight: 900,
    textAlign: "center",
    fontStretch: "ultra-expanded",
    letterSpacing: "2px",
  },
  button: {
    background: "black!important",
    color: "white!important",
    width:"15rem",
  },
  infoText:{
    marginTop:"10%",
    fontFamily:"Poppins",
    fontSize:"1.25rem"
  },
  loginInfoText:{
    fontWeight:600,
    fontFamily:"Poppins",
    fontSize:"1.25rem",
    cursor:"pointer"
  }
});

export const Text = styled.p``;
