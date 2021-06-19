import "./online.css";

interface UserProps {
  id: number;
  profilePicture: string;
  username: string;
}

const Online: React.FC<UserProps> = (user) => {
  return (
    <li className="rightbar__friend">
      <div className="friend">
        <img className="friend__image" src={user.profilePicture} alt=""/>
        <span className="friend__online"></span>
      </div>
      <span className="friend__username">{user.username}</span>
    </li>
  );
}
export default Online;
