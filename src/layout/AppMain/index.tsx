import { routers } from "@/routers"
import { Route, Switch } from "react-router-dom";
import './index.less'

export default function AppMain() {
    // router配置
    const routerConfigs = routers.map(router => {
        const { path, exact, render } = router;
        return (
            <Route
                key={path}
                path={path}
                exact={exact}
                render={render}
            />)
    });

    return (
        <main>
            <Switch>
                {routerConfigs}
            </Switch>
        </main>

    )
}