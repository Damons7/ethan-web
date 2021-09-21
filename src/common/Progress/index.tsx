import { classNames } from '../utils'
import { useEffect, useState, HTMLAttributes } from "react";
import { useInterval } from "@/hook/useInterval";
import './index.less'

interface BaseProgressProps {
    className?: string;
    interval?: number; //间隔时间（单位秒）
    totalTime: number; //总时长，（单位秒）
    onPause?: boolean; //中断/继续 进度条
    children?: React.ReactNode;
}

//Partial 设置为可选属性
type ProgressProps = BaseProgressProps & Partial<HTMLAttributes<HTMLElement>>;
export const Progress = (props: ProgressProps) => {
    const {
        className,
        children,
        interval = 1,
        totalTime,
        onPause = false,
        ...restProps
    } = props;

    // 设置class
    const classes = classNames("ethan-progress", className, {
    });

    const [endTime, setEndTime] = useState(totalTime)
    const [intervalTime, setIntervalTime]: any = useState(interval * 1000)
    const [progressWidth, setProgressWidth] = useState('0%')

    useInterval(() => {
        if (endTime < 1) {
            setIntervalTime(null)
        }
        else {
            setEndTime(endTime - 1)
            setProgressWidth(`${(1 - endTime / totalTime) * 100}%`)
        }
    }, intervalTime)

    useEffect(() => {
        onPause ?
            setIntervalTime(null)
            :
            setIntervalTime(interval * 1000)
    }, [onPause])

    return <div className={classes} {...restProps}>
        <div className={`${classes} ethan-progress-cover`} style={{ width: progressWidth }}>
            {/* <div className='ethan-progress-round'></div> */}
        </div>
    </div>
}
export default Progress;