import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Signed in
      const user = userCredential.user;
      console.log(user);

      // Here, you can use the 'name' state to store the user's name in the database or wherever needed.
      console.log('Name:', name);

      navigate('/login');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <h4 className="LogIn-Name">Sign Up</h4>
            <form>
              <div className="LogIn-input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="LogIn-input">
                <label htmlFor="email-address">Email</label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div className="LogIn-input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              {error && <p style={{ color: 'red' }}>{error}</p>}

              <div className="LogIn-Button">
                <button type="submit" onClick={onSubmit}>
                  Sign up
                </button>
              </div>
            </form>

            <p className="text-sm  text-center">
              Already have an account?{' '}
              <NavLink to="/login">
                Log in
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
