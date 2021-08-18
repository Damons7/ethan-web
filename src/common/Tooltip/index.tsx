import { classNames } from '../utils'
import { FC } from "react";
import './index.less'

interface TooltipProps {
    /**设置 Tooltip 的相对定位class */
    className?: string;
    /**设置 Tooltip 的绝对定位class */
    contentClassName?: string;
    /**设置 Tooltip 的提示语 */
    title?: string[],
    /**设置 Tooltip 的显示位置 */
    placement?: 'top' | 'bottom'
}

export const Tooltip: FC<TooltipProps> = (props) => {
    const {
        title,
        placement = 'bottom',
        className,
        contentClassName,
        ...restProps
    } = props;

    // 设置class
    const classes = classNames("ethan-tooltip cursor-p ", className, {});
    const contentClass = classNames(`ethan-tooltip-frame ethan-tooltip-${placement}`, contentClassName, {});

    return <div className={classes} {...restProps}>
        {props.children}
        <div className={contentClass}>
            {placement === 'bottom' ? <div className='ethan-tooltip-title-round' /> : null}
            <div className='ethan-tooltip-title'>
                {
                    title?.map((item: string, index: number) => {
                        return <div key={index}>{item}</div>
                    })
                }
            </div>
            {placement !== 'bottom' ? <div className='ethan-tooltip-title-round' /> : null}
        </div>
    </div>
}
export default Tooltip;