import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <RssFeed className="sidebar__prepend"/>
            <span className="sidebar__label">Feed</span>
          </li>
          <li className="sidebar__item">
            <Chat className="sidebar__prepend"/>
            <span className="sidebar__label">Chats</span>
          </li>
          <li className="sidebar__item">
            <PlayCircleFilledOutlined className="sidebar__prepend"/>
            <span className="sidebar__label">Videos</span>
          </li>
          <li className="sidebar__item">
            <Group className="sidebar__prepend"/>
            <span className="sidebar__label">Groups</span>
          </li>
          <li className="sidebar__item">
            <Bookmark className="sidebar__prepend"/>
            <span className="sidebar__label">Bookmarks</span>
          </li>
          <li className="sidebar__item">
            <HelpOutline className="sidebar__prepend"/>
            <span className="sidebar__label">Questions</span>
          </li>
          <li className="sidebar__item">
            <WorkOutline className="sidebar__prepend"/>
            <span className="sidebar__label">Jobs</span>
          </li>
          <li className="sidebar__item">
            <Event className="sidebar__prepend"/>
            <span className="sidebar__label">Events</span>
          </li>
          <li className="sidebar__item">
            <School className="sidebar__prepend"/>
            <span className="sidebar__label">Courses</span>
          </li>
        </ul>
        <button className="sidebar__button">Show More</button>
        <hr className="sidebar__border" />
        <ul className="friend__list">
          <li className="friend__item">
            <img className="friend__image" src="" alt=""/>
            <span className="friend__name" >Kenji Tomita</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;