import { Modal } from '@common/index';
import { getWeather } from '@/api'
import { getDetailDate } from '@/utils'
import { Select, Tooltip } from '@/common';
import {
    cityConfig,
    weatherTypeConfig,
    weatherApiConfig,
    getWeatherImgPath
} from './config'
import React, { useState, useEffect } from 'react'
import './index.less'

// initState类型
interface IWeatherModal {
    visible: boolean,
    title?: string,
    onCancel: () => void,
    onOk: () => void,
}

const WeatherModal = (props: IWeatherModal) => {
    const { Option } = Select;
    //地区配置
    const [cityArr, setCityArr] = useState(cityConfig[0].city)
    //当前地区
    const [city, setCity] = useState(cityArr[0].name)
    //当前时间
    const dateDetail = getDetailDate(new Date());
    //天气信息
    const [weatherInfo, setWeatherInfo] = useState({
        weather: '',
        temperature: '',
        windDirection: '',
        windpower: "",
        humidity: "",
        weatherIcon: weatherTypeConfig.cloud.path,
        weatherTime: `礼拜${dateDetail.week} - ${dateDetail.dayType.dayTypeName}
        ${dateDetail.dayType.isOver12 ? dateDetail.hours : dateDetail.hours - 12}:${dateDetail.minutes}`
    })
    //预报天气信息
    const [weatherForecast, setWeatherForecast] = useState([])
    const {
        visible = true,
        title = '天气',
        onCancel,
        onOk,
        ...restProps
    } = props;

    //更改城市
    const changeBase
        : (baseCode: number) => void
        = baseCode => {
            const find = cityConfig.find(item => item.baseCode === baseCode) ?? cityConfig[0];
            setCityArr(find.city)
            setCity(find.city[0].name)
        }

    //监听地区变化时获取天气信息
    useEffect(() => {
        //获取实况天气
        getWeather({
            key: weatherApiConfig.key,
            city: cityArr.find(item => item.name === city)?.code ?? cityArr[0].code
        }).then(res => {
            const data = res.lives[0];
            if (data) {
                const _weatherInfo = { ...weatherInfo };
                _weatherInfo.weather = data.weather;
                _weatherInfo.temperature = data.temperature;
                _weatherInfo.windDirection = data.winddirection;
                _weatherInfo.windpower = data.windpower;
                _weatherInfo.humidity = data.humidity;
                _weatherInfo.weatherIcon = getWeatherImgPath(data.weather);
                const dateDetail = getDetailDate(new Date());
                _weatherInfo.weatherTime = `礼拜${dateDetail.week} - ${dateDetail.dayType.dayTypeName}
                ${dateDetail.dayType.isOver12 ? dateDetail.hours : dateDetail.hours - 12}:${dateDetail.minutes}`
                setWeatherInfo(_weatherInfo);
            }
        }).catch(() => console.log);

        //获取未来天气
        getWeather({
            key: weatherApiConfig.key,
            extensions: 'all',
            city: cityArr.find(item => item.name === city)?.code ?? cityArr[0].code
        }).then(res => {
            const data = res.forecasts[0].casts;
            if (data?.length) {
                const dateData = data.map((item: any) => {
                    return {
                        date: item.date,
                        daypower: item.daypower,
                        daytemp: item.daytemp,
                        dayweather: item.dayweather,
                        daywind: item.daywind,
                        dayImg: getWeatherImgPath(item.dayweather),
                        nightpower: item.nightpower,
                        nighttemp: item.nighttemp,
                        nightweather: item.nightweather,
                        nightwind: item.nightwind,
                        nightImg: getWeatherImgPath(item.nightweather),
                        week: item.week,
                    }
                })
                setWeatherForecast(dateData)
            }

        }).catch(() => console.log);

    }, [city]);
    return (
        <Modal
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            title={title}
            hasFoot={false}
            {...restProps}
        >
            <div className='weather-modal-body'>
                <div className='weather-modal-body-title'>
                    <div className='weather-icon'>{weatherInfo.weatherIcon}</div>
                    <div className='weather-temperature'>
                        {weatherInfo.temperature}
                        <span>°C</span>
                        {/* <div className='weather-time'>周四下午12:00</div> */}
                    </div>
                    <div className='weather-detail'>
                        <div>相对湿度：<span>{weatherInfo.humidity}</span> %</div>
                        <div>风向：<span>{weatherInfo.windDirection}</span> 风</div>
                        <div>风力：<span>{weatherInfo.windpower}</span> 级</div>
                    </div>
                    <div className='weather-base'>
                        <Select
                            defaultValue={cityConfig[0].base}
                            className='weather-base-city'
                            showArrow={false}
                            notAnimate={true}
                            onChange={changeBase}
                        >
                            {
                                cityConfig.map(item => {
                                    return <Option key={item.base} value={item.baseCode}>{item.base}</Option>
                                })
                            }
                        </Select>
                        <Select
                            value={city}
                            className='weather-base-city'
                            showArrow={false}
                            notAnimate={true}
                            onChange={name => setCity(name)}
                        >
                            {
                                cityArr.map(item => {
                                    return <Option key={item.name} value={item.name}>{item.name}</Option>
                                })
                            }
                        </Select>
                    </div>
                    <div className='weather-type'>{weatherInfo.weather}</div>
                    <div className='weather-time'>{weatherInfo.weatherTime}</div>
                </div>

                <div className='weather-modal-body-content'>
                    <div className='weather-modal-forecast-day'>-白天</div>
                    <div className='weather-modal-forecast-day'>-夜晚</div>
                    <div></div>
                    {
                        weatherForecast.map((item: any) => {
                            return (
                                <React.Fragment key={item.date}>
                                    <Tooltip 
                                    contentClassName='weather-forecast-tipBottom-content'                                    
                                    title={[
                                        `白天天气 : ${item.dayweather}`,
                                        `温度 : ${item.daytemp} °C`,
                                        `${item.daywind}风 ${item.daypower}级`,
                                        `日期 : ${item.date}`,
                                        `星期${getDetailDate(item.date).week}`
                                    ]}>
                                        <div className='weather-modal-forecast-info'>
                                            {item.dayImg}
                                            <span>{item.dayweather}</span>
                                        </div>
                                    </Tooltip>

                                    <Tooltip
                                        placement='top'
                                        contentClassName='weather-forecast-tipTop-content'
                                        title={[
                                            `夜晚天气 : ${item.nightweather}`,
                                            `温度 : ${item.nighttemp} °C`,
                                            `${item.nightwind}风 ${item.nightpower}级`,
                                            `日期 : ${item.date}`,
                                            `星期${getDetailDate(item.date).week}`
                                        ]}>
                                        <div className='weather-modal-forecast-info'>
                                            {item.nightImg}
                                            <span>{item.nightweather}</span>
                                        </div>
                                    </Tooltip>
                                    <div className='weather-modal-forecast-date'>{`星期${getDetailDate(item.date).week}`}</div>
                                </React.Fragment>
                            )
                        })
                    }

                </div>
            </div >
        </Modal >
    )
}

export default WeatherModal;