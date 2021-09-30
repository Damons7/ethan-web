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
    : (params: { id: number | string }) => Promise<any>
    = async (params) =>
        await http.get(`${musicApi}/song/detail`, params);

//获取歌词
export const getMusicLyric
    : (params: { id: number }) => Promise<any>
    = async (params) =>
        await http.get(`${musicApi}/lyric`, params);

//搜索歌曲
export const searchMusic
    : (params: {
        keywords: string, //关键词
        limit?: number,  //返回数量
        offset?: number  //偏移数量，用于分页
        type?: number // 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手,
        // 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
    }) => Promise<any>
    = async (params) =>
        await http.get(`${musicApi}/search`, params);

//查看歌曲是否可用
export const checkMusic
    : (params: {
        id: number, //音乐id
        br?: number,  //码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
    }) => Promise<any>
    = async (params) =>
        await http.get(`${musicApi}/check/music`, params);

/********** 音乐 api END**********/