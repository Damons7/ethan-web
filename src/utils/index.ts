// 时间格式化
export const formatDate
    : (date: Date | string, fmt: string) => string
    = (date, fmt = 'yyyy-MM-dd HH:mm:ss') => {
        if (!date) return ''

        if (typeof date === 'string') date = new Date(date)

        let o: any = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "H+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

export type getParameterType = {
    [key: string]: string | number
}
//url 参数格式 
export const getParameter
    : (data: getParameterType | undefined) => string
    = data => {
        let parameter = '';
        if (data) {
            let temp = '?';
            const and = '&';
            for (const [attr, value] of Object.entries(data)) {
                temp = temp + `${attr}=${value}` + and;
            }
            temp.slice(0, -1); //删除最后一个字符 （&）
            parameter = temp;
        }
        return parameter;
    }