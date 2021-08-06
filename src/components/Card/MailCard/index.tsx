import { Card } from '@common/index';
import mail from '@images/mail.png'
import link from '@images/link.png'
import { NativeProps } from '../card';
import './index.less'

interface IMailCard {
    email?: string
}
export type _NativeProps = IMailCard & Partial<NativeProps>;

export const MailCard = (props: _NativeProps) => {
    const {
        title = 'Mail',
        className,
        email,
        headerClassName,
        ...restProps
    } = props;

    return (
        <Card title={title}
            className={className}
            headerClassName='headerClassName'
            bodyClassName='mail-card-body'
            onClick={() => { window.location.href = `mailto:${email}` ?? "" }} 
            {...restProps}
        >
            <img src={mail} alt='' />
            <span>{email}</span>
            <img src={link} alt='' className='card-link'/>
        </Card>
    )
}

export default MailCard;