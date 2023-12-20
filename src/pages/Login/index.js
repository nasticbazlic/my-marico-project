import Social from '../../components/Common/social/social';
import LoginForm from '../../components/form/Login';

import './Login.css';

const Login = () => {
    return (
        <div className='loginSign'>
            <div className='loginSign_title'>
                Log in
            </div>
            <div className='loginSign_subtitle'>
                Login into existing account.
            </div>

            <LoginForm />
            <Social>
                Log in 
            </Social>
        </div>
    )
}

export default Login;