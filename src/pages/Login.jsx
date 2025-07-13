import { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (currentState === 'Sign Up') {
      // Check if email already exists
      const userExists = users.find((user) => user.email === email);
      if (userExists) {
        setError('Account already exists with this email.');
        return;
      }

      // Save new user
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      setSuccess('Account created successfully! You can now login.');
      setCurrentState('Login');
    } else {
      // Login
      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (matchedUser) {
        setSuccess(`Welcome back, ${matchedUser.name || 'User'}!`);
      } else {
        setError('Invalid email or password.');
      }
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="container mt-5"
      style={{ maxWidth: '400px' }}
    >
      <div className="text-center mt-4 mb-3">
        <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
          <h3 className="mb-0">{currentState}</h3>
          <hr
            style={{
              width: '30px',
              height: '2px',
              backgroundColor: '#333',
              border: 'none',
            }}
          />
        </div>
      </div>

      {error && <div className="alert alert-danger p-2">{error}</div>}
      {success && <div className="alert alert-success p-2">{success}</div>}

      <div className="d-flex flex-column gap-3">
        {currentState === 'Sign Up' && (
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          className="form-control"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="d-flex justify-content-between text-muted small mt-n1">
          <span role="button" className="text-decoration-underline">
            Forgot your password?
          </span>

          <span
            role="button"
            onClick={() => {
              setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login');
              setError('');
              setSuccess('');
            }}
            className="text-decoration-underline"
          >
            {currentState === 'Login' ? 'Create Account' : 'Login Here'}
          </span>
        </div>

        <button type="submit" className="btn btn-success w-50 mx-auto mt-3">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </form>
  );
};

export default Login;
