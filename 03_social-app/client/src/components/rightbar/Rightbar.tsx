import "./rightbar.css";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar__container">
        <div className="birthday__inner">
          <img className="birthday__image" src="assets/gift.png" alt="" />
          <span className="birthday__text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbar__ad" src="assets/ad.png" alt="" />
        <h4 className="rightbar__title">Online Friends</h4>
        <ul className="rightbar__friendList">
          <Online/>
        </ul>
      </div>
    </div>
  );
}
