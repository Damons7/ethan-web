import React, { InputHTMLAttributes, ReactNode, useEffect } from 'react'
import { classNames } from '../utils'
import { useState } from 'react';
import './index.less'

type changeCallBack = (value: string) => void;
type textType = "*" | "number" | "email"
const NUMBER_TIP = "请输入有效的数字!"
const EMAIL_TIP = "请输入有效的邮箱"
const MIN_TIP = "输入框长度不能小于"
const MAX_TIP = "输入框长度不能小于"
const TEXT_NULL = "输入框不能为空"

const isNumber = function (text: string) {
    const reg = /\D/g
    return !reg.test(text)
}
const isEmail = function (text: string) {
    const reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if (!reg.test(text)) {
        return false;
    } else {
        return true;
    }
}
export interface BaseInputProps {
    value?: string,
    type?: string,
    disabled?: true,
    className?: string;
    inputTextNullTip?: string,
    inputNull?: boolean;
    showTip?: {
        text: boolean,
        border: boolean
    } | boolean,
    min?: number
    max?: number
    textType?: textType
    addonBefore?: ReactNode,
    addonAfter?: ReactNode,
    onFocus?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    onBlur?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    onChangeInput?: changeCallBack
}

type NativeInputProps = InputHTMLAttributes<HTMLInputElement> & BaseInputProps;
//Partial 设置为可选属性
export type InputProps = Partial<NativeInputProps>;
export const Input: React.FC<InputProps> = (props) => {
    const {
        className,
        value = "",
        type,
        disabled,
        showTip,
        min,
        max,
        textType = "*",
        onFocus,
        onBlur,
        addonBefore,
        addonAfter,
        inputTextNullTip = "输入框不能为空",
        onChangeInput,
        inputNull = false,
        ...restProps
    } = props;
    let custom = false
    if (max || min || textType !== "*") {
        custom = true
    }
    let [newShowTip, setNewShowTip] = useState(showTip ? showTip : custom)
    let [val, setVal] = useState(value)
    let [textNull, setTextNull] = useState(false)
    let showBorder = newShowTip && newShowTip !== true && newShowTip.border === true
    let [tip, setTip] = useState(inputTextNullTip)
    const classes = classNames("ethan-input-inner", className, {
        'ethan-input-disabled': disabled,
        'ethan-input-group-addon-before': addonAfter,
        'ethan-input-group-addon-after': addonBefore,
        'ethan-input-null': ((newShowTip === true) && textNull) || (showBorder && textNull)
    });
    const inputGroup = classNames("ethan-input-group", "", {
        'ethan-input-disabled': disabled,
    });
    const tips = (newShowTip && textNull)
    useEffect(() => {
        setVal(value)
    }, [value])
    useEffect(() => {
        setTextNull(inputNull)
    }, [inputNull])
    const changHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = event.target.value
        !disabled && setVal(value)
        if (onChangeInput && !disabled) {
            onChangeInput(value)
        }
    }
    const focusHandle = (event: React.FocusEvent<HTMLInputElement>) => {
        if (onFocus) {
            onFocus(event)
        }
    }
    const blurHandle = (event: React.FocusEvent<HTMLInputElement>) => {
        if (val === "") {
            // setTip(TEXT_NULL)
            setTextNull(true)
        } else {
            setTextNull(false)
        }
        let flag = false
        if (min && min > val.length) {
            setTip(MIN_TIP + min)
            flag = true
        } else if (max && max < val.length) {
            setTip(MAX_TIP + max)
            flag = true
        } else if (textType === "number" && !isNumber(val)) {
            setTip(NUMBER_TIP)
            flag = true
        } else if (textType === "email" && !isEmail(val)) {
            setTip(EMAIL_TIP)
            flag = true
        }

        if (flag) {
            setTextNull(true)
        }
        if (onBlur) {
            onBlur(event)
        }

    }
    return <div className="ethan-input">

        <div className={inputGroup}>
            {addonBefore ? <span className="ethan-input-group-addon ethan-input-group-addon-before">{addonBefore}</span> : null}
            <input value={val} onChange={changHandle}
                className={classes} type={type ? type : "text"}
                disabled={disabled}
                onBlur={blurHandle}
                onFocus={focusHandle}
                {...restProps} />
            {addonAfter ? <span className="ethan-input-group-addon ethan-input-group-addon-after">{addonAfter}</span> : null}

        </div>
        {tips ? <div className="inputTextNullTip">{tip}</div> : null}
    </div>
}
Input.displayName = "Input";
export default Input