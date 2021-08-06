import { Card } from '@common/index';
import { NativeProps } from '../card';
import './index.less'

interface ISkillCard {
    skill?: Array<string>
}
export type _NativeProps = ISkillCard & Partial<NativeProps>;

export const SkillCard = (props: _NativeProps) => {
    const {
        title = 'kill',
        className,
        skill,
        headerClassName,
        ...restProps
    } = props;

    return (
        <Card title={title}
            className={className}
            headerClassName={`${headerClassName} skill-card-header`}
            bodyClassName='skill-card-body'
            {...restProps}
        >
            {
                skill?.map((item, index) => <span key={item + index}>{item}</span>)
            }
        </Card>
    )
}

export default SkillCard;