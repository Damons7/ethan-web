interface StringIndex {
    [key: string]: any
}
export function classNames(basicClass: string = "", custonClass: string = "", options: StringIndex) {
    let className = `${basicClass} ${custonClass}`
    Object.keys(options).map((item: string) => {
        if (options[item]) {
            className += ` ${item}`
        }
        return ''
    })
    return className.trim()
}