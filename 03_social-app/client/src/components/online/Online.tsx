import "./online.css";

const Online = () => {
  return (
    <li className="rightbar__friend">
      <div className="friend">
        <img className="friend__image" src="/assets/person/1.jpeg" alt=""/>
        <span className="friend__online"></span>
      </div>
      <span className="friend__username">Kenji Tomita</span>
    </li>
  );
}
export default Online;
