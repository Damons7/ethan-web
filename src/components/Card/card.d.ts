// 
export interface ICard {
    title?: string,
    className?: string,
    headerClassName?: string,
}
export type NativeProps = ICard & Partial<HTMLAttributes<HTMLElement>>;