import { classNames } from '../utils'
import { HTMLAttributes, ReactNode } from "react";
import './index.less'

type placementType = 'left' | 'center' | 'right';

/*  *** Card 接口 ***   */
interface ICard {
    width?:string|number,
    height?:string|number,
    notesHeader?:boolean,
    hasTurn?: boolean,
    className?: string,
    headerClassName?: string,
    bodyClassName?: string,
    footerClassName?: string,
    hasFooter?: boolean,
    hasHeader?: boolean,
    headerPlacement?: placementType,
    title?: string,
    hasHeaderBorder?: boolean,
    hasFooterBorder?: boolean,
    children?: ReactNode,
    footerContent?: ReactNode,
}
type NativeProps = ICard & Partial<HTMLAttributes<HTMLElement>>;
export const Card = (props: NativeProps) => {
    const {
        width,
        height,
        hasTurn = true,
        className,
        notesHeader=false,
        headerClassName = '',
        bodyClassName = '',
        footerClassName = '',
        hasFooter = false,
        hasHeader = true,
        headerPlacement = 'center',
        title = '',
        hasHeaderBorder = true,
        hasFooterBorder = true,
        children,
        footerContent,
        ...restProps
    } = props;
    
    // 获取具体布局定位
    const getposition
        : () => string
        = () => {
            let classArr = ['a'], className = '';

            if (!hasHeader) classArr.unshift('h')
            if (!hasFooter) classArr.push('f')
            if (classArr.length > 1) className = classArr.join('-');

            return className;
        }
    // 设置class
    const classes3D = classNames("", className, {
        'ethan-card-3d': hasTurn,
        'ethan-card-no-3d':!hasTurn
    });
    const classes = classNames("ethan-card", '', {
     'ethan-card-turn': hasTurn
    });
    const bodyClasses = classNames("ethan-card-body", bodyClassName, {});
    const headerClasses = classNames("ethan-card-header", headerClassName, {
        [`ethan-card-header-${headerPlacement}`]: headerPlacement,
        'no-border': !hasHeaderBorder
    });
    const footerClasses = classNames("ethan-card-footer", footerClassName, {
        'no-border': !hasFooterBorder
    });

    return <div className={classes3D}>
        <div className={`${classes} ${getposition()} ${notesHeader?'notes-card':''}`} {...restProps} style={{width,height}}>
            {
                hasHeader ?
                    <div className={headerClasses}>
                        <span className='ethan-card-header-title'>{title}</span>
                    </div>
                    : null
            }
            <div className={bodyClasses}>
                {children}
            </div>
            {
                hasFooter ?
                    <div className={footerClasses}>{footerContent}</div>
                    : null
            }
        </div>
    </div>
}
export default Card;