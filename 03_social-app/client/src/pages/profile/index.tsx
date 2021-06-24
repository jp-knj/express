import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed";
import Rightbar from "../../components/rightbar";

interface UserProps {
  profilePicture?: string,
  coverPicture?: string,
  followers?: Array<string>,
  followings?: Array<string>,
  isAdmin?: boolean,
  _id?: string,
  city?: string,
  username: string,
  email?: string,
  createdAt?: string,
  desc?: string
}

const Profile:React.FC = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER as string;
  const params = useParams();
  console.log(params);
  const initialUserState = {
    username: "",
    profilePicture: "person/noAvatar.png"
  };
  const [user, setUser] = useState<UserProps>(initialUserState);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=knj00`);
      setUser(res.data);
    };
    fetchUser();
  }, []);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile__sidebar">
          <div className="profile__header">
            {}
            <div className="profile__cover">
              <img src={user.coverPicture || PF+"person/noCover.png"} alt="/assets/post/3.jpeg" className="profile__cover-image" />
              <img src={PF+user.profilePicture || PF+"person/noCover.png"} alt="/assets/person/3.jpeg" className="profile__profile-image" />
            </div>
            <div className="profile__info">
              <h4 className="profile__username">{user.username}</h4>
              <span className="profile__desc">{user.desc}</span>
            </div>
          </div>
          <div className="profile__body">
          <Feed username="knj00"/>
          <Rightbar {...user}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
