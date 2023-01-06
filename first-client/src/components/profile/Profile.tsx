import { FunctionComponent } from "react";
import useFetch from "../../hooks/useFetch";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const data = useFetch("http://localhost:5000/api/users/me");
  return <>{data}test</>;
};

export default Profile;
