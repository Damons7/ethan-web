import './index.less'

interface IRain {
    scale?: string
}
export const Rain = (props: IRain) => {
    const { scale = .5 } = props;

    return (
        <div style={{ transform: `scale(${scale})`,position:"relative" }}>
            <div className="ethan-weather-rain-cloud" />
            <div className="ethan-weather-rain" />
        </div>
    )
}

export default Rain;