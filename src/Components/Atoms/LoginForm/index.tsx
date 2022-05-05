import './style.scss';

const LoginForm = () => {
    return (
      <form className="loginForm">
          <label>Username
              <input type="string" />
          </label>
          <label>Password
              <input type="string" />
          </label>
          <button id="loginButton" type="submit" >Login</button>
      </form>
    );
}

export default LoginForm
