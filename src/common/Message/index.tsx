import ReactDOM from "react-dom";
import wink from '@images/wink.png'
import success from '@images/success.png'
import warn from '@images/warn.png'
import error from '@images/error.png'
import { classNames } from "../utils";
import "./index.less";

type messageConfigType = {
    type?: string,
    msg?: string | number,
    bottomMsg?: string | number,
    duration?: number,
    className?: string
    color?: string,
    icon?:string
}
type messageAPIType = {
    [key: string]: (config: messageConfigType) => void
}

export const Message: any = (props: messageConfigType) => {
    const {
        duration = 3,
    } = props;

    let notification: HTMLDivElement | null = null;

    if (!notification) {
        notification = document.createElement("div");
        notification.classList.add('ethan-message');
        document.body.appendChild(notification);
    }

    const wrap = document.createElement("div")
    wrap.classList.add("ethan-message-fade-in")
    const MessageJsx = (<ShowMessage {...props} />)
    ReactDOM.render(MessageJsx, wrap)
    notification.appendChild(wrap)

    if (duration !== 0) {
        const timer = setTimeout(() => {
            if (wrap) {
                wrap.classList.remove("ethan-message-fade-in")
                wrap.classList.add("ethan-message-fade-out")
                let time = setTimeout(() => {
                    wrap && wrap.remove()
                    clearTimeout(time)
                }, 300)
            }
            clearTimeout(timer)
            notification && notification.remove()
        }, duration * 1000)
    }
    return null;
};

const ShowMessage = (props: any) => {
    const { type = 'info',icon, msg, bottomMsg, className, color } = props;
    const classes = classNames("ethan-message-content", className, {
        [`ethan-message-${type}`]: true
    });

    const getImg
        : (type: string) => string
        = type => {
            let img = '';

            switch (type) {
                case 'info':
                    img = '';
                    break;
                case 'success':
                    img = success;
                    break;
                case 'thank':
                    img = wink;
                    break;
                case 'error':
                    img = error;
                    break;
                case 'warn':
                    img = warn;
                    break;
                default:
                    break;
            }
            return img;
        }

    return <div className={classes}>
        <img src={icon??getImg(type)} alt='加载失败' />
        <p style={{ color }}>{msg}</p>
        <p style={{ color }}>{bottomMsg}</p>
    </div>
}

const messageAPI
    : messageAPIType
    = {
    info: config => { Message({ type: 'info', ...config }) },
    success: config => { Message({ type: 'success', ...config }) },
    thank: config => { Message({ type: 'thank', ...config }) },
    error: config => { Message({ type: 'error', ...config }) },
    warn: config => { Message({ type: 'warn', ...config }) }
}

Message.info = messageAPI.info;
Message.success = messageAPI.success;
Message.error = messageAPI.error;
Message.warn = messageAPI.warn;
Message.thank = messageAPI.thank;

export default Message;