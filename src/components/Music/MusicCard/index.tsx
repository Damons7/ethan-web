import { CrumbIcon, BroadcastIcon, PausecastIcon, NextMusicIcon, PreviousMusicIcon } from '@components/Icon'
import musicImg from '@images/music.gif'
import { Progress } from '@/common'
import { useReducer, useRef, useEffect } from 'react'
import { classNames } from '@/common/utils'
import './index.less'

export const MusicCard = () => {
    const audioDom: any = useRef()
    const initState = {
        tipsVisible: false,
        detailVisible: false,
        isBroadcast: true,
        onPause: true,
        audioDom: ""
    }
    useEffect(() => {
        // audioDom.current.paused && audioDom.current.play()
        //     .catch((err: any) => {
        //         console.log(err, "err");
        //     });

    }, [])
    // reducer函数
    const musicCardReducer
        : (state: any, action: any) => any
        = (state, action) => {
            switch (action.type) {
                case 'setDetailVisible':
                    return {
                        ...state,
                        detailVisible: action.detailVisible
                    }
                case 'setIsBroadcast':
                    return {
                        ...state,
                        isBroadcast: action.isBroadcast,
                        onPause: !state.onPause
                    }
                case 'setAudioDom':
                    return {
                        ...state,
                        audioDom: action.audioDom
                    }
                case 'setonPause':
                    return {
                        ...state,
                        onPause: action.onPause
                    }

                default:
                    return state;
            }
        }

    const [state, dispatch] = useReducer(musicCardReducer, initState);
    // 设置class
    const classes = classNames("music-card", '', {
        "music-hidden": state.tipsVisible,
    });

    // 设置class
    const detailClasses = classNames("music-detail", '', {
        "music-detail-show": state.detailVisible,
    });

    return <div className='ethan-music-card'>
        <img src={musicImg} alt="" onClick={() => { }} />
        <div className={classes}>
            <div className='music-top'>
                <audio
                    ref={audioDom}
                    autoPlay
                    src='https://music.163.com/song/media/outer/url?id=406730444.mp3'
                />
                <CrumbIcon
                    style={{ width: '20px', height: "20px", color: "#333" }}
                    onClick={() => dispatch({ type: "setDetailVisible", detailVisible: !state.detailVisible })}
                />
                <div className='music-top-name'>
                    <span>海阔天空1111111111111111111</span>
                </div>
                <PreviousMusicIcon
                    style={{ width: '18px', height: "18px", color: "#333" }}
                />
                {
                    state.isBroadcast ?
                        <BroadcastIcon
                            style={{ width: '28px', height: "28px", color: "#333" }}
                            onClick={() => {
                                //播放
                                const audio = audioDom.current;
                                audio.paused && audio.play();
                                dispatch({ type: 'setIsBroadcast', isBroadcast: !state.isBroadcast })
                            }}
                        />
                        :
                        <PausecastIcon style={{ width: '28px', height: "28px", color: "#333" }}
                            onClick={() => {
                                //暂停
                                const audio = audioDom.current;
                                audio.pause();
                                dispatch({ type: 'setIsBroadcast', isBroadcast: !state.isBroadcast })
                            }}
                        />
                }
                <NextMusicIcon style={{ width: '18px', height: "18px", color: "#333" }} />
            </div>
            <div className={detailClasses}>
                <div></div>
                <div className='music-detail-bottom'>
                    <Progress
                        totalTime={30}
                        onPause={state.onPause}
                        className="music-detail-progress"
                    />
                    <div className='music-detail-controls'>
                        <PreviousMusicIcon
                            style={{ width: '18px', height: "18px", color: "#333" }}
                        />
                        {
                            state.isBroadcast ?
                                <BroadcastIcon
                                    style={{ width: '28px', height: "28px", color: "#333" }}
                                    onClick={() => {
                                        //播放
                                        const audio = audioDom.current;
                                        audio.paused && audio.play && audio.play();
                                        dispatch({ type: 'setIsBroadcast', isBroadcast: !state.isBroadcast })
                                    }}
                                />
                                :
                                <PausecastIcon style={{ width: '28px', height: "28px", color: "#333" }}
                                    onClick={() => {
                                        //暂停
                                        const audio = audioDom.current;
                                        audio.pause();
                                        dispatch({ type: 'setIsBroadcast', isBroadcast: !state.isBroadcast })
                                    }}
                                />
                        }
                        <NextMusicIcon style={{ width: '18px', height: "18px", color: "#333" }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}