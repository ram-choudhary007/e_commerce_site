import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Add this state variable to store the login error

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        const errorMessage = "Please create account";
        setError(errorMessage); // Set the error message state variable
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main>
        <section>
          <div>
            <h4 className='LogIn-Name'>Log In</h4>

            <form>
              <div className='LogIn-input'>
                <label htmlFor="email-address">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='LogIn-input'>
                <label htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className='LogIn-Button'>
                <button
                  onClick={onLogin}
                >
                  Login
                </button>
              </div>
            </form>

            {error && ( // Display the error message if there's an error
              <p className="text-sm text-center">
                {error}
              </p>
            )}

            <p className="text-sm text-center">
             To Create Account  {' '}
              <NavLink to="/signup">
                Click here
              </NavLink>
            </p>

          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
