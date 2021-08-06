import { Tooltip } from '@/common'
import { formatDate } from '@/utils'
import { useInterval } from '@/hook'
import { routers } from "@/routers"
import Date from '@images/date.png'
import { useState, useMemo } from 'react'
import { useHistory } from "react-router-dom";
import './index.less'

interface IAppHeader{
  isRoute:()=>void
}

export default function AppHeader (props: IAppHeader)  {
  const { isRoute } = props
  const time = formatDate(new window.Date(), 'yyyy-MM-dd HH:mm:ss')

  const [nowTime, setNowTime] = useState(time.split(" ")[1])
  const [activeIndex, setActiveIndex] = useState(0)
  const history = useHistory();
  // 路径
  let pathName = window.location.pathname;

  // 设置时间定时器
  useInterval(() => {
    setNowTime(formatDate(new window.Date(), 'HH:mm:ss'));
  }, 1000)

  const getLinkConfig: (JSX.Element | null)[] = useMemo(() => {
    // 切换nav目录事件
    const changeNav
      : (path: string, index: number) => void
      = (path, index) => {
        history.push({
          pathname: path,
        })
        setActiveIndex(index)
        isRoute && isRoute()
      }

    return routers.map((router, index) => {
      const { path, name, noRender } = router;

      if (noRender) return null;

      let isInitPath = false;
      if (pathName === '/') {
        pathName = ''
        isInitPath = true;
      }

      if (pathName.length && ~pathName.indexOf(path)) {
        setActiveIndex(index);
      }

      return (
        <span
          key={index}
          className={`${(activeIndex === index || isInitPath) ? 'nav-active' : ''}`}
          onClick={() => changeNav(path, index)}
        >
          {name}
        </span>
      )
    })
  }, [activeIndex, history])

  return (
    <header className='flex-between'>
      <nav>
        <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbH0HglbFnJVFUR6EiVr8dPl88G-uT8mFfIg&usqp=CAU' />
        {getLinkConfig}
      </nav>

      <div className='header-date flex-between'>
        <img src={Date} alt='' />
        <Tooltip title={time.split(" ")}>
          <span>
            {nowTime}
          </span>
        </Tooltip>
      </div>
    </header>
  )
}

