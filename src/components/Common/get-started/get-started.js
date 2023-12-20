import Button from '../../button/button';

import './get-started.css';
import Logo from '../../../assets/icons/Logo.svg';

const GetStarted = () => {
    return (
        <div className='get-started'>
            <div className='get-started-logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='get-started-title'>
                Get Started Now
            </div>
            <div className='get-started-subtitle'>
                Setup is easy and takes under 5 minutes.
            </div>
            <Button variation= "common common_get-started">
                Get Started Now
            </Button>
            <div className='control-start'>
                <div className='control-start-circles'></div>
                <div className='control-start-text'>
                    <span>1000+</span>creators have already started
                </div>
            </div>
        </div>
    )
}
export default GetStarted;