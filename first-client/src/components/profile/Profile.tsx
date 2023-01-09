import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [data, setData] = useState({ username: "" });
  const navigate = useNavigate();
  useEffect(() => {
    let token = sessionStorage.getItem("tokenKey");

    if (!token) {
      console.log("no toekn");
      navigate("/signin");
    }
    let config = {
      headers: {
        "Content-type": "application/json",
        authorization: token,
      },
    };
    axios
      .get("http://localhost:5000/api/users/me", config)
      .then((res) => setData({ ...res.data }))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <section>
        <div className="container pt-5">
          <div className="row gap-lg-5">
            <div className="personal-info col-md-3">{data.username}</div>
            <div className="personal-info col-md-8">test</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
