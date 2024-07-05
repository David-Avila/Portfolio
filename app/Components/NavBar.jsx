import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className='navBar'>
        <Link href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/about'>About Me</Link>
        <Link href='/links'>Links</Link>
    </nav>
  )
}
