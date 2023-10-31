import React from 'react';
import { useState } from 'react';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`password: ${password}`);
  }
  function passLength() {
    return password.length === 0
      ? 'A password is required'
      : password.length < 7
      ? 'Password too short'
      : '';
  }
  const validPass = password.length < 7 ? '❌' : '✅';

  return (
    <>
      <div className="password">
        <h3 style={{ display: 'flex', marginLeft: '0.5rem' }}>Password</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              style={{
                backgroundColor: 'white',
                color: 'black',
                marginRight: '1rem',
              }}
              name="password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}></input>
            {validPass}
          </label>
          <p>{passLength()}</p>
        </form>
      </div>
    </>
  );
}
