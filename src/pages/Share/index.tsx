import { GlobalContext } from '@/layout/AppMain/context'
import SwitchAnimate from '@components/SwitchAnimate'
import { infoConfig } from '@/pages/About/config'
import { useState, useContext } from 'react'
import right from '@images/right.png'
import './index.less'

export const Share = () => {
    const [animate, setAnimate] = useState(true)
    return (
        <div className='ethan-share'>
            <Item />
            <div className='ethan-share-more cursor-p' onClick={() => { window.open(infoConfig.git) }}>
                <img src={right} alt='' />
                <span>VIEW MORE</span>
            </div>
            {
                animate ?
                    <SwitchAnimate type='enter' callback={n => { setAnimate(n) }} />
                    :
                    null
            }
        </div>
    )
}


const Item = () => {
    const context: any = useContext(GlobalContext);

    return (
        <div className='ethan-share-list'>
            <div className='ethan-share-title'>Desgin</div>
            <div className='ethan-share-items'>
                <div onClick={()=>{}} className='cursor-p'>
                    <div className='weather-icon'>
                        {context.weather}
                    </div>
                    <span>天气</span>
                </div>
            </div>
        </div>
    )
}

export default Share;