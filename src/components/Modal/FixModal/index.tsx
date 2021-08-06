import { Modal, Select } from '@common/index';
import './index.less'

// initState类型
interface IFixModal {
    visible: boolean,
    title: string,
    onCancel: () => void,
    onOk: () => void,
}

const FixModal = (props: IFixModal) => {
    const {
        visible = true,
        title = '设置',
        onCancel,
        onOk,
        ...restProps
    } = props;
    const { Option } = Select;
    // 颜色配置
    const colorConfig = ['purple', 'green', 'red', 'black'];
    // 滤镜配置
    const filterConfig: { [key in string | number]: string | number } = {
        none: "none",
        hueRotate: 'hue rotate',
        negative: "negative",
        grayscale: "black and white"
    };

    // 滤镜默认值
    let filterDefaultVal = Object.values(filterConfig)[0];

    //获取body dom
    const docuBody: HTMLElement | null = document.querySelector("body");
    if (docuBody) {
        // 寻找高亮值
        const find = Object.keys(filterConfig).find(item => ~docuBody.className.indexOf(item));
        if (find) {
            filterDefaultVal = filterConfig[find];
        }
    }

    // 改变背景颜色
    const changeBackGroudColor
        : (color: string) => void
        = color => {
            const docu: HTMLElement | null = document.querySelector("#root");
            if (docu) docu.className = `theme-${color}`;
        }

    // 改变背景滤镜
    const changeBackGroudFilter
        : (_filter: string) => void
        = _filter => {
            if (docuBody) docuBody.className = `theme-filter-${_filter}`;
        }

    return (
        <Modal
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            title={title}
            hasFoot={false}
            {...restProps}
        >
            <div className='fix-modal-body'>
                <h2>background</h2>
                <div className='modal-body-background'>
                    {
                        colorConfig.map(item => <div onClick={() => changeBackGroudColor(item)} key={item} />)
                    }
                </div>

                <h2>choose filter</h2>
                <Select
                    width='240px'
                    defaultValue={filterDefaultVal}
                    onChange={val => changeBackGroudFilter(val)}
                >
                    {
                        Object.keys(filterConfig).map(item =>
                            <Option value={item} key={item}>{filterConfig[item]}</Option>
                        )
                    }

                </Select>
            </div>
        </Modal>
    )
}

export default FixModal;