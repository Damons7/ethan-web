import {
    AboutMeCard,
    PhotoCard,
    MailCard,
    GitCard,
    WeChatCard,
    AddressCard,
    SkillCard
} from '@components/Card'
import SwitchAnimate from '@components/SwitchAnimate'
import React, { useState } from 'react'

import './index.less'

export const About = () => {
    const infoConfig = {
        email: "1461264388@qq.com",
        git: "https://github.com/Damons7",
        address: {
            province: "Guang Dong",
            city: 'Shen Zhen'
        },
        skill: ['React', 'TypeScript', 'Koa2', 'MongoDB']
    }

    const [animate, setAnimate] = useState(true)

    return (
        <React.Fragment>
            <div className='about'>
                <PhotoCard title='Photo' className='about-1' headerClassName='about-header' />
                <AboutMeCard title='About Me' className='about-2' headerClassName='about-header' />
                <AddressCard title='Address' className='about-3' address={infoConfig.address} />
                <SkillCard title='Skill' className='about-4' headerClassName='about-header' skill={infoConfig.skill} />
                <MailCard title='M a i l' className='about-5' email={infoConfig.email} />
                <GitCard title='Git Hub' className='about-6' git={infoConfig.git} />
                <WeChatCard title='WeChat' className='about-7' />
            </div>
            {
                animate ?
                    <SwitchAnimate type='enter' callback={n => { setAnimate(n) }} />
                    :
                    null
            }
        </React.Fragment>

    )
}

export default About;