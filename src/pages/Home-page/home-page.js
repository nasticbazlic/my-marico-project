import Button from '../../components/button/button';
import Step from './step/step';
import Conrtol from '../../components/Common/control/control';
import GetStarted from '../../components/Common/get-started/get-started';

import Smile from '../../assets/icons/Smile.svg';
import Happy from '../../assets/icons/Happy.svg';
import Party from '../../assets/icons/Party.svg';
import Player from '../../assets/images/Image-4.png';
import Collect from '../../assets/images/Collect.png';
import BlackPink from '../../assets/images/Image-5.png';
import Expert from '../../assets/images/Image.png';


import './home-page.css';



const HomePage = () => {
    const smiles = [
        {img: Smile, title:'Reduced Anxiety', info:'Never worry about losing your audience.'},
        {img: Happy, title:'Lower Workload', info:'Just share one link. We`ll handle the rest.'},
        {img: Party, title:'Reduced Anxiety', info:'Spend less time on marketing tools'}
    ];
    const step = [
            {
                step: 'STEP 1', 
                title: 'Connect Your Content',
                info:'Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online.',
                variation: 'common_second step1',
                variationclass: 'home-page-step1-content1',
                title_your: 'Your Homepage',
                title_info: 'Your Content',
                title_info2: 'All in',
                title_span: 'One Spot',
                circle1: 'Bring all of your content together into one homepage.',
                circle2: 'Your page automatically updates whenever you create.',
                img: Player
            }
    ]
    const step3 = [
        {
            step: 'STEP 3', 
            title: 'Send Emails & Text Messages',
            info:'No more going through a social platform. Reach and engageyour audience directly over email and text massage.',
            variation: 'common_second step1none',
            title_your: 'Create & Share',
            title_info: 'Reach Your',
            title_info2: 'Audience',
            title_span: 'Directly.',
            circle1: 'Embed content or create something new to share.',
            circle2: 'Share content over email, text message or your homepage.',
            img: BlackPink
        }
]
    return (
        <div className='home-page'>
            <div className='container home-page-first'>
                <h1 className='home-page-title'>Own your audience.</h1>
                <h2 className='home-page-subtitle'>So you don't lose them.</h2>
                <div className='home-page-first-info'>
                    <div className='home-page-first-info-text'>
                        Turn your audience into email and <br />
                        text message subscribers.
                    </div>
                    <div className='home-page-first-info-btn'>
                        <Button variation='common common_first'>
                            Get Started Now
                        </Button>
                        <Button variation="common_second" >
                            View A Demo
                        </Button>
                    </div>
                    <div className='home-page-first-info-start'>
                        <div className='home-page-first-info-start-circles'></div>
                        <div className='home-page-first-info-start-text'>
                            <span>1000+</span>creators have already started
                        </div>
                    </div>
                </div>
            </div>
            {/* /////second//// */}
            <div className='home-page-second'>
                <div className='home-page-second-title'>
                    Why Creators Love Marico
                </div>
                <div className='home-page-second-smile'>
                    {smiles.map(({img, title, info}) => {
                        return (
                            <div className='home-page-second-smile-item'>
                                <div className='home-page-second-smile-title'>
                                   <img src={img} alt='img' />
                                    {title}
                                </div>
                                <div className='home-page-second-smile-info'>
                                    {info}
                                </div>
                                
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            {/* ////////step1//// */}
                <Step step={step} />
            {/* ////////step2 ///// */}
            <div className='home-page-step1'>
                    <div className='home-page-step1-title'>
                        <div className='home-page-step1-title-step'>STEP 2</div>
                            <div className='home-page-step1-title-step-tit'>
                                Share Your Homepage
                        </div>
                        <div className='home-page-step1-title-step-subtit'>
                            Share your Wavium homepage link with your followers, and we`ll handle the rest.
                        </div>
                    </div>
                    <div className='home-page-step1-content'>
                        <div className='home-page-step1-content-images'>
                           {/* <div> <img src={One} /></div> */}
                            <div><img src={Collect} alt='Collect' /></div>
                        </div>
                    </div>
                    <Button variation='common common_get'>
                            Get Started 
                    </Button>
            </div>

            {/* ///////step 3///// */}
            <Step step={step3} />


            {/* ////////Experts Agree/// */}

            <div className='home-page-experts'>
                <div className='home-page-experts-title'>
                    Experts Agree
                </div>
                <img src={Expert} alt='Expert' />
            </div>

            {/* /////We've helped over 1,000 creato//// */}
            <Conrtol />

            {/* ///////get-started //// */}
            <GetStarted />
    </div>
    )
}

export default HomePage;