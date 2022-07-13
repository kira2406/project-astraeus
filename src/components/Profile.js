import { Container } from "@mui/system";
import React from "react";
import "./profile.css"
import Landing from "./Landing/Landing";
import About from "./About/About";

const Profile = () => {
  return (
    <Container class="profile-container" maxWidth="xl">
      <Landing />
      <About />
    </Container>
  )
}

export default Profile