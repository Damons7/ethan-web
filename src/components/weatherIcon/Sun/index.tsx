import './index.less'

interface ISun {
    scale?: string
}
export const Sun = (props: ISun) => {
    const { scale = .5 } = props;

    return (
        <div style={{ transform: `scale(${scale})` }}>
            <div className="ethan-weather-sun">
                <div className="ethan-weather-sun-rays"/>
            </div>
        </div>
    )
}

export default Sun;