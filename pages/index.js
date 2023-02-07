import Head from 'next/head'
import { useState } from 'react'
import Menu from '@/comp/Menu'

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <meta property="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="global.css" />
      </Head>

      <nav className='navbar'>
        <div className='hamburger'>
          <img src="../icons/menu-icon.png" alt="menu icon" />
          {/* <img src="../icons/menu-icon.png" alt="menu icon" />
          <h1>X</h1>
          <img src="../background-images/menuBackground.png"></img> */}

        </div>
        
      </nav>
      <main className='main'>

        <div className='container'>

          <div className='content'>
            <h1>An investment in knowledge pays the best interest.</h1>
            <hr/>
            <p>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
          </div>

          <div className='buttons'>
            <a href='/about' >
              <button name='More About Us'>
                More About Us
              </button>
            </a>

            <a href='/contact'>
              <button name='Contact Us'>
                Contact Us
              </button>
            </a>
          </div>

        
        </div>
        
        <a href='' className='arrow-down'>
          <span><img src="/icons/downwardArrow.png" /></span>
        </a>
        
      </main>

    </>
  )
}
