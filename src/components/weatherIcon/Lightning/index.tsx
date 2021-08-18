import './index.less'

interface ILightning {
    scale?: string
}
export const Lightning = (props: ILightning) => {
    const { scale = .5 } = props;

    return (
        <div className="ethan-weather-thunder-storm" style={{ transform: `scale(${scale})` }} >
            <div className="ethan-weather-lightning-cloud" />
            <div className="ethan-weather-lightning">
                <div className="ethan-weather-lightning-bolt" />
                <div className="ethan-weather-lightning-bolt" />
            </div>
        </div>
    )
}

export default Lightning;