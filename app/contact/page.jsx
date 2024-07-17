'use client'
import { FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa'
import {useEffect, useState} from 'react'
import Link from 'next/link';

export default function Contact() {
    const [emailSent, setEmailSent] = useState(false);

    const iconSize = 32;

    useEffect(() => {
        if(emailSent) {
            setTimeout(() => {
                setEmailSent(false);
            }, 3000);
        }
    }, [emailSent]);

    async function sendEmail(e) {
        e.preventDefault();
        const msg = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }

        const res = await fetch('/api/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(msg),
        });

        setEmailSent(true);

        e.target.name.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
    }

    return (
        <section className='contact'>
            <div className='flex-column'>
                {emailSent && <h2 className='emailSent'>Email sent!</h2>}
                <form className='emailForm' onSubmit={sendEmail}>
                    <h3 className='emailFormLabel'>Contact me with this form</h3>
                    <input className='contactFormInput' type="text" placeholder='Your name' name='name' required />
                    <input className='contactFormInput' type="email" placeholder='Your email' name='email' required />
                    <textarea className='contactFormInput textArea' placeholder='Your message' name="message" required ></textarea>
                    <input className='contactFormInput submitBtn'  type="submit" value="Send" />
                </form>
                <h3>------------ or ------------</h3>
                <div className='flex-row'>
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
            </div>            
        </section>
    )
}
