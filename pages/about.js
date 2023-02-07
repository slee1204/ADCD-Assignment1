import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Carousel from "@/comp/Carousel";


export default function About({}) {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - About Us Page" />
        <meta
          property="og:description"
          content="BCIT Digital Design and Development Diploma"
        />
        <meta
          property="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.png" />

      </Head>
      <main className="about">
        <div className="title">
          <hr />
          <h1>About Us</h1>
          <hr />
        </div>

        <div className="first">
          <p>
            We are proud to deliver an education that goes beyond textbooks and
            classrooms.
          </p>
          <p>
            Our students gain the technical skills, real-wrold experience, and
            problem-solving ability needed to embrace complexity and elad
            innovation in a rapidly changing workforce
          </p>
          <p>
            Through close collaboration with industyr, our network of alumni and
            partners continue to achieve global success
          </p>
          <h2>Information Sessions</h2>
          <p>
            Information sessions are a simple way to figure our the next step
            along your career path. Learn more about the programs that interest
            you.
          </p>
          <h3>Big Info</h3>
          <p>
            Big Info is the largest program expo and information session at
            BCIT. It's your chance to find our about all our programs - from
            business, computing, and health to engineering, trades, and applied
            sciences.
          </p>
          <p>
            If you missed our fall event the next Big Info is scheduled to
            return on February 15, 2023.
          </p>
          <h2>Campus Tours</h2>
          <p>
            Tours run weekdays September to May, on our Burnaby campus. See bcit
            in persona and get a taste of campus life.
          </p>
        </div>

          {/* <Carousel /> */}

        <div className="title">
          <hr />
          <h1>DEPARTMENTS</h1>
          <hr />
        </div>

        <div className="second">
          <p>Applied & Natural Sciences</p>
          <p>Business & Media</p>
          <p>Computing & IT</p>
          <p>Engineering</p>
          <p>Health Sciences</p>
          <p>Trades & Apprenticeships</p>
        </div>

        <a href='' className='arrow'>
          <span><img src="/icons/upwardArrow.png" /></span>
        </a>
        <a href='' className='arrow'>
          <span><img src="/icons/downwardArrow.png" /></span>
        </a>
      </main>
    </>
  );
}
