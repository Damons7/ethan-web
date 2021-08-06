import { FC, useContext, HTMLAttributes } from "react";
import { classNames } from "../utils";
import "./index.less";
import { SelectContext } from './index';

export interface BaseOptionProps {
    value?: string | number;
    disabled?: boolean;
    className?: string;
    title?: string | number;
}

type NativeOptionProps = BaseOptionProps & HTMLAttributes<HTMLElement>;

//Partial 设置为可选属性
export type OptionProps = Partial<NativeOptionProps>;

export type changeOptionsType = {
    children?: React.ReactNode,
    value?: string | number,
    title?: string | number
}

export const Option: FC<OptionProps> = (props) => {
    const {
        className,
        value = "",
        title,
        disabled,
        children,
        ...restProps
    } = props;
    const context = useContext(SelectContext);

    const optionClasses = classNames("", className, {
        "ethan-options-selected": value === context.selectValue,
        "ethan-options-disabled": disabled,
    });

    //option点击事件
    const clickHandle = (e: React.MouseEvent) => {
        e.stopPropagation();

        if (disabled) return;

        const changeOptions: changeOptionsType = {
            children,
            value,
            title
        }
        context.onChange &&
            context.onChange(value, changeOptions)
    }

    return (
        <div  {...restProps} onClick={clickHandle} className={optionClasses}>
            {children}
        </div>
    );
};
export default Option;