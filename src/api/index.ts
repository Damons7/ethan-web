import http from './fetch';
import { getParameterType } from '@/utils'

/********** 获取高德地图 天气api **********/
export const getWeather
    : (params: getParameterType) => Promise<any>
    = async (params) =>
        await http.get("https://restapi.amap.com/v3/weather/weatherInfo", params);

