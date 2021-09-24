import http from './fetch';
import { getParameterType } from '@/utils'

const musicApi = 'https://netease-cloud-music-api-six-zeta.vercel.app'
/********** 获取高德地图 天气api **********/
export const getWeather
    : (params: getParameterType) => Promise<any>
    = async (params) =>
        await http.get("https://restapi.amap.com/v3/weather/weatherInfo", params);
/********** 获取高德地图 天气api END**********/

/********** 音乐 api **********/

//获取歌曲详情
export const getMusicDetail
    : (params: getParameterType) => Promise<any>
    = async (params) =>
        await http.get(`${musicApi}/song/detail`, params);

/********** 音乐 api END**********/