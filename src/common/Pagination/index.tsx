import { classNames } from '../utils'
import React, { HTMLAttributes } from "react";
import { NextPageIcon, PrevPageIcon } from '@components/Icon'
import './index.less'

interface BaseProgressProps {
    className?: string;
    nextText?: string;
    prevText?: string;
    current: number; //当前页
    total?: number; //数据总数
    pageSize: number,//每页条数
    hideOnSinglePage?: boolean; // 只有一页时是否隐藏分页器
    callbackCurrent?: (cur: number) => void;
    position?: 'center' | 'left' | 'right'
}

//Partial 设置为可选属性
type ProgressProps = BaseProgressProps & Partial<HTMLAttributes<HTMLElement>>;
export const Pagination = (props: ProgressProps) => {
    const {
        className,
        nextText = "下一页",
        prevText = "上一页",
        position = 'center',
        current,
        total = 0,
        pageSize,
        hideOnSinglePage = false,
        callbackCurrent,
        ...restProps
    } = props;

    const size = Math.ceil(total / pageSize); //页数

    // 设置class
    const classes = classNames("ethan-pagination", className, {
        'ethan-pagination-hidden': hideOnSinglePage && pageSize >= total
    });

    //改变页数
    const changePage
        : (type: 'next' | 'prev' | 'select', index?: number) => void
        = (type, index) => {
            let _index = index;
            switch (type) {
                case 'next':
                    _index = current === size ? 0 : current + 1
                    break;
                case 'prev':
                    _index = current === 1 ? 0 : current - 1
                    break;
                case 'select':
                    _index = index
                    break;
                default:
                    break;
            }
            _index && callbackCurrent && callbackCurrent(_index)
        }

    const paginationItem = () => {
        const hasEllipsis = size > 5;
        const arr1 = Array.from({ length: hasEllipsis ? size + 2 : size }).map((item, index) => {
            // const _index = index > 1 ? (index < size ? index : index - 1) : index + 1;
            const _index = hasEllipsis ?
                (
                    index > 1 ?
                        (index < size ? index : index - 1)
                        : index + 1
                )
                : index + 1;
                console.log(_index,'_index');
                
            return hasEllipsis && (index === 1 || index === size) ?
                <div className='ethan-pagination-item-ellipsis' key={index}>...</div>
                :
                <div
                    className={current === _index ? 'ethan-pagination-item-select' : ""}
                    key={index}
                    onClick={() => changePage("select", _index)}>{_index}
                </div>

        })
        // const arr1 = Array.from({ length: size + 2 }).map((item, index) => {
        //     const _index = index > 1 ? (index < size ? index : index - 1) : index + 1;
        //     return index === 1 || index === size ?
        //         <div className='ethan-pagination-item-ellipsis' key={index}>...</div>
        //         :
        //         <div
        //             className={current === _index ? 'ethan-pagination-item-select' : ""}
        //             key={index}
        //             onClick={() => changePage("select", _index)}>{_index}
        //         </div>

        // })
        // const arr1Length = arr1.length;
        // const arr2 = arr1.filter((item, index) => {
        //     if (current - 5 < 0 && index === 1) {
        //         return false
        //     } else if (current - index > 2 && index > 1) {
        //         return false
        //     }

        //     if (current + 5 > arr1Length - 1 && index === arr1Length - 2) {
        //         return false
        //     } else if (index - current > 2 && index < arr1Length - 2) {
        //         return false
        //     }
        //     return true
        // })


        return (
            <div className='ethan-pagination-item'>
                <div
                    className={current === 1 ? 'ethan-pagination-item-disabled' : ''}
                    onClick={() => changePage("prev")}
                >
                    <PrevPageIcon style={{ width: ".8rem", height: ".8rem" }} />
                </div>
                {arr1}
                <div
                    className={current === size ? 'ethan-pagination-item-disabled' : ''}
                    onClick={() => changePage("next")}
                >
                    <NextPageIcon style={{ width: ".8rem", height: ".8rem" }} />
                </div>
            </div>
        )
    }

    return <div {...restProps} className={`${classes} ethan-pagination-${position}`}>
        {paginationItem()}
        <div className='ethan-pagination-total'>第{current}页 / 共{total}页</div>

    </div>
}
export default Pagination;