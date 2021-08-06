import { useState, useEffect } from 'react';
import './index.less'

interface ISwitchAnimate {
  callback: (n: boolean) => void,
  type: 'leave' | 'enter'
}

// 加载页面过场动画
export const SwitchAnimate = (props: ISwitchAnimate) => {

  const { callback, type } = props
  const boxnum = 16;
  const list = [];
  for (let i = 0; i < boxnum; i++) {
    list.push({ active: false })
  }
  const [animateState, setAnimateState] = useState({
    active: true,
    dom: list // 16个距形
  })

  useEffect(() => { 
    let order = shuffle(16);
    const { dom: newDom } = animateState;
    let i = -1;
    const aniTimeout = () => {
      i++;
      if (i >= order.length) return;
      newDom[order[i]].active = true;
      const _animate = { ...animateState }
      _animate.dom = newDom;
      setAnimateState(_animate)
    }
    const setAnimate = setInterval(aniTimeout, 17)
    let setCallback = setTimeout(() => {
      callback && callback(false)
    }, 1000);
    return () => {
      clearInterval(setAnimate)
      clearTimeout(setCallback)
    }
  }, [type,callback])

  // 洗牌算法 随机生成乱序数组
  const shuffle
    : (n: number) => Array<number>
    = n => {
      //生成n个数组
      const arr = new Array(n);
      for (var i = 0; i < n; i++) {
        arr[i] = i;
      }
      //每次抽出一个，放在另一堆。因为要在数组里抽出元素，把后面的所有元素向前拉一位，所以很耗时。
      const newArr = [];
      for (let i = n; i > 0; i--) {
        const length = Math.floor(Math.random() * i);
        newArr.push(arr[length]);
        arr.splice(length, 1);
      }
      return newArr;
    }

  return (
    <div className={`ethan-animate-${type}`}>
      {animateState.dom.map((item, index) => <span key={index} className={item.active ? `ethan-active-${type}` : ''} />)}
    </div>
  )
}

export default SwitchAnimate;



