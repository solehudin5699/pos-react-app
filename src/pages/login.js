import React from "react";
import classes from './login.module.css'

class Login extends React.Component {

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.boxlogin}>
          <div className={classes.header}>
            <h6>Login</h6>
          </div>
          <form className={classes.header}>
            <input className={classes.input} type="text"/>
            <input className={classes.input} type="text"/>
            <button className={classes.button} type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
