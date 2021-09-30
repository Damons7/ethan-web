import { classNames } from '../utils'
import { HTMLAttributes, ReactNode } from "react";
import './index.less'

/** Modal 接口*/
interface ITipPage {
    className?: string
    icon?: ReactNode,
    img?: string,
    tip?: string
}

//交叉类型
type NativeModalProps = ITipPage & Partial<HTMLAttributes<HTMLElement>>;

export const TipPage = (props: NativeModalProps) => {
    const {
        className,
        img,
        icon,
        tip,
        ...restProps
    } = props;

    // 设置class
    const classes = classNames("ethan-tip-page", className, {});

    return <div className={classes} {...restProps}>
        {
            img ?
                <img src={img} alt='' />
                :
                icon
        }
        {tip && <div className='ethan-tip'>{tip}</div>}
    </div>
}
export default TipPage;