import Sun from '../Sun'
import Cloud from '../Cloud'
import './index.less'

interface ICloudSun {
    scale?: string
}
export const CloudSun = (props: ICloudSun) => {
    const { scale = .5 } = props;

    return (
        <div className="ethan-weather-sun-shower" style={{ transform: `scale(${scale})` }}>
            <div className='ethan-weather-rainsun-sun'>
                <Sun scale="1"></Sun>
            </div>
            <Cloud scale="1"></Cloud>
        </div>
    )
}

export default CloudSun;