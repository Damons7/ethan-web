import { Card } from '@common/index';
import github from '@images/github.png'
import link from '@images/link.png'
import { NativeProps } from '../card';
import './index.less'

interface IGitCard {
    git?: string
}
export type _NativeProps = IGitCard & Partial<NativeProps>;

export const GitCard = (props: _NativeProps) => {
    const {
        title = 'Git Hub',
        className,
        git,
        headerClassName,
        ...restProps
    } = props;

    return (
        <Card title={title}
            className={className}
            headerClassName='headerClassName'
            bodyClassName='git-card-body'
            onClick={() => { window.open(git) }}
            {...restProps}
        >
            <div className='git-card-img'>
                <img src={github} alt='' />
            </div>
            <span>{git}</span>
            <img src={link} alt='' className='card-link'/>
        </Card>
    )
}

export default GitCard;