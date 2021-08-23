import { Modal } from '@common/index';
import {
    Sun,
    Rain,
    Cloud,
    Snow,
    Lightning,
    RainSun,
    CloudSun
} from '@/components/weatherIcon'
import { Select } from '@/common';
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
    const {
        visible = true,
        title = '天气',
        onCancel,
        onOk,
        ...restProps
    } = props;

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
                    <div className='weather-icon'><Cloud /></div>
                    <div className='weather-temperature'>
                        29
                        <span>°C</span>
                    </div>
                    <div className='weather-detail'>
                        <div>相对湿度：<span>80</span> %</div>
                        <div>风向：<span>西南</span> 风</div>
                        <div>风力：<span>4</span> 级</div>
                    </div>
                    <div className='weather-base'>
                        <Select className='weather-base-city' showArrow={false}>
                            <Option>深圳市</Option>
                        </Select>
                        <Select className='weather-base-city' showArrow={false}>
                            <Option>南山区</Option>
                        </Select>
                        <div>周四下午12:00</div>
                        <div>多云</div>
                    </div>
                </div>
            </div >
        </Modal >
    )
}

export default WeatherModal;