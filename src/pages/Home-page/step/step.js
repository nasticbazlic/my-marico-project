import Button from '../../../components/button/button';

import './step.css';

const Step = ({step}) => {
    return (
        <div className='home-page-step-items'>
        {step.map(({step, title, info, variation, title_your, title_info, title_info2, title_span, circle1, circle2, img}) => {
            return (
                <div className='home-page-step1'>
                    <div className='home-page-step1-title'>
                        <div className='home-page-step1-title-step'>{step}</div>
                            <div className='home-page-step1-title-step-tit'>
                                {title}
                        </div>
                        <div className='home-page-step1-title-step-subtit'>
                            {info}
                        </div>
                        <Button variation={variation}>
                            View Avaliable Sources
                        </Button>
                    </div>
                    <div className='home-page-step1-content'>
                        <div className='home-page-step1-content-info'>
                            <div className='home-page-step1-content-info-your'>
                                {title_your}
                            </div>
                            <div className='home-page-step1-content-info-title'>
                                {title_info}<br />
                                {title_info2} <span>{title_span}</span>
                            </div>
                            <div className='home-page-step1-content-info-list'>
                                <div className='home-page-step1-content-info-item'>
                                    <div className='circle'>1</div>{circle1}
                                </div>
                                <div className='home-page-step1-content-info-item'>
                                    <div className='circle'>2</div>{circle2}
                                </div>
                            </div>
                            <div className='home-page-step1-content-info-btn'>
                                <Button variation='step2_info'>
                                    Get Started Now
                                </Button>
                                <Button variation="step1_info">
                                    View A Demo
                                </Button>
                                </div>
                            </div>
                            <div className='home-page-step1-content-img'>
                                <img src={img} alt='img_step' />
                            </div>
                        </div>
                    </div>
            )
        })
    }
    </div>

    )
}

export default Step;