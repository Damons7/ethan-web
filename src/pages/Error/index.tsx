
import './index.less'
import fuckImg from '@images/fuck.jpg'

interface IError {
    err?: string
}

export const Error = (props: IError) => {
    const { err = '页面出错了~~' } = props;

    return (
        <div className='ethan-error'>
            <div>
                <img src={fuckImg} alt='' />
                <span>{err}</span>
            </div>
        </div>
    )
}

export default Error;