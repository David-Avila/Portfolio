'use client'
import { FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa'
import React from 'react'
import Link from 'next/link';

export default function Contact() {
    const iconSize = 32;

    return (
        <section className='contact'>

            <div className='flex-column'>

                <div className='linkDiv'>
                    <FaGoogle className='socialIcon' size={iconSize}/>
                    <div className='linkProps'>
                        <h3>Gmail:</h3>
                        <Link className='link'
                            href="mailto:aviladurandavid613@gmail.com"                            
                        ><h4>aviladurandavid613@gmail.com</h4></Link>
                    </div>
                </div>

                <div className='linkDiv'>
                    <FaLinkedin className='socialIcon' size={iconSize}/>
                    <div className='linkProps'>
                        <h3>LinkedIn:</h3>
                        <h4 className='link'
                            onClick={() => {
                                window.open('https://www.linkedin.com/in/david-avila-duran-12568a222', '_blank');
                            }}
                        >David Avila Duran</h4>
                    </div>
                </div>

                <div className='linkDiv'>
                    <FaGithub className='socialIcon' size={iconSize}/>
                    <div className='linkProps'>
                        <h3>GitHub:</h3>
                        <h4 className='link'
                            onClick={() => {
                                window.open('https://github.com/David-Avila', '_blank');
                            }}
                        >David-Avila</h4>
                    </div>
                </div>

            </div>

        </section>
    )
}
