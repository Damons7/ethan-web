import './index.less'

interface ISnow {
    scale?: string
}
export const Snow = (props: ISnow) => {
    const { scale = .5 } = props;

    return (
        <div className="ethan-weather-snow-flurries" style={{ transform: `scale(${scale})` }} >
            <div className="ethan-weather-snow-cloud"/>
            <div className="ethan-weather-snow">
                <div className="ethan-weather-snow-flake"/>
                <div className="ethan-weather-snow-flake"/>
            </div>
        </div>
    )
}

export default Snow;