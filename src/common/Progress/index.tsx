import { classNames } from '../utils'
import { getTimeLength } from '@/utils'
import { useEffect, HTMLAttributes, useReducer } from "react";
import { useInterval } from "@/hook/useInterval";
import './index.less'

interface BaseProgressProps {
    className?: string;
    interval?: number; //间隔时间（单位毫秒）
    totalTime: number; //总时长，（单位毫秒）
    onPause?: boolean; //中断/继续 进度条
    reStart?: boolean,  //重新开始
    children?: React.ReactNode;
    callback?: () => any// 回调函数
}

//Partial 设置为可选属性
type ProgressProps = BaseProgressProps & Partial<HTMLAttributes<HTMLElement>>;
export const Progress = (props: ProgressProps) => {
    const {
        className,
        children,
        interval = 1000,
        totalTime = 0,
        callback,
        onPause = false,
        reStart = false,
        ...restProps
    } = props;

    // 设置class
    const classes = classNames("ethan-progress", className, {
    });

    const initState = {
        endTime: totalTime,
        intervalTime: interval,
        progressWidth: '0%'
    }

    // reducer函数
    const progressReducer
        : (state: any, action: any) => any
        = (state, action) => {
            switch (action.type) {
                case 'setIntervalTime':
                    return {
                        ...state,
                        intervalTime: action.intervalTime
                    }
                case 'setEndTime':
                    return {
                        ...state,
                        endTime: action.endTime,
                    }
                case 'setProgress':
                    return {
                        ...state,
                        endTime: action.endTime,
                        progressWidth: action.progressWidth
                    }
                case 'setReStart':
                    return initState
                default:
                    return state;
            }
        }
    const [state, dispatch] = useReducer(progressReducer, initState);

    useInterval(() => {
        if (state.endTime < 1000) {
            dispatch({ type: "setIntervalTime", intervalTime: null })
            callback && callback()
        }
        else {
            dispatch({
                type: "setProgress",
                endTime: state.endTime - 1000,
                progressWidth: `${(1 - (state.endTime - 1000) / totalTime) * 100}%`
            })
        }
    }, state.intervalTime)

    useEffect(() => {
        dispatch({ type: "setReStart" })
    }, [reStart])

    useEffect(() => {
        onPause ?
            dispatch({ type: "setIntervalTime", intervalTime: null })
            :
            dispatch({ type: "setIntervalTime", intervalTime: interval })
    }, [onPause])

    return <div className={classes} {...restProps}>
        <div className={`${classes} ethan-progress-cover`} style={{ width: state.progressWidth }}>
            {/* <div className='ethan-progress-round'></div> */}
        </div>

        <div className='ethan-progress-time-length'>
            {getTimeLength(totalTime-state.endTime)} / {getTimeLength(totalTime)}
        </div>
    </div>
}
export default Progress;