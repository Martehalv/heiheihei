export default function Login() {
  return (
    <section>
      <h1>Login</h1>
      <form>
        <label>
          Username
          <input type="text" placeholder="Jhonny..." />
        </label>
        <label>
          Password
          <input type="password" placeholder="*" />
        </label>
        <button>Login</button>
      </form>
    </section>
  );
}
