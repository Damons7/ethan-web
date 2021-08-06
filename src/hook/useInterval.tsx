import { useEffect, useRef } from 'react'

//定时器hook
export const useInterval
    : (callback: any, delay: number | null) => void
    = (callback, delay) => {
        const savedCallback: React.MutableRefObject<any> = useRef();

        useEffect(() => {
            savedCallback.current = callback;
        });

        useEffect(() => {
            const tick
                : () => void
                = () => {
                    savedCallback.current()
                }
            if (delay !== null) {
                const id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }
export default useInterval;