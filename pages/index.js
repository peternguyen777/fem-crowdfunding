import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import FundingStatistics from "../components/FundingStatistics";
import CrowdFundProject from "../components/CrowdFundProject";
import About from "../components/About";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Crowdfund</title>
        <meta name='description' content='Crowd funding product page' />
        <link rel='icon' href='/favicon-32x32.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Header />

      <main className='absolute w-full font-commissioner pb-[76px] sm:pb-[124px]'>
        {/* Crowdfund Project */}
        <CrowdFundProject />

        {/* Funding Statistics */}
        <FundingStatistics />

        {/* About */}
        <About />
      </main>
    </React.Fragment>
  );
}
