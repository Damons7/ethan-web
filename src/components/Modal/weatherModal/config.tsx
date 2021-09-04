import {
    Sun,
    Rain,
    Cloud,
    Snow,
    Lightning,
    RainSun,
    CloudSun
} from '@/components/weatherIcon';

type cityConfigArrType = Array<cityConfigType>
type cityConfigType = {
    base: string,
    baseCode: number,
    city: Array<cityType>
}
type cityType = {
    name: string,
    code: number
}

//部分城市地区配置
export const cityConfig: cityConfigArrType = [
    {
        base: "深圳市",
        baseCode: 440300,
        city: [
            { name: '南山区', code: 440305 },
            { name: '福田区', code: 440304 },
            { name: '罗湖区', code: 440303 },
            { name: '宝安区', code: 440306 },
            { name: '龙岗区', code: 440307 },
            { name: '盐田区', code: 440308 },
            { name: '龙华区', code: 440309 },
            { name: '坪山区', code: 440310 },
            { name: '光明区', code: 110101 },
        ]
    },
    {
        base: "广州市",
        baseCode: 440100,
        city: [
            { name: '荔湾区', code: 440103 },
            { name: '越秀区', code: 440104 },
            { name: '海珠区', code: 440105 },
            { name: '天河区', code: 440106 },
            { name: '白云区', code: 440111 },
            { name: '黄埔区', code: 440112 },
            { name: '番禺区', code: 440113 },
            { name: '花都区', code: 440114 },
            { name: '南沙区', code: 440115 },
            { name: '从化区', code: 440117 },
            { name: '增城区', code: 440118 },
        ]
    },
    {
        base: "武汉市",
        baseCode: 420100,
        city: [
            { name: '江岸区', code: 420102 },
            { name: '江汉区', code: 420103 },
            { name: '硚口区', code: 420104 },
            { name: '汉阳区', code: 420105 },
            { name: '武昌区', code: 420106 },
            { name: '青山区', code: 420107 },
            { name: '洪山区', code: 420111 },
            { name: '东西湖区', code: 420112 },
            { name: '汉南区', code: 420113 },
            { name: '蔡甸区', code: 420114 },
            { name: '江夏区', code: 420115 },
            { name: '黄陂区', code: 420116 },
            { name: '新洲区', code: 420117 },
        ]
    },
    {
        base: "厦门市",
        baseCode: 350200,
        city: [
            { name: '思明区', code: 350203 },
            { name: '海沧区', code: 350205 },
            { name: '湖里区', code: 350206 },
            { name: '集美区', code: 350211 },
            { name: '同安区', code: 350212 },
            { name: '翔安区', code: 350213 },
            { name: '莆田区', code: 350300 },
            { name: '城厢区', code: 350302 },
            { name: '涵江区', code: 350303 },
            { name: '荔城区', code: 350204 },
            { name: '秀屿区', code: 350305 },
            { name: '仙游县', code: 350322 },
        ]
    },
]

export type weatherTypeConfigType = {
    [key: string]: {
        value: Array<string>,
        path: JSX.Element
    }
}
//天气类型 配置
export const weatherTypeConfig: weatherTypeConfigType = {
    sun: {
        value: ["晴", "晴天"],
        path: <Sun />
    },
    cloud: {
        value: ["多云", "少云", "云", "阴"],
        path: <Cloud />
    },
    cloudSun: {
        value: ["晴间多云"],
        path: <CloudSun />
    },
    rain: {
        value: ["雨", "小雨", "阵雨", "大雨", "中雨", '暴雨', "大暴雨", "特大暴雨", "冻雨", "强阵雨", "小雨-中雨", "中雨-大雨",
            "大雨-暴雨", "暴雨-大暴雨", "大暴雨-特大暴雨", "毛毛雨/细雨", "极端降雨"],
        path: <Rain />
    },
    lightning: {
        value: ["雷阵雨", '雷阵雨并伴有冰雹', '雷雨', '雷'],
        path: <Lightning />
    },
    snow: {
        value: ["雪", "大雪", "小雪", "中雪", "暴雪", "小雪-中雪", "中雪-大雪", "大雪-暴雪", "雨雪天气", "雨夹雪", "阵雨夹雪"],
        path: <Snow />
    },
    rainSun: {
        value: ["雨转晴", "晴转雨", "太阳雨"],
        path: <RainSun />
    },
}

export const weatherApiConfig = {
    key: "fba995bcb03932d0dac2684e523b0e94" //高德地图key
}

//获取天气图片 回调
export const getWeatherImgPath
    : (data: string) => JSX.Element
    = data => {
        return Object.values(weatherTypeConfig).find(item => item.value.includes(data))?.path ?? <Cloud />;
    }