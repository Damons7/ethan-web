import { classNames } from '../utils'
import { FC } from "react";
import './index.less'

interface TooltipProps {
    /**设置 Tooltip 的class */
    className?: string;
    /**设置 Tooltip 的提示语 */
    title?: string[],
}

export const Tooltip: FC<TooltipProps> = (props) => {
    const {
        title,
        className,
        ...restProps
    } = props;

    // 设置class
    const classes = classNames("ethan-tooltip cursor-p ", className, {});
    return <div className={classes} {...restProps}>
        {props.children}
        <div className='ethan-tooltip-frame flex-column'>
            <div className='ethan-tooltip-title-round' />
            <div className='ethan-tooltip-title'>
                {
                    title?.map((item:string,index:number)=>{
                        return <div key={index}>{item}</div>
                    })
                }
            </div>
        </div>
    </div>
}
export default Tooltip;