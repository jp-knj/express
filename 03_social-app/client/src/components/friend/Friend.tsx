import React from 'react';
import "./friend.css";
interface UserProps {
  id: number;
  profilePicture: string;
  username: string;
}

const Friend: React.FC<UserProps> = (user) => {
  return (
    <li className="friend">
      <img className="friend__image" src={user.profilePicture} alt="" />
      <span className="friend__name">{user.username}</span>
    </li>
  );
}

export default Friend;
