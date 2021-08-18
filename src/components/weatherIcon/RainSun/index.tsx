import Sun from '../Sun'
import Rain from '../Rain'
import './index.less'

interface IRainSun {
    scale?: string
}
export const RainSun = (props: IRainSun) => {
    const { scale = .5 } = props;

    return (
        <div className="ethan-weather-sun-shower" style={{ transform: `scale(${scale})` }}>
            <div className='ethan-weather-rainsun-sun'>
                <Sun scale="1"></Sun>
            </div>
            <Rain scale="1"></Rain>
        </div>
    )
}

export default RainSun;