import { useEffect } from "react";
import { useDocumentClick } from "../utils/hooks/useDocumentClick";

export function LoginForm() {

  useEffect(() => {
    const resizeEventHandler = (e) => {
      console.log('Window/ViewPort Resized!');
    }

    window.addEventListener('resize', resizeEventHandler);

    return () => {
      console.log('Unmounting LoginForm');
      console.log('Removing Resize Event Listener')
      window.removeEventListener('resize', resizeEventHandler);
    }
  }, []);

  useDocumentClick();

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      console.log(formData);
    }}>
      <label htmlFor="username">Username</label>
      <br/>
      <input id="username" name="username"/>
      <br/>
      <label htmlFor="password">Password</label>
      <br/>
      <input id="password" name="password" type="password"/>
      <br/>
      <button>Login</button>
    </form>
  );
}