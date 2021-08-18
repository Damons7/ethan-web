import Cloud from '@components/weatherIcon/Cloud'
import { routers } from "@/routers"
import { GlobalContext } from "./context";
import React, { useState } from 'react'
import { Route, Switch } from "react-router-dom";
import './index.less'

interface IAppMain {
    animate: React.ReactNode | null
}

export default function AppMain(props: IAppMain) {
    const { animate } = props;
    const [weather, setWeather] = useState(<Cloud/>)

    const globalContext = {
        weather: weather, //当前天气
        setWeather: (val: JSX.Element) => {
            setWeather(val)
        }  
    }

    // router配置
    const routerConfigs = routers.map(router => {
        const { path, exact, render } = router;
        return (
            <Route
                key={path}
                path={path}
                exact={exact}
                render={render}
            >
                {animate}
            </Route>
        )
    });

    return (
        <GlobalContext.Provider value={globalContext}>
            <main>
                <Switch>
                    {routerConfigs}
                </Switch>
            </main>
        </GlobalContext.Provider>

    )
}