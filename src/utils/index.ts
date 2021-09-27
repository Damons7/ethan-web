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


type detailDateType = {
    week: string
    dayType: {
        dayTypeName: string,
        isOver12: boolean
    },
    minutes: string
    hours: number
}
// 获取时间详细信息
export const getDetailDate
    : (date: Date | string) => detailDateType
    = date => {
        const obj: detailDateType = {
            week: "", //星期
            dayType: {
                dayTypeName: "",
                isOver12: false,
            },//早中晚
            hours: 0,//小时
            minutes: '00' //分钟
        };
        if (!date) return obj;

        if (typeof date === 'string') date = new Date(date)

        //星期配置
        const weekConfig = ['日', '一', '二', '三', '四', '五', '六'];

        //获取早中晚
        const getDayType
            : (hours: number) => any
            = hours => {
                const dayTypeConfig = {
                    '午夜': [0],
                    '半夜': [1, 3],
                    '凌晨': [4, 5],
                    '清晨': [6],
                    '上午': [7, 11],
                    '中午': [12],
                    '下午': [13, 16],
                    '傍晚': [17],
                    '黄昏': [18],
                    '晚上': [19, 21],
                    '深夜': [22, 24]
                }
                const dayTypeConfigVal = Object.values(dayTypeConfig);
                const findIndex = dayTypeConfigVal.findIndex(item => {
                    if (item.length < 2) {
                        return item[0] === hours;
                    }
                    return hours >= item[0] && hours <= item[1]
                })

                return ~findIndex ?
                    {
                        dayTypeName: Object.keys(dayTypeConfig)[findIndex],
                        isOVer12: findIndex > 5
                    }
                    :
                    {

                    }

            }

        const minutes = date.getMinutes();//当前时间 分钟
        const hours = date.getHours();//当前时间 小时
        obj.dayType = getDayType(hours)

        obj.minutes = minutes < 10 ? minutes + '0' : minutes + '';

        obj.hours = hours;
        obj.week = weekConfig[date.getDay()] as string;
        return obj;
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

// 获取歌曲时间长度（指定规则）
export const getTimeLength
    : (data: number) => string
    = data => {
        const _data = Math.floor(data / 1000);
        if (_data < 1) {
            return '0:00'
        }
        if (_data < 60) {
            return `0:${_data < 10 ? '0' + _data : _data}`
        } else {
            const m = Math.floor(_data / 60);
            const s = _data - m * 60
            return m + `:${s < 10 ? '0' + s : s}`;
        }
    }

//判断是否为移动端
export function isMobile() {
    return !!navigator.userAgent.match(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i
    );
}

//生成随机整数 【n,m】
export function randomNum(minNum: number, maxNum?: any) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1 + '')
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum + '');
        default:
            return 0;
    }
}
