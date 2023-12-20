
import Button from '../../button/button';
import Facebook from '../../../assets/icons/Shape-11.svg';
import  Google  from '../../../assets/icons/G_logo.svg';
import  Apple  from '../../../assets/icons/Shape-14.svg';
import './social.css';

const Social = ({children}) => {
    return (
        <div className='social'>
            <div className='social_title'>
                Or
            </div>
            <div className="social_subtitle">
                {children} with...
            </div>
            <div className='social_btn'>
                <Button variation='social_button'>
                    <img src={Facebook} alt='Facebook' /> Log in with Facebook
                </Button>
                <Button variation='social_button'>
                    <img src={Google} alt='Google' /> Log in with Google
                </Button>
                <Button variation='social_button'>
                <img src={Apple} alt='Apple' /> Log in with Apple
                </Button>
            </div>
        </div>
    )
}
export default Social;