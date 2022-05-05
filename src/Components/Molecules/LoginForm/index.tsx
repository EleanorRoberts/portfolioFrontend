import './style.scss';

const LoginForm = () => {
    return (
        <section className="login">
            <form>
                <label>Username
                    <input type="username" />
                </label>
                <label>Password
                    <input type="password" />
                </label>
            </form>
        </section>
    )}

export default LoginForm
