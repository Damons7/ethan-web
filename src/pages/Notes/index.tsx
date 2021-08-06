import { NotesCard } from '@components/Card/NotesCard'
import { useState } from 'react'
import Markdown from 'react-markdown'
import SwitchAnimate from '@components/SwitchAnimate'
import './index.less'

export const Notes = () => {

    const navListConfig = [
        {
            title: '前端日记1——基于xxxxxx的前端开发教程',
            time: '2021-07-26 09 :35'
        },
        {
            title: '前端日记2——基于xxxxxx的前端开发教程',
            time: '2021-07-26 09 :35'
        },
        {
            title: '前端日记3——基于xxxxxx的前端开发教程',
            time: '2021-07-26 09 :35'
        }
    ]

    const [notesTitle, setNotesTitle] = useState(navListConfig[0].title);
    const [animate, setAnimate] = useState(true)
    const navListClick = (content: string) => {
        setNotesTitle(content)
    }
    return (
        <div className='ethan-notes'>
            <NotesCard
                notesHeader={true}
                hasTurn={false}
                headerClassName='notes-card-header'
                bodyClassName='notes-card-body'
            >
                {
                    navListConfig.map((item, index) => {
                        return <div
                            className={`notes-card-nav ${notesTitle === item.title ? 'active-nav' : ''}`}
                            key={index}
                            onClick={() => navListClick(item.title)}
                        >
                            <p>{item.title}</p>
                            <span>{item.time}</span>
                        </div>
                    })
                }
            </NotesCard>
            <NotesCard
                title={notesTitle}
                notesHeader={true}
                hasTurn={false}
                headerClassName='notes-card-header'
            >
                <div>
                    {/* <Markdown
                        source={"11"}
                    /> */}
                </div>
            </NotesCard>
       
            {
                animate ?
                    <SwitchAnimate type='enter' callback={n => { setAnimate(n) }} />
                    :
                    null
            }
        </div>
    )
}

export default Notes;