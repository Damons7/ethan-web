import { CrumbIcon, BroadcastIcon, PausecastIcon, NextMusicIcon, PreviousMusicIcon, DownIcon, UpIcon } from '@components/Icon'
import musicImg from '@images/music.gif'
import { Progress } from '@/common'
import { useReducer, useRef, useEffect } from 'react'
import { classNames } from '@/common/utils'
import './index.less'

const musicData = [
    {
        id: 1294467974,
        name: '长沙HOOD',
        singer: 'KEY.L刘聪 / $CC731',
        src: "https://music.163.com/song/media/outer/url?id=1294467974.mp3",
        img: "https://p1.music.126.net/tjs6JyPbZFFSvlkLbSqJzw==/109951163412049985.jpg",
        timeLength: 244000
    },
    {
        id: 2788529,
        name: 'Loving Strangers',
        singer: 'Jocelyn Pook',
        src: "https://music.163.com/song/media/outer/url?id=2788529.mp3",
        img: "https://p2.music.126.net/4YLeBH86MTluZLqojCz9nQ==/109951164616015223.jpg",
        timeLength: 239000
    },
    {
        id: 1819036135,
        name: 'Calling My Phone',
        singer: 'Lil Tjay / 6LACK',
        src: "https://music.163.com/song/media/outer/url?id=1819036135.mp3",
        img: "https://p2.music.126.net/A2Myqv8MG489RDVcHXPyWw==/109951165711757957.jpg",
        timeLength: 206000
    },
    {
        id: 33894312,
        name: '情非得已',
        singer: '群星',
        src: "https://music.163.com/song/media/outer/url?id=33894312.mp3",
        img: "https://p1.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg",
        timeLength: 268000
    }
]
const musicDataLength = musicData.length;
export const MusicCard = () => {
    const audioDom: any = useRef()
    const initState = {
        tipsVisible: false,
        detailVisible: false,
        isBroadcast: true,
        onPause: true,
        audioDom: "",
        nowTimeLength: 268000,
        reStart: false,
        musicEnd: false,
        nowMusicIndex: 0
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
                case 'setOnPause':
                    return {
                        ...state,
                        onPause: action.onPause
                    }
                case 'setReStart':
                    return {
                        ...state,
                        reStart: action.reStart,
                        musicEnd: false
                    }
                case 'setMusicEnd':
                    return {
                        ...state,
                        musicEnd: action.musicEnd
                    }
                //设置当前音乐配置
                case 'setNowMusicIndex':
                    return {
                        ...state,
                        nowMusicIndex: action.nowMusicIndex,
                        reStart: !state.reStart,
                        musicEnd: false
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

    //播放歌曲
    const onBroadcast = () => {
        const audio = audioDom.current;
        audio.paused && audio.play();
        state.isBroadcast &&dispatch({ type: 'setIsBroadcast', isBroadcast: false })
    }

    //暂停歌曲
    const onPausecast = () => {
        const audio = audioDom.current;
        audio.pause();
        dispatch({ type: 'setIsBroadcast', isBroadcast: true })
    }

    //切换音乐
    const changeMusic:
        (index: number) => void
        = index => {   
            const { nowMusicIndex } = state
            //下一首
            if (index) {
                dispatch({
                    type: "setNowMusicIndex",
                    nowMusicIndex: nowMusicIndex + 1 < musicDataLength
                        ? nowMusicIndex + 1 : 0
                })
            } else { //上一首
                dispatch({
                    type: "setNowMusicIndex",
                    nowMusicIndex: nowMusicIndex - 1 >= 0
                        ? nowMusicIndex - 1 : musicDataLength - 1
                })
            }
            onBroadcast()
        }
    return <div className='ethan-music-card'>
        <img src={musicImg} alt="" onClick={() => { }} />
        <div className={classes}>
            <div className='music-top'>
                <audio
                    ref={audioDom}
                    src={musicData[state.nowMusicIndex].src}
                />
                <CrumbIcon
                    style={{ width: '20px', height: "20px", color: "#333" }}
                    onClick={() => dispatch({ type: "setDetailVisible", detailVisible: !state.detailVisible })}
                />
                <div className='music-top-name'>
                    <span>{musicData[state.nowMusicIndex].name} --- {musicData[state.nowMusicIndex].singer}</span>
                </div>
                <PreviousMusicIcon
                    style={{ width: '18px', height: "18px", color: "#333" }}
                    onClick={() => changeMusic(0)}
                />
                {
                    state.isBroadcast ?
                        <BroadcastIcon
                            style={{ width: '28px', height: "28px", color: "#333" }}
                            onClick={onBroadcast}
                        />
                        :
                        <PausecastIcon style={{ width: '28px', height: "28px", color: "#333" }}
                            onClick={onPausecast}
                        />
                }
                <NextMusicIcon
                    style={{ width: '18px', height: "18px", color: "#333" }}
                    onClick={() => changeMusic(1)}
                />
            </div>
            <div className='music-detail-3d'>
                <div className={detailClasses}>
                    <div className='music-detail-context'>
                        <DownIcon
                            className='music-detail-context-down'
                        />
                        <div className='music-detail-context-img'>
                            <img src={musicData[state.nowMusicIndex].img} alt='' />
                        </div>
                    </div>
                    <div className='music-detail-bottom'>
                        <Progress
                            totalTime={musicData[state.nowMusicIndex].timeLength}
                            onPause={state.onPause}
                            className="music-detail-progress"
                            reStart={state.reStart}
                            callback={() => {
                                dispatch({ type: 'setMusicEnd', musicEnd: true })
                                changeMusic(1)
                            }}
                        />
                        <div className='music-detail-controls'>
                            <PreviousMusicIcon
                                style={{ width: '18px', height: "18px", color: "#333" }}
                                onClick={() => changeMusic(0)}
                            />
                            {
                                state.isBroadcast ?
                                    <BroadcastIcon
                                        style={{ width: '28px', height: "28px", color: "#333" }}
                                        onClick={onBroadcast}
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
                            <NextMusicIcon
                                style={{ width: '18px', height: "18px", color: "#333" }}
                                onClick={() => changeMusic(1)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}