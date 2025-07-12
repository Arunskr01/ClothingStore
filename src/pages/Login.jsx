import { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');

  const handleOnSubmit = (event) => {
    event.preventDefault();
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
          <hr style={{ width: '30px', height: '2px', backgroundColor: '#333', border: 'none' }} />
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        {currentState === 'Sign Up' && (
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            required
          />
        )}

        <input
          type="email"
          className="form-control"
          placeholder="Email"
          required
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
        />

        <div className="d-flex justify-content-between text-muted small mt-n1">
          <span role="button" className="text-decoration-underline">
            Forgot your password?
          </span>

          <span
            role="button"
            onClick={() =>
              setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')
            }
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
