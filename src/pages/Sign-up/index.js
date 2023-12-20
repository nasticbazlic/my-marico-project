
import Social from '../../components/Common/social/social';
import SignUpForm from '../../components/form/Sign-up';
import './Sign-up.css'

const SignUp = () => {
    return (
        <div className='sign-up'>
             <div className='sign-up_title'>
                Sign up
            </div>
            <div className='sign-up_subtitle'>
                Fill all field for create an account.
            </div>
            <SignUpForm />
            <Social>
                Sign up
            </Social>
        </div>
    )
}

export default SignUp;