import React from 'react';
import { useState } from 'react';

export function ControlledForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('state:', { userName, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}></input>
      </label>
      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
