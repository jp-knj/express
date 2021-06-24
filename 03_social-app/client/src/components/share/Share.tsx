import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

const Share = () => {
  return (
    <div className="share">
      <div className="share__container">
        <div className="share__header">
          <img className="share__image" src="/assets/person/1.jpeg" alt=""/>
          <input
            placeholder="What's in your mind Safak?"
            className="share__input"
          />
        </div>
        <hr className="share__border" />
        <div className="share__body">
          <div className="share__options">
            <div className="share__option">
              <PermMedia htmlColor="tomato" className="share__icon"/>
              <span className="share__text">Photo or Video</span>
            </div>
            <div className="share__option">
                <Label htmlColor="blue" className="share__icon"/>
                <span className="share__text">Tag</span>
            </div>
            <div className="share__option">
                <Room htmlColor="green" className="share__icon"/>
                <span className="share__text">Location</span>
            </div>
            <div className="share__option">
                <EmojiEmotions htmlColor="goldenrod" className="share__icon"/>
                <span className="share__text">Feelings</span>
            </div>
          </div>
          <button className="share__button">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
