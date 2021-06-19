import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile__sidebar">
          <div className="profile__header">
            <div className="profile__cover">
              <img src="/assets/post/3.jpeg" alt="/assets/post/3.jpeg" className="profile__cover-image" />
              <img src="/assets/person/7.jpeg" alt="/assets/person/3.jpeg" className="profile__profile-image" />
            </div>
            <div className="profile__info">
              <h4 className="profile__username">Kenji Tomita</h4>
              <span className="profile__desc"></span>
            </div>
          </div>
          <div className="profile__body">
          <Feed />
          <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
