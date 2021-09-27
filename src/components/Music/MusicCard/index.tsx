import {
    CrumbIcon, BroadcastIcon, PausecastIcon, NextMusicIcon, PreviousMusicIcon, DownIcon, UpIcon,
    MusicCycleIcon, MusicOrderIcon, MusicRandomIcon
} from '@components/Icon'
import musicImg from '@images/music.gif'
import { Progress, Message } from '@/common'
import { musicData } from './config'
import { useReducer, useRef, useMemo } from 'react'
import { classNames } from '@/common/utils'
import { randomNum, isMobile } from '@/utils'
import './index.less'

const musicDataLength = musicData.length; //音乐个数

export const MusicCard = () => {

    const audioDom: any = useRef();   //audio dom
    const musicDom: any = useRef();   //音乐盒 dom

    const initState = {
        tipsVisible: false,
        detailVisible: false,
        isBroadcast: true, //是否播放
        onPause: true, //暂停操作
        audioDom: "",
        reStart: false, //重新播放
        nowMusicIndex: 0, //当前音乐indx
        isShowList: false, //是否展示音乐list
        isShowLyric: false,//是否展示歌词
        nowMusicTime: 0,//此刻歌曲进行时间
        musicModel: {
            model: ['顺序播放', '单曲循环', '随机播放'],
            nowModelIndex: 0
        }
    }

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
                //设置是否展示音乐歌词
                case 'setIsShowLyric':
                    return {
                        ...state,
                        isShowLyric: action.isShowLyric,
                    }
                //设置是否展示音乐歌词
                case 'setNowMusicTime':
                    return {
                        ...state,
                        nowMusicTime: action.nowMusicTime
                    }

                //设置音乐播放模式
                case 'setMusicModel':
                    return {
                        ...state,
                        musicModel: {
                            ...state.musicModel,
                            nowModelIndex: action.nowModelIndex
                        }
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
        console.log(audio.currentTime, 'time');

        dispatch({ type: 'setIsBroadcast', isBroadcast: true })
    }

    //快进/倒退 歌曲
    const onFast = (endTime: number) => {
        const audio = audioDom.current;
        audio.currentTime = endTime / 1000
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
            dispatch({ type: "setNowMusicIndex", nowMusicIndex: _index })
            setTimeout(() => {
                onBroadcast()
                dispatch({ type: "setReStart", reStart: !state.reStart })
            }, 300);

        }

    //切换音乐模式
    const changeMusicModel:
        () => void
        = () => {
            const { nowModelIndex, model } = state.musicModel;
            const index = nowModelIndex + 1 < model.length ? nowModelIndex + 1 : 0
            dispatch({
                "type": "setMusicModel",
                nowModelIndex: index
            })
            Message.success({ msg: `已切换${model[index]}`, bottomMsg: "尽情聆听" })
        }

    //歌曲结束后回调
    const callbackEndMusic = () => {
        switch (state.musicModel.nowModelIndex) {
            //顺序播放
            case 0:
                changeMusic('next')
                break;
            //单曲循环
            case 1:
                changeMusic('select', state.nowMusicIndex)
                break;
            //随机播放    
            case 2:
                changeMusic('select', randomNum(0, musicDataLength - 1))
                break;
            default:
                changeMusic('next');
                break;
        }
    }

    //拖拽音乐盒
    const handleMouseDown = (event: any) => {
        // 将其从当前父元素中直接移动到root中
        document.querySelector("#root")?.append(musicDom.current);

        // 音乐盒的中心在 (pageX, pageY) 坐标上
        function moveAt(pageX: any, pageY: any) {
            musicDom.current.style.left = pageX - musicDom.current.offsetWidth / 2 + 'px';
            musicDom.current.style.top = pageY - musicDom.current.offsetHeight / 2 + 'px';
        }

        // 将绝对定位移到指针下方
        moveAt(event.pageX, event.pageY);

        function onMouseMove(e: any) {
            moveAt(e.pageX, e.pageY);
        }
        // 在 mousemove 事件上移动音乐盒
        document.addEventListener('mousemove', onMouseMove);
        // 放下音乐盒，并移除不需要的处理程序
        musicDom.current.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            musicDom.current.onmouseup = null;
        };

        musicDom.current.ondragstart = function () {
            return false;
        };
    }

    return <div className='ethan-music-card-fixed' ref={musicDom} style={   isMobile() ?{left:'90vw'}:{}}>
        <div className='ethan-music-card'>
            {
                isMobile() ?
                    <img src={musicImg} alt="" />
                    : <img src={musicImg} alt="" onMouseDown={handleMouseDown} />
            }

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
                                                <div className='music-detail-list-item' key={item.id}>
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
                                    {
                                        state.isShowLyric ?
                                            <div className='music-detail-context-lyric' onClick={() => dispatch({ type: "setIsShowLyric", isShowLyric: false })}>
                                                {
                                                    musicData[state.nowMusicIndex].lyric.split('\n').map((item, index) => {
                                                        return <div key={item + index} className={
                                                            state.nowMusicTime === index ?
                                                                `music-lyric-active`
                                                                : ((state.nowMusicTime - index) > 3 ?
                                                                    'music-lyric-hidden' : "")}>
                                                            {item.replace(/\[.*\]/g, '')}
                                                        </div>
                                                    })
                                                }
                                            </div>
                                            :
                                            <div className='music-detail-context-img' onClick={() => dispatch({ type: "setIsShowLyric", isShowLyric: true })}>
                                                <img src={musicData[state.nowMusicIndex].img} alt='' />
                                            </div>
                                    }
                                </div>
                        }
                        <div className='music-detail-bottom'>
                            <Progress
                                totalTime={musicData[state.nowMusicIndex].timeLength}
                                onPause={state.onPause}
                                className="music-detail-progress"
                                reStart={state.reStart}
                                callback={callbackEndMusic}
                                callbackCurrentTime={endTime => {
                                    onFast(endTime)
                                }}
                                lyricTimeArr={
                                    useMemo(() => musicData[state.nowMusicIndex].lyric.split('\n').map(item => {
                                        const lyricTime = item.match(/\[(.*?)\]/);
                                        const tArr = lyricTime && lyricTime[1].split(':');
                                        const allTime = tArr ? (
                                            tArr.length === 2 ?
                                                Number(tArr[0]) * 60000 + Number(tArr[1]) * 1000
                                                :
                                                Number(tArr[1]) * 60000 * 60 + Number(tArr[1]) * 60000 + Number(tArr[2]) * 1000
                                        ) : 86400000;
                                        return allTime;
                                    }), [state.nowMusicIndex])
                                }
                                callbackSecond={time => time !== state.nowMusicTime && dispatch({ type: "setNowMusicTime", nowMusicTime: time })}
                            />
                            <div className='music-detail-controls'>
                                {
                                    state.musicModel.nowModelIndex === 0 ?
                                        <MusicOrderIcon
                                            className='music-detail-controls-model'
                                            onClick={changeMusicModel}
                                        />
                                        : (
                                            state.musicModel.nowModelIndex === 1 ?
                                                <MusicCycleIcon
                                                    className='music-detail-controls-model'
                                                    onClick={changeMusicModel}
                                                />
                                                :
                                                <MusicRandomIcon
                                                    className='music-detail-controls-model'
                                                    onClick={changeMusicModel}
                                                />
                                        )
                                }


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
    </div>
}