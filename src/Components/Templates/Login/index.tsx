import PageHeader from "../../Atoms/PageHeader";
import LoginForm from "../../Atoms/LoginForm";
import './style.scss';

const Login = () => {
    return (
        <section className="login">
            <PageHeader title={"Login"} />
            <p>This page is just for me, sorry guys! :)</p>
            <LoginForm />
        </section>
    )
}

export default Login