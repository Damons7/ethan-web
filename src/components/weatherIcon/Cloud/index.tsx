import './index.less'

interface ICloud {
    scale?: string
}
export const Cloud = (props: ICloud) => {
    const { scale = .5 } = props;

    return (
       <div style={{position:'relative'}}>
            <div style={{ transform: `scale(${scale})` }} className='ethan-weather-cloudy'>
            <div className="ethan-weather-cloud" />
            <div className="ethan-weather-cloud" />
        </div>
       </div>
    )
}

export default Cloud;