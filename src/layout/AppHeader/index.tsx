import { Tooltip } from '@/common'
import { formatDate,getDetailDate } from '@/utils'
import { useInterval } from '@/hook'
import { routers } from "@/routers"
import Date from '@images/date.png'
import Avatar from '@images/avatar.jpg'
import { useState, useMemo, useRef } from 'react'
import { useHistory } from "react-router-dom";
import './index.less'

interface IAppHeader {
  isRoute: () => void
}

export default function AppHeader(props: IAppHeader) {
  const { isRoute } = props
  const time = formatDate(new window.Date(), 'yyyy-MM-dd HH:mm:ss')

  const [nowTime, setNowTime] = useState(time)
  const [activeIndex, setActiveIndex] = useState(0)
  let pathName = useRef(window.location.pathname)
  pathName.current = window.location.pathname
  const history = useHistory();

  // 设置时间定时器
  useInterval(() => {
    setNowTime(formatDate(new window.Date(), 'yyyy-MM-dd HH:mm:ss'));
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
      if (pathName.current === '/') {
        pathName.current = ''
        isInitPath = true;
      }

      if (pathName.current.length && ~pathName.current.indexOf(path)) {
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
  }, [activeIndex, history,isRoute])

  return (
    <header className='ethan-header'>
      <nav>
        <div className='ethan-header-avatar'>
          <img alt='' src={Avatar} />
        </div>
        {getLinkConfig}
      </nav>

      <div className='header-date'>
        <img src={Date} alt='' />
        <Tooltip title={[
          ...nowTime.split(" "),
          `礼拜${getDetailDate(nowTime).week}`
          ]}>
          <span>
            {nowTime.split(' ')[1]}
          </span>
        </Tooltip>
      </div>
    </header>
  )
}

