import Image from 'next/image';
import ProfilePic from '@/assets/profile-picture.jpg';
import React from 'react';

export default function Home() {
  return (
    <main>
		<section className="header">
			<div className='introDiv'>
				<h1 className='headerTitle'>Hi, i'm David Avila</h1>
				<h1 className="headerDesc">I will build the website you always wanted, not only that, I can 
					also setup your domain name and web hosting, so you don't have to go through all that work.</h1>
			</div>

			<Image className='headerImage'
				src={ProfilePic}
				width={360}
				quality={100}
				alt='Profile Picture'
				loading='lazy'
				placeholder='blur'
			></Image>
		</section>
    </main>
  )
}
