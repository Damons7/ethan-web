import { classNames } from '../utils'
import { Button } from '..';
import { HTMLAttributes, ReactNode } from "react";
import './index.less'

/**定义按钮枚举类型 */
enum ClickType {
    oK = "ok",
    onCancel = "onCancel",
}

/** Modal位置 类型*/
type positionType = "center" | "top" | "bottom" | "left" | "right";
/** Modal 标题位置 类型*/
type titlePositionType = "center" | "left";
/** Modal 事件 类型*/
type changeCallBack = () => void;

/** Modal 接口*/
interface IModal {
    visible?: boolean
    className?: string
    title?: ReactNode
    titlePosition?: titlePositionType
    titleClass?: string
    showClose?: boolean
    onCancel?: changeCallBack
    onCancelText?: string
    onOkText?: string
    onOk?: changeCallBack
    position?: positionType
    mask?: boolean,
    hasFoot?: boolean,
    hasFootCancel?: boolean,
    hasFootOk?: boolean,
    children: React.ReactNode
}

//交叉类型
type NativeModalProps = IModal & Partial<HTMLAttributes<HTMLElement>>;

export const Modal = (props: NativeModalProps) => {
    const {
        visible = true,
        className,
        title,
        titlePosition = 'center',
        titleClass,
        showClose,
        onCancel,
        onCancelText = '取消',
        onOkText = '确定',
        onOk,
        position = 'center',
        hasFoot = true,
        hasFootCancel = false,
        hasFootOk = true,
        children,
        ...restProps
    } = props;

    // 设置class
    const classes = classNames("ethan-modal", className, {
        "ethan-modal-show": visible,
    });
    const titleClasses = classNames("ethan-modal-title", titleClass, []);

    // 点击事件
    const clickHandle = (type: string) => {
        switch (type) {
            // 确认
            case ClickType.oK:
                onOk && onOk();
                break;
            // 关闭
            case ClickType.onCancel:
                onCancel && onCancel();
                break;
            default:
                break;
        }
    };

    return <div className={classes} {...restProps}>
        <div className={`ethan-modal-content ethan-modal-${position}`}>
            <div className={`ethan-modal-header-${titlePosition}`}>
                <div className={titleClasses}>{title}</div>
                <div className='ethan-modal-close' onClick={() => clickHandle(ClickType.onCancel)}>
                    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18236" data-spm-anchor-id="a313x.7781069.0.i58" width="32" height="32"><path d="M512 114c53.8 0 105.9 10.5 154.9 31.3 47.4 20 90 48.7 126.5 85.3 36.6 36.6 65.3 79.1 85.3 126.5 20.7 49 31.3 101.2 31.3 154.9s-10.5 105.9-31.3 154.9c-20 47.4-48.7 90-85.3 126.5-36.6 36.6-79.1 65.3-126.5 85.3-49 20.8-101.1 31.3-154.9 31.3s-105.9-10.5-154.9-31.3c-47.4-20-90-48.7-126.5-85.3-36.6-36.6-65.3-79.1-85.3-126.5-20.8-49-31.3-101.1-31.3-154.9s10.5-105.9 31.3-154.9c20-47.4 48.7-90 85.3-126.5 36.6-36.6 79.1-65.3 126.5-85.3 49-20.8 101.1-31.3 154.9-31.3m0-50C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z" p-id="18237" fill="#f3988c" data-spm-anchor-id="a313x.7781069.0.i59" className="selected"></path><path d="M352.9 671.1c-9.7-9.7-9.7-25.6 0-35.4l282.8-282.8c9.7-9.7 25.6-9.7 35.4 0 9.7 9.7 9.7 25.6 0 35.4L388.3 671.1c-9.8 9.7-25.7 9.7-35.4 0z" p-id="18238" fill="#f95f56"></path><path d="M352.9 352.9c9.7-9.7 25.6-9.7 35.4 0l282.8 282.8c9.7 9.7 9.7 25.6 0 35.4-9.7 9.7-25.6 9.7-35.4 0L352.9 388.3c-9.7-9.8-9.7-25.7 0-35.4z" p-id="18239" fill="#f95f56"></path></svg>
                </div>
            </div>
            <div className='ethan-modal-body'>
                {children}
            </div>
            {
                hasFoot ?
                    <div className='ethan-modal-footer'>
                        {
                            hasFootCancel
                                ?

                                <Button size='ssm' onClick={() => clickHandle(ClickType.onCancel)}>{onCancelText}</Button>
                                :
                                null
                        }
                        {
                            hasFootOk
                                ?
                                <Button size='ssm' onClick={() => clickHandle(ClickType.oK)}>{onOkText}</Button>
                                :
                                null
                        }
                    </div> :
                    null
            }
        </div>
    </div>
}
export default Modal;