
export function LoginForm() {
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