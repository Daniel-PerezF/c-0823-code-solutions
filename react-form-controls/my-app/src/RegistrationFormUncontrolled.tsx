import React from 'react';

export function UncontrolledForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(form.entries());

    console.log(formObj);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username"></input>
      </label>
      <label>
        Password:
        <input name="password" type="password"></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
