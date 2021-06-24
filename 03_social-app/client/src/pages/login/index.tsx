import "./login.css";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="login__container">
          <div className="login__prepend">
            <h3 className="login__logo">Lamasocial</h3>
            <span className="login__desc">Connect with friends and the world around you on Lamasocial.</span>
          </div>
          <div className="login__append">
            <div className="login__box">
              <input placeholder="Email" className="login__input" />
              <input placeholder="Password" className="login__input" />
              <button className="login__button">Log In</button>
              <span className="login__forgot">Forgot Password?</span>
              <button className="login__register-button">
                Create a New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
