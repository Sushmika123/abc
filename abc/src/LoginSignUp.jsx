import React, { useState } from 'react';
import './LoginSignUp.css';
import Login from './Login';
import SignUp from './SignUp';

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-container">
      <div className="form-container">
        <div className="login-signup-content">
          {isLogin ? <Login toggleForm={toggleForm} /> : <SignUp toggleForm={toggleForm} />}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
