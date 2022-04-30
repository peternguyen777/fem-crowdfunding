import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import FundingStatistics from "../components/FundingStatistics";
import CrowdFundProject from "../components/CrowdFundProject";
import About from "../components/About";
import ModalDefault from "../components/ModalDefault";

export default function Home() {
  const [showModalDefault, setShowModalDefault] = useState(false);
  const [showModalComplete, setShowModalComplete] = useState(false);

  const modalExitClickHandler = () => {
    setShowModalDefault(false);
  };

  const modalEnterClickHandler = () => {
    setShowModalDefault(true);
  };

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
        {showModalDefault && <ModalDefault onClick={modalExitClickHandler} />}
        {/* Crowdfund Project */}
        <CrowdFundProject onClick={modalEnterClickHandler} />

        {/* Funding Statistics */}
        <FundingStatistics />

        {/* About */}
        <About onClick={modalEnterClickHandler} />
      </main>
    </React.Fragment>
  );
}
