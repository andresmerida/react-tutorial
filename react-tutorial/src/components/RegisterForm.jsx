import { useState } from "react";

export function RegisterForm() {
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
    displayName: '',
  });

  return (
    <form>
      <div>
        <label htmlFor="username">Username: </label>
        <input id="username" name="username" value={formFields.username} 
            onChange={(event) => {
              setFormFields((currentState) => ({
                ...currentState,
                username: event.target.value,
              }));
            }} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" value={formFields.password} 
            onChange={(event) => {
              setFormFields((currentState) => ({
                ...currentState,
                password: event.target.value,
              }));
            }}
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name: </label>
        <input id="displayName" name="displayName" value={formFields.displayName} 
            onChange={(event) => {
              setFormFields((currentState) => ({
                ...currentState,
                displayName: event.target.value,
              }));
            }}
        />
      </div>
      <div>{formFields.username}</div>
      <div>{formFields.password}</div>
      <div>{formFields.displayName}</div>
    </form>
  );
}
