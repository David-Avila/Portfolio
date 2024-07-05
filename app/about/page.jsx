'use client'
import Image from 'next/image';
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import nextjs from '@/assets/nextjs-icon.png'
import Item from '../Components/Item';

import React from 'react'

export default function AboutMe() {
    const iconSize = 48;

    return (
        <section className='about'>
            <h2>About</h2>
            <p className='descParr'>My name is David Avila Duran, i'm a 22 year-old self-taught web developer from Cuba. 
                <br /><br />
                I've been learning to code since 2018, and delved into web development since 2023. After learning HTML, CSS and JavaScript, I started studying
                React, and after having aquired enough knowledge of it, I jumped to NextJs, and i'm enjoying every step of this journey.
                <br /> <br />
                On my free time i've also started to learn Svelte and Sveltkit, which is another awesome tool to build websites.
            </p>

            <h2>Skills</h2>
            <div className='skillsList'>
                <Item
                    icon={<FaHtml5 size={iconSize} className='icon' />}
                    tooltip="HTML5"
                />
                
                <Item
                    icon={<FaCss3 size={iconSize} className='icon' />}
                    tooltip="CSS3"
                />
                
                <Item
                    icon={<FaJs size={iconSize} className='icon'  />}
                    tooltip="JavaScript"
                />
                
                <Item
                    icon={<FaReact size={iconSize} className='icon' />}
                    tooltip="React"
                />
                
                <Item
                    icon={<Image className='icon next' width={iconSize} src={nextjs} alt='' quality={100}/>}
                    tooltip="NextJS"
                />
                
                
                
                
                
            </div>

        </section>
    )
}
