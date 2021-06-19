import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../Data";


interface ProfileProps {
  profile?: React.ReactNode
}

const Rightbar: React.FC<ProfileProps>= (profile) => {
  const BirthAndFriend = () => {
    return (
      <>
        <div className="birthday__inner">
          <img className="birthday__image" src="assets/gift.png" alt="" />
          <span className="birthday__text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbar__ad" src="assets/ad.png" alt="" />
        <h4 className="rightbar__title">Online Friends</h4>
        <ul className="rightbar__friendList">
          {
            Users.map(u => (
              <Online key={u.id} {...u} />
            ))
          }
        </ul>
      </>
    );
  };

  const ProfileBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="rightbar">
      <div className="rightbar__container">
        { profile ? <ProfileBar/> : <BirthAndFriend/>}
      </div>
    </div>
  );
}

export default Rightbar;
