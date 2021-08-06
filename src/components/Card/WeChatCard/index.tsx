import { Card } from '@common/index';
import wechatImg from '@images/wechat.png'
import { NativeProps } from '../card';
import './index.less'

export const WeChatCard = (props: NativeProps) => {
    const {
        title = 'WeChat',
        className,
        headerClassName,
        ...restProps
    } = props;

    return (
        <Card title={title}
            className={className}
            headerClassName='headerClassName'
            bodyClassName='wechat-card-body'
            {...restProps}
        >
            <img src={wechatImg} alt='' />
        </Card>
    )
}

export default WeChatCard;