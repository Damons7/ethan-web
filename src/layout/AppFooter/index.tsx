import Tooltip from '@common/Tooltip'
import {
  Sun,
  Rain,
  Cloud,
  Snow,
  Lightning,
  RainSun,
  CloudSun
} from '@/components/weatherIcon'
import { GlobalContext } from '@/layout/AppMain/context'
import { getWeather } from '@/api'
import { useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from 'react'
import './index.less'

type footerConfigType = {
  base: string,
  citys: Array<{ name: string, city: number }>,
  key: string
}

type weatherTypeConfigType = {
  [key: string]: {
    value: Array<string>,
    path: JSX.Element
  }
}
export default function AppFooder() {
  const history = useHistory();
  //获取main中的context
  const context: any = useContext(GlobalContext);

  //配置文件
  const footerConfig: footerConfigType = {
    base: '深圳',
    citys: [
      { name: '南山区', city: 440305 },
      { name: '福田区', city: 440304 },
      { name: '罗湖区', city: 440303 },
      { name: '宝安区', city: 440306 },
      { name: '龙岗区', city: 440307 },
      { name: '盐田区', city: 440308 },
      { name: '龙华区', city: 440309 },
      { name: '坪山区', city: 440310 },
      { name: '光明区', city: 110101 },
    ],
    key: "fba995bcb03932d0dac2684e523b0e94" //高德地图key
  };

  //天气类型 配置
  const weatherTypeConfig: weatherTypeConfigType = {
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

  //toolConfig
  const initToolConfig = {
    base: `${footerConfig.base} ${footerConfig.citys[0].name}`,
    weather: '',
    temperature: '',
    windDirection: '',
    humidity: ""
  }

  useEffect(() => {
    getWeather({
      key: footerConfig.key,
      city: footerConfig.citys.find(item => item.name === '南山区')?.city ?? 440305
    }).then(res => {
      const data = res.lives[0];
      if (data) {
        const icon = getWeatherImgPath(data.weather);
        const _initToolConfig = { ...initToolConfig };
        _initToolConfig.weather = `天气 ：${data.weather}`;
        _initToolConfig.temperature = `温度 ：${data.temperature}°C`;
        _initToolConfig.windDirection = `${data.winddirection} ${data.windpower}级`;
        _initToolConfig.humidity = `相对湿度 ：${data.humidity}%`;
        setWeather(icon);
        context.setWeather(icon);
        setToolConfig(_initToolConfig);
      }
    }).catch(() => console.log);
  }, []);

  const [weather, setWeather] = useState(<Cloud />);
  const [toolConfig, setToolConfig] = useState(initToolConfig);

  //获取天气图片 回调
  const getWeatherImgPath
    : (data: string) => JSX.Element
    = data => {
      return Object.values(weatherTypeConfig).find(item => item.value.includes(data))?.path ?? <Cloud />;
    }

  return (
    <footer>
      <div>
        <span>The</span>
        <span>address</span>
        <span> →</span>
        <span>广东省深圳市南山区</span>
      </div>

      <div>
        <span>The</span>
        <span>work</span>
        <span> →</span>
        <span>前端搬砖工程尸</span>
      </div>

      <div>
        <span>The</span>
        <span>github</span>
        <span> →</span>
        <span>https://github.com/Damons7</span>
      </div>

      <div>
        <span>The</span>
        <span style={{ cursor: "pointer" }} onClick={() => {
          history.push({
            pathname: '/share',
          })
        }}>weather</span>
        <span> →</span>

        <Tooltip
          title={Object.values(toolConfig)}
          placement='top'
          className='footer-weather'
          contentClassName='footer-weather-content'
        >
          {weather}
        </Tooltip>
      </div>
    </footer>
  )
}