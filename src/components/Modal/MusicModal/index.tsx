import { Modal } from '@common/index';
import { MusicBoxIcon, LoadingIcon } from '@components/Icon'
import { TipPage, Button, Input, Pagination} from '@/common';
import { searchMusic } from '@/api'
import React, { useReducer, useEffect } from 'react'
import './index.less'
console.log(111222);

// initState类型
interface IMusicModal {
    visible: boolean,
    title?: string,
    onCancel: () => void,
    onOk: () => void,
}
//初始化页面配置
const initPageConfig = {
    page: 1,
    pageSize: 6,
    total: 50
}
const MusicModal = (props: IMusicModal) => {
    const {
        visible,
        onOk,
        onCancel,
        title,
        ...restProps
    } = props;

    const initState = {
        tipConfig: {
            isShow: true,
            tip: "开启属于你的音乐盒子!",
            icon: <MusicBoxIcon style={{ width: '200px', height: '200px' }} />
        },
        inputVal: "",
        pageConfig: initPageConfig
    }

    // reducer
    const musicModalReducer
        : (state: any, action: any) => any
        = (state, action) => {
            switch (action.type) {
                // 设置搜索值
                case 'setInputVal':
                    return {
                        ...state,
                        inputVal: action.inputVal
                    }
                // 设置页面配置
                case 'setPageConfig':
                    return {
                        ...state,
                        pageConfig: action.pageConfig
                    }
                // 设置提示配置  
                case 'setTipConfig':
                    return {
                        ...state,
                        tipConfig: action.tipConfig
                    }
                // 默认返回initState初始化
                case 'init':
                    return {
                        ...initState,
                    };
                default:
                    return state;
            }
        }

    const [state, dispatch] = useReducer(musicModalReducer, initState);

    const search = () => {
        const { inputVal, pageConfig: { page, pageSize } } = state
        if (!inputVal) return;

        dispatch({
            type: "setTipConfig",
            tipConfig: {
                isShow: true,
                tip: "拼了命的搜寻中",
                icon: <LoadingIcon style={{ width: '180px', height: '180px' }} />
            }
        })

        searchMusic({
            keywords: inputVal,
            limit: pageSize,
            offset: page
        }).then(res => {
            dispatch({
                type: "setTipConfig",
                tipConfig: {
                    ...initState.tipConfig,
                    isShow: false
                }
            })
            console.log(res, '结果');
        }).catch(console.log)
    }
    return (
        <Modal
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            title={title}
            hasFoot={false}
            {...restProps}
        >
            <div className='music-modal-body'>
                <div className='music-modal-body-input'>
                    <Input placeholder="搜索属于你的音乐" value={state.inputVal}
                        onChange={e => dispatch({ type: "setInputVal", inputVal: e.target.value })}
                        addonAfter={<Button size='lg' onClick={search}>Go</Button>}
                    />
                </div>
                {
                    state.tipConfig.isShow ?
                        <div className='music-modal-body-tip'>
                            <TipPage tip={state.tipConfig.tip} icon={state.tipConfig.icon} />
                        </div>
                        :
                        <div className='music-modal-body-search'>
                            {/* <Pagination total={state.pageConfig.total} 
                            pageSize={state.pageConfig.pageSize} current={state.pageConfig.page} 
                            callbackCurrent={(cur)=>{
                                dispatch({type:'setPageConfig',pageConfig:{...state.pageConfig,page:cur}})
                            }}/> */}
                        </div>
                }
            </div >
        </Modal >
    )
}

export default MusicModal;