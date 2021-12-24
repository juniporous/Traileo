import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp, login } from '../../store/session';
import './auth.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const validate = () => {
    const validateErrors = [];

    if (!email || !email.toLocaleLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) validateErrors.push("Please enter a valid e-mail");
    if (!username) validateErrors.push('Please enter a valid username')
    if (!password) validateErrors.push("Please enter a valid password");
    if (password !== repeatPassword) validateErrors.push("Password and Confirm Password must match");
    return validateErrors;
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    dispatch(login("demo@aa.io", "password"));
  }

  const onSignUp = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className='signUpForm' onSubmit={onSignUp}>
      <div className="signUpContent">
        {validationErrors.length > 0 && (
          <div className="validationErrors">
            The following errors were found:
            <ul>
              {validationErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        </div>
      <div>
          <div className='signup-field'>
            <label className='label'>User Name</label>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              placeholder='  What should we call you?'
            ></input>
          </div>
          <div className='signup-field'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              placeholder="  What's your email?"
            ></input>
          </div>
          <div className='signup-field'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              placeholder='  Choose a password.'
            ></input>
          </div>
          <div className='signup-field'>
            <label>Repeat Password</label>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder='  Write your password again.'
            ></input>
          </div>
      </div>
      <button type='submit' className="signUpContent-btn">Sign Up</button>
      <button onClick={demoLogin} type="submit" className="signUpContent-btn">
        Demo User
      </button>
      
    </form>
  );
};

export default SignUpForm;
