import { NotesCard } from '@components/Card/NotesCard'
import { useState } from 'react'
import Markdown from 'react-markdown'
import SwitchAnimate from '@components/SwitchAnimate'
import './index.less'

export const Notes = () => {
    const markdown = `## call

    ${'```'}js
    Function.prototype.mycall = function (thisArg) {
       thisArg = thisArg == null ? window : Object(thisArg);
       const args = [...arguments].slice(1);
       const symbolFn = Symbol('fn'); 
       thisArg[symbolFn] = this;
       const res = thisArg[symbolFn](...args);
       delete thisArg[symbolFn];
       return res;
    }
    ${"```"}
    
    #### 测试
    
   ${" ```"}js
    let Person = function (name = '人') {
        this.name = name;
        this.getName = function () {
            console.log(this.name);
        }
    }
    
    let Student = function (name) {
        this.name = name;
    }
    
       let p = new Person();
       let xiaoming = new Student("小明");
    
       p.getName.mycall(xiaoming);  //小明
       p.getName.call(xiaoming);	//小明
    ${'```'}
    
    #### 测试2
    
   ${' ```'}js
    function Animal(name, age) {
        this.name = name;
        this.vage = age;
            }
        function Cat(name, age) {
           Animal.call2(this, name, age);
         }
        var miao = new Cat("英短", 3);
        console.log(miao); 
    ${"```"}
    
    `
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
            <div className='ethan-notes-card'>
                <NotesCard
                    notesHeader={true}
                    hasTurn={false}
                    headerClassName='notes-card-header'
                    bodyClassName='notes-card-body'
                >
                    {
                        navListConfig.map((item, index) => {
                            return <div
                                className={`notes-card-nav cursor-p ${notesTitle === item.title ? 'active-nav' : ''}`}
                                key={index}
                                onClick={() => navListClick(item.title)}
                            >
                                <p>{item.title}</p>
                                <span>{item.time}</span>
                            </div>
                        })
                    }
                </NotesCard>
            </div>
            <div className='ethan-notes-card'>
                <NotesCard
                    title={notesTitle}
                    notesHeader={true}
                    hasTurn={false}
                    headerClassName='notes-card-header'
                    bodyClassName='notes-card-body'
                >
                    <div className='notes-markdown'>
                        <Markdown children={markdown} />
                    </div>
                </NotesCard>
            </div>

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