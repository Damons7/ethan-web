import { classNames } from '../utils'
import down from '@images/down.png'
import up from '@images/up.png'
import { Option, OptionProps, changeOptionsType } from './option';
import { useState, createContext } from "react";
import './index.less'

interface ISelectContext {
    onChange?: changeCallBack;
    selectValue?: string | number | React.ReactNode,
}
interface ParentSelect extends React.FC<SelectProps> {
    Option: React.FC<OptionProps>;
}
export const SelectContext = createContext<ISelectContext>({});

/** Select 接口*/
interface BaseSelectProps {
    defaultValue?: string | number | React.ReactNode;
    value?: string | number;
    width?: string | number;
    showArrow?: boolean;
    disabled?: boolean;
    className?: string;
    dropdownClassName?: string;
    onDropdownVisibleChange?: changeCallBack;
    onChange?: changeCallBack;
}

type NativeSelectProps = BaseSelectProps;

//Partial 设置为可选属性
export type SelectProps = Partial<NativeSelectProps>;

// initState类型
type stateType = {
    selectIcon: boolean,
    optionVisible: boolean
}

type changeCallBack = (value?: any, content?: any, type?: string) => void;

export const Select: ParentSelect = (props) => {
    const {
        className,
        dropdownClassName,
        width,
        showArrow = true,
        defaultValue = "",
        value,
        disabled,
        onChange,
        onDropdownVisibleChange,
        children,
        ...restProps
    } = props;

    // 初始化state
    const initState: stateType = {
        selectIcon: false,
        optionVisible: false
    }

    const [selectState, setSelectState] = useState(initState);
    const [natValue, setNatValue] = useState(defaultValue ?? "");

    // 设置class
    const classes = classNames("ethan-select", className, {
        "ethan-select-disabled": disabled
    });
    const optionClasses = classNames("ethan-options", dropdownClassName, {
        "ethan-options-show": selectState.optionVisible,
    });

    // 点击select事件
    const handleClick
        : () => void
        = () => {
            if (disabled) return;

            setSelectState(state => {
                return {
                    selectIcon: !state.selectIcon,
                    optionVisible: !state.optionVisible
                }
            })
            onDropdownVisibleChange && onDropdownVisibleChange()
        }

    //onchange事件
    const handleOnChange
        : (value: string, optipns: changeOptionsType) => void
        = (value = "", optipns) => {
            const children = optipns.children;
            if (children) {
                children && setNatValue(children);
            } else {
                value && setNatValue(value);
            }
            onChange && onChange(value, optipns);
            setSelectState(state => {
                return {
                    selectIcon: !state.selectIcon,
                    optionVisible: !state.optionVisible
                }
            })
        }

    const passedContext: ISelectContext = {
        onChange: handleOnChange,
        selectValue: natValue,
    };

    return <SelectContext.Provider value={passedContext}>
        <div
            className={classes}
            // onClick={handleClick}
            style={width ? { width: Number.isFinite(width) ? width + 'px' : width } : {}}
            {...restProps}
        >
            <div onClick={handleClick}>{value ? value : natValue}</div>
            {
                showArrow ?
                    <img src={selectState.selectIcon ? up : down} alt="" />
                    :
                    null
            }
            <div className={optionClasses} onClick={handleClick}>
                {children}
            </div>
        </div>
    </SelectContext.Provider>
}

Select.Option = Option;

export default Select;