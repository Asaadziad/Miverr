import { FunctionComponent } from "react";
import Navbar from "../navbar/Navbar";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  return (
    <>
      <Navbar />
      Profile goes here
    </>
  );
};

export default Profile;
