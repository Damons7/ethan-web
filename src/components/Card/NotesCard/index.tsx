import { Card } from '@common/index';
import { NativeProps } from '../card';
import './index.less'

export const NotesCard = (props: NativeProps) => {
    const {
        title = 'My Notes',
        className,
        headerClassName,
        children,
        ...restProps
    } = props;

    return (
        <Card 
        title={title}
            className={className}
            headerClassName={`${headerClassName} notes-card-header`}
            bodyClassName='aboutme-card-body'
            {...restProps}
        >
           {children}
        </Card>
    )
}

export default NotesCard;