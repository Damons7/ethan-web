import { CrumbIcon, BroadcastIcon, PausecastIcon, NextMusicIcon, PreviousMusicIcon, DownIcon, UpIcon } from '@components/Icon'
import musicImg from '@images/music.gif'
import { Progress } from '@/common'
import { useReducer, useRef, useEffect } from 'react'
import { classNames } from '@/common/utils'
import './index.less'

//音乐数据
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
        id: 1409344469,
        name: '骂醒我 (翻自 周汤豪) ',
        singer: '崔天琪',
        src: "https://music.163.com/song/media/outer/url?id=1409344469.mp3",
        img: "https://p1.music.126.net/KZtTEGYxqE82UgtNBtPvlw==/109951164546514166.jpg",
        timeLength: 256966
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
        id: 135026,
        name: 'MC来了',
        singer: 'MC Hotdog',
        src: "https://music.163.com/song/media/outer/url?id=135026.mp3",
        img: "https://p2.music.126.net/Js-ZQub2-4_RA176YXwm5g==/119846767440816.jpg",
        timeLength: 222000
    }
]
const musicDataLength = musicData.length; //音乐个数

export const MusicCard = () => {
    const audioDom: any = useRef();
    const initState = {
        tipsVisible: false,
        detailVisible: false,
        isBroadcast: true, //是否播放
        onPause: true, //暂停操作
        audioDom: "",
        reStart: false, //重新播放
        nowMusicIndex: 0, //当前音乐indx
        isShowList: false //是否展示音乐list
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
                    }
                //设置当前音乐配置
                case 'setNowMusicIndex':
                    return {
                        ...state,
                        nowMusicIndex: action.nowMusicIndex,
                    }
                //设置是否展示音乐列表
                case 'setIsShowList':
                    return {
                        ...state,
                        isShowList: action.isShowList,
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
        state.isBroadcast && dispatch({ type: 'setIsBroadcast', isBroadcast: false })
    }

    //暂停歌曲
    const onPausecast = () => {
        const audio = audioDom.current;
        audio.pause();
        dispatch({ type: 'setIsBroadcast', isBroadcast: true })
    }

    //切换音乐
    const changeMusic:
        (type: string, index?: number) => void
        = (type, index = 0) => {
            const { nowMusicIndex } = state;
            let _index = nowMusicIndex;
            switch (type) {
                //下一首
                case 'next':
                    _index = nowMusicIndex + 1 < musicDataLength ? nowMusicIndex + 1 : 0;
                    break;
                //上一首
                case 'prev':
                    _index = nowMusicIndex - 1 >= 0 ? nowMusicIndex - 1 : musicDataLength - 1;
                    break;
                //自定义
                case 'select':
                    _index = index
                    break;
                default:
                    break;
            }
            dispatch({
                type: "setNowMusicIndex",
                nowMusicIndex: _index
            })
            setTimeout(() => {
                onBroadcast()
                dispatch({ type: "setReStart", reStart: !state.reStart })
            }, 300);

        }

    return <div className='ethan-music-card'>
        <img src={musicImg} alt="" />
        <div className={classes}>
            <audio
                ref={audioDom}
                src={musicData[state.nowMusicIndex].src}
            />
            <div className='music-top'>
                <CrumbIcon
                    style={{ width: '20px', height: "20px", color: "#333" }}
                    onClick={() => dispatch({ type: "setDetailVisible", detailVisible: !state.detailVisible })}
                />
                <div className='music-top-name'>
                    <span>{musicData[state.nowMusicIndex].name} --- {musicData[state.nowMusicIndex].singer}</span>
                </div>
                <PreviousMusicIcon
                    style={{ width: '18px', height: "18px", color: "#333" }}
                    onClick={() => changeMusic('prev')}
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
                    onClick={() => { changeMusic('next') }}
                />
            </div>
            <div className='music-detail-3d'>
                <div className={detailClasses}>
                    {
                        state.isShowList ?
                            <div className='music-detail-list'>
                                <UpIcon
                                    className='music-detail-list-up'
                                    onClick={() => { dispatch({ type: "setIsShowList", isShowList: false }) }}
                                />
                                {
                                    musicData.map((item, index) => {
                                        return (
                                            <div className='music-detail-list-item'>
                                                <div>
                                                    <img src={item.img} alt="" />
                                                    <div className='music-detail-list-item-info'>
                                                        <span>{item.name}</span>
                                                        <span>-- {item.singer}</span>
                                                    </div>
                                                </div>
                                                {
                                                    index === state.nowMusicIndex && !state.isBroadcast ?
                                                        <PausecastIcon
                                                            style={{ width: '36px', height: "36px", color: "#333" }}
                                                            onClick={onPausecast}
                                                        />
                                                        :
                                                        <BroadcastIcon
                                                            style={{ width: '36px', height: "36px", color: "#333" }}
                                                            onClick={() => { changeMusic('select', index) }}
                                                        />

                                                }
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            :
                            <div className='music-detail-context'>
                                <DownIcon
                                    className='music-detail-context-down'
                                    onClick={() => { dispatch({ type: "setIsShowList", isShowList: true }) }}
                                />
                                <div className='music-detail-context-img'>
                                    <img src={musicData[state.nowMusicIndex].img} alt='' />
                                </div>
                            </div>
                    }
                    <div className='music-detail-bottom'>
                        <Progress
                            totalTime={musicData[state.nowMusicIndex].timeLength}
                            onPause={state.onPause}
                            className="music-detail-progress"
                            reStart={state.reStart}
                            callback={() => { changeMusic('next') }}
                        />
                        <div className='music-detail-controls'>
                            <PreviousMusicIcon
                                style={{ width: '28px', height: "28px", color: "#333" }}
                                onClick={() => changeMusic('prev')}
                            />
                            {
                                state.isBroadcast ?
                                    <BroadcastIcon
                                        style={{ width: '36px', height: "36px", color: "#333" }}
                                        onClick={onBroadcast}
                                    />
                                    :
                                    <PausecastIcon
                                        style={{ width: '36px', height: "36px", color: "#333" }}
                                        onClick={onPausecast}
                                    />
                            }
                            <NextMusicIcon
                                style={{ width: '28px', height: "28px", color: "#333" }}
                                onClick={() => changeMusic('next')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}