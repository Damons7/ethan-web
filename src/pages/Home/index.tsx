import { Modal, Message } from '@common/index'
import FixModal from '@components/Modal/FixModal'
import AppFooter from '@/layout/AppFooter'
import unlike from '@images/unlike.png'
import like from '@images/like.png'
import description from '@images/description.png'
import message from '@images/message.png'
import angry from '@images/angry.png'
import fix from '@images/fix.png'
import sos from '@images/sos.png'
import SwitchAnimate from '@components/SwitchAnimate'
import React, { useReducer } from 'react'
import './index.less'

// initState类型
type stateType = {
    likeVisible: boolean,
    unlikeVisible: boolean,
    descVisible: boolean,
    messageVisible: boolean,
    fixVisible: boolean,
    animate: boolean
}

export const Home = () => {

    // 初始化state
    const initState: stateType = {
        animate: true,
        likeVisible: false,
        unlikeVisible: false,
        descVisible: false,
        messageVisible: false,
        fixVisible: false
    }

    // 功能reducer
    const functReducer
        : (state: stateType, action: { type?: string, cleanN?: boolean }) => any
        = (state, action) => {
            const { cleanN } = action;
            switch (action.type) {
                case 'loading':
                    return {
                        ...state,
                        animate: cleanN
                    }
                // 点赞功能
                case 'like':
                    return {
                        ...state,
                        likeVisible: true
                    }

                // 不喜欢功能
                case 'unlike':
                    return {
                        ...state,
                        unlikeVisible: true
                    }

                // 说明功能
                case 'description':
                    return {
                        ...state,
                        descVisible: true
                    }

                // 留言功能
                case 'message':
                    return {
                        ...state,
                        messageVisible: true
                    }

                // 设置功能   
                case 'fix':
                    return {
                        ...state,
                        fixVisible: true
                    }

                // 默认返回initState初始化
                case 'init':
                    return {
                        ...initState,
                        animate: false, //入场动画不需要改变
                    };
                default:
                    return state;
            }
        }

    const [state, dispatch] = useReducer(functReducer, initState);

    const handleOk = () => {
        // dispatch({ type: '' })
        // Message.thank({msg:'THANK U !',bottomMsg:"116"})
    };

    return (
        <React.Fragment>
            <div className='home'>
                <section className='home-p'>
                    <p> Welcome My Home ,</p>
                    <p>
                        I am Ethan.li.☹
                    </p>
                </section>
                <section className='home-func'>
                    <div onClick={() => { Message.thank({ msg: "THANK U !", bottomMsg: "NO . 8796" }) }}>
                        <img src={like} alt="" />
                        <span>点赞</span>
                    </div>
                    <div onClick={() => { Message.info({ msg: "别点了没反应！", bottomMsg: "--", icon: angry }) }}>
                        <img src={unlike} alt="" />
                        <span>不行</span>
                    </div>
                    <div onClick={() => { Message.warn({ msg: "该功能正在抢救中", bottomMsg: "-@#- -%*- -^$-", icon: sos }) }}>
                        <img src={description} alt="" />
                        <span>说明</span>
                    </div>
                    <div onClick={() => { Message.warn({ msg: "该功能正在抢救中", bottomMsg: "-@#- -%*- -^$-", icon: sos }) }}>
                        <img src={message} alt="" />
                        <span>留言</span>
                    </div>
                    <div onClick={() => dispatch({ type: 'fix' })}>
                        <img src={fix} alt="" />
                        <span>设置</span>
                    </div>
                </section>
                {/* 不喜欢窗口 */}
                <Modal visible={state.unlikeVisible} onOk={handleOk} onCancel={() => dispatch({ type: 'init' })}>

                </Modal>

                {/* 说明窗口 */}
                <Modal
                    visible={state.descVisible}
                    onOk={handleOk}
                    onCancel={() => dispatch({ type: 'init' })}
                    title='说明'>
                </Modal>

                {/* 留言窗口 */}
                <Modal visible={state.messageVisible} onOk={handleOk} onCancel={() => dispatch({})}>

                </Modal>

                {/* 设置窗口 */}
                <FixModal
                    visible={state.fixVisible}
                    onOk={handleOk}
                    onCancel={() => dispatch({ type: 'init' })}
                    title='设置'
                />

            </div>
            <AppFooter />
            {
                state.animate ?
                    <SwitchAnimate type='enter' callback={n => { dispatch({ type: "loading", cleanN: n }) }} />
                    :
                    null
            }
        </React.Fragment>
    )
}

export default Home;