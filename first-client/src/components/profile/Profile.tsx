import { FunctionComponent } from "react";
import useFetch from "../../hooks/useFetch";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const dataToken = localStorage.getItem("loggedUser");
  return <>{dataToken}test</>;
};

export default Profile;
