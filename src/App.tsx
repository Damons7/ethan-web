import { useState, useEffect } from 'react';
import AppHeader from '@/layout/AppHeader'
import AppMain from '@/layout/AppMain'
import { Redirect, Switch, BrowserRouter } from "react-router-dom";
import SwitchAnimate from '@components/SwitchAnimate'

export const App = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        let loading: HTMLElement | null = document.getElementById("pageloading");
        loading && document.body.removeChild(loading);
        loading = null;
    }, []);

    // 添加router跳转动画的组件
    const isRoute
        : () => void
        = () => { setAnimate(true) }

    //删除router跳转动画的组件  
    const clearAnimate
        : (n: boolean) => void
        = n => { setAnimate(n) }

    return <BrowserRouter>
        <AppHeader isRoute={isRoute} />
        <Switch>
            <Redirect to="/home" path="/" exact />
            <AppMain animate={
                animate ?
                    <SwitchAnimate type='leave' callback={clearAnimate} />
                    :
                    null}
            />
        </Switch>
    </BrowserRouter>
}