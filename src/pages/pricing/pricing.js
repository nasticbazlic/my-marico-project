
import Button from '../../components/button/button';
import GetStarted from '../../components/Common/get-started/get-started';
import './pricing.css';

const Pricing = () => {
    const price = [
        {title: 'Starer', info: 'Perfect for tying out Wavium', price: 'Free', value: '500',
        infoValue: 'Upgrade to send more emails', subTitle: 'Key features', first: 'Automatic updating home page',
        second: 'Unlimited sources + posts', btn: 'Start For Free'},
        {title: 'Basic', info: 'Build your online home', price: '$14',common:'Per month', common1: 'or $19/mo, billed monthly', value: '2,000 free',
        infoValue: 'Purchase more for $0.002 per email', subTitle: 'Everything in starter, plus', first: 'Remove Wavium branding',
        second: 'Embed Wavium on your own domain', btn: 'Start Free 14-day Trial'},
        {title: 'Complete', info: 'Enhanced engagement', price: '$29',common:'Per month', common1: 'or $34/mo, billed monthly', value: '10,000 free',
        infoValue: 'Purchase more for $0.002 per email', subTitle: 'Everything in starter, plus', first: 'Collect text massage subscribers',
        second: 'Share posts over text massage', btn: 'Start Free 14-day Trial'}
    ]
    return (
        <div className='pricing'>
            <div className='pricing-title'>
                Choose the plan that's right for you.
            </div>
                <div className='pricing-list container'>
                    {price.map(({title, info, price, value, infoValue, subTitle, first, second, btn, common1, common}) => {
                        return (
                            <div className='pricing-item'>
                                <div className='pricing-item-title'>{title}</div>
                                <div className='pricing-item-info'>{info}</div>
                                <div className='pricing-item-price'>{price}
                                    <div className='pricing-item-price-smal'> {common}{common1}</div>
                                </div>
                                <div className='pricing-item-value'>
                                    <div className='pricing-item-value-title'>
                                        Collect Unlimited subscribers
                                    </div>
                                    <div className='pricing-item-value-price'>
                                        {value} monthl emails
                                    </div>
                                </div>
                                <div className='pricing-item-infovalue'> {infoValue} </div>
                                <div className='pricing-item-subtitle-list'>
                                    <div className='pricing-item-subtitle-list-title'>
                                        {subTitle}
                                    </div>
                                    <div className='pricing-item-subtitle-list-item'> &#10004; {first} </div>
                                    <div className='pricing-item-subtitle-list-item'> &#10004; {second} </div>
                                </div>
                                <Button variation='common_second price'>
                                    {btn}
                                </Button>
                             </div>
                        )
                        
                        
                    })}
                </div>
                <GetStarted />

        </div>
    )
}

export default Pricing;