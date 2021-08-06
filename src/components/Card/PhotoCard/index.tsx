import { Card } from '@common/index';
import { NativeProps } from '../card';
import './index.less'

export const PhotoCard = (props: NativeProps) => {
    const {
        title = 'Photo',
        className,
        headerClassName,
        ...restProps
    } = props;

    return (
        <Card title={title}
            className={className}
            headerClassName={`${headerClassName} photo-card-header`}
            bodyClassName='photo-card-body'
            {...restProps}
        >
            <img src="http://img01.yohoboys.com/contentimg/2018/11/22/13/0187be5a52edcdc999f749b9e24c7815fb.jpg" alt=''/>
        </Card>
    )
}

export default PhotoCard;