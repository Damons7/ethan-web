import { GlobalContext } from '@/layout/AppMain/context'
import SwitchAnimate from '@components/SwitchAnimate'
import { infoConfig } from '@/pages/About/config'
import WeatherModal from '@components/Modal/weatherModal'
import { useState, useContext, useReducer } from 'react'
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

    // 初始化state
    const initState = {
        weatherVisible: false,
    }
    // 功能reducer
    const itemReducer
        : (state: any, action: { type?: string}) => any
        = (state, action) => {
            switch (action.type) {

                // 天气modal功能   
                case 'showWeather':
                    return {
                        ...state,
                        weatherVisible: true
                    }

                // 默认返回initState初始化
                case 'init':
                    return {
                        ...initState,
                    };
                default:
                    return state;
            }
        }

    const [state, dispatch] = useReducer(itemReducer, initState);

    const context: any = useContext(GlobalContext);

    return (
        <div className='ethan-share-list'>
            <div className='ethan-share-title'>Desgin</div>
            <div className='ethan-share-items'>
                <div onClick={() => { dispatch({ type: 'showWeather' }) }} className='cursor-p'>
                    <div className='weather-icon'>
                        {context.weather}
                    </div>
                    <span>天气</span>
                </div>
            </div>

            <WeatherModal
                visible={state.weatherVisible}
                onOk={() => { dispatch({ type: 'init' }) }}
                onCancel={() => dispatch({ type: 'init' })}
            />
        </div>
    )
}

export default Share;