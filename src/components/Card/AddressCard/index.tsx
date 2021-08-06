import { Card } from '@common/index';
import { NativeProps } from '../card';
import './index.less'

interface IAddressCard {
    address?: {
        province?:string,
        city?:string
    }
}
export type _NativeProps = IAddressCard & Partial<NativeProps>;

export const AddressCard = (props: _NativeProps) => {
    const {
        title = 'Address',
        className,
        address,
        headerClassName,
        ...restProps
    } = props;

    return (
        <Card title={title}
            className={className}
            headerClassName='headerClassName'
            bodyClassName='address-card-body'
            {...restProps}
        >
            <span>{address?.province}</span>
            <span>{address?.city}</span>
        </Card>
    )
}

export default AddressCard;