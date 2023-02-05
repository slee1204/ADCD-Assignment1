import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/globals.css'


const inter = Inter({ subsets: ['latin'] })

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
      </Head>
      <main >
        <h1>An investment in knowledge pays the best interest.</h1>
        <p>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
        <a href='/about'>
          <button name='More About Us'>More About Us</button>
        </a>
        <a href='/contact'>
          <button name='Contact Us'>Contact Us</button>
        </a>
        <a href=''>
          <span><img src="/icons/downwardArrow.png"/></span>
        </a>
      </main>
    </>
  )
}
