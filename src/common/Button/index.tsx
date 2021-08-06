import { classNames } from '../utils'
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import './index.less'

type ButtonSize = "lg" | "sm" | "ssm";
type ButtonType = "primary" | "default" | "success" | "danger" | "link" | "warning" | "action";

interface BaseButtonProps {
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button 的尺寸 */
    size?: ButtonSize;
    /**设置 Button 的类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
    icon?: React.ReactNode
}

//交叉类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
//Partial 设置为可选属性
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button = (props: ButtonProps) => {
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href,
        ...restProps
    } = props;

    // 设置class
    const classes = classNames("ethan-button", className, {
        [`ethan-btn-${btnType}`]: btnType,
        [`ethan-btn-${size}`]: size,
        disabled: btnType === "link" && disabled,
    });

    return btnType === "link" && href ?
        <a className={classes} href={href} {...restProps}>
            {children}
        </a>
        :
        <button className={classes} {...restProps} disabled={disabled}>
            {children}
        </button>
}
export default Button;