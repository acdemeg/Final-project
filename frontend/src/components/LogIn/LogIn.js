import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOG_IN, SHOW_ALERT } from '../../store/actions';
import { scenesEnum, messages } from '../../constants';
import ShowNotification from '../ShowNotification';
import './css/main.css';
import './css/util.css';

function LogIn({ isLoggedIn, onLogin, notifications }) {
  return (
    <Fragment>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-form validate-form">
              <span className="login100-form-title p-b-26">Welcome</span>
              <span className="login100-form-title p-b-48">
                <i className="zmdi zmdi-font"></i>
              </span>

              <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                <input className="input100" type="text" name="email" />
                <span className="focus-input100" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Enter password">
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye"></i>
                </span>
                <input className="input100" type="password" name="pass" autoComplete="on" />
                <span className="focus-input100" data-placeholder="Password"></span>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button type="submit" className="login100-form-btn" onClick={onLogin}>
                    Login
                  </button>
                </div>
              </div>

              <div className="text-center p-t-115">
                <span className="txt1">Don’t have an account?</span>

                <NavLink className="txt1" to="#">
                  &nbsp;Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShowNotification notifications={notifications} currentScene={scenesEnum.LOG_IN} />

      <div id="dropDownSelect1"></div>
    </Fragment>
  );
}

const mapStateToProps = ({ authorization: { isLoggedIn }, notifications }) => {
  return { isLoggedIn, notifications };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => {
      dispatch(LOG_IN());
      dispatch(SHOW_ALERT(scenesEnum.LOG_IN, messages.LOG_IN));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogIn);