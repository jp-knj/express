import "./topbar.css"
import { Search, Person } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar__container">
      <div className="topbar__prepend">
        <span className="logo">Hello</span>
      </div>
      <div className="topbar__body">
        <div className="searchbar">
          <Search />
          <input placeholder="Search for" className="search__input"/>
        </div>
      </div>
      <div className="topbar__append">
        <div className="topbar__links">
          <span className="topbar__link">Home Page</span>
          <span className="topbar__link">Timeline</span>
        </div>
        <div className="topbar__icons">
          <div className="topbar__item">
            <Person />
            <span className="topbar__badge">1</span>
          </div>
        </div>
      </div>
    </div>
  )
}
