import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar__container">
      <div className="topbar__prepend">
        <span className="logo">Hello</span>
      </div>
      <div className="topbar__body">
        <div className="searchbar">
          <Search className="searchbar__icon"/>
          <input placeholder="Search for" className="search__input"/>
        </div>
      </div>
      <div className="topbar__append">
        <div className="topbar__links">
          <span className="topbar__link">Home</span>
          <span className="topbar__link">Timeline</span>
        </div>
        <div className="topbar__icons">
          <div className="topbar__item">
            <Person />
            <span className="topbar__badge">1</span>
          </div>
          <div className="topbar__item">
            <Chat />
            <span className="topbar__badge">2</span>
          </div>
          <div className="topbar__item">
            <Notifications />
            <span className="topbar__badge">3</span>
          </div>
        </div>
      </div>
    </div>
  )
}
