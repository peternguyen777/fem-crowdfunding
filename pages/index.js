import React, { useState, useRef } from "react";
import Head from "next/head";
import Header from "../components/Header";
import FundingStatistics from "../components/FundingStatistics";
import CrowdFundProject from "../components/CrowdFundProject";
import About from "../components/About";
import ModalDefault from "../components/ModalDefault";
import ModalComplete from "../components/ModalComplete";
import rewards from "../components/rewards";

export default function Home() {
  const [rewardsList, setRewardsList] = useState(rewards); //import rewards as default
  const [showModalDefault, setShowModalDefault] = useState(false);
  const [currentSelection, setCurrentSelection] = useState(null);
  const [showModalComplete, setShowModalComplete] = useState(false);
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [statistics, setStatistics] = useState({
    funding: 89914,
    total: 100000,
    backers: 5007,
    daysLeft: 56,
  });

  //open modal from "back this project button"
  const modalEnterClickHandler = () => {
    setShowModalDefault(true);
    setCurrentSelection(null);
  };

  //within modal, manually select reward
  const radioSelectClickHandler = (event) => {
    setCurrentSelection(event.target.value);
  };

  //from home page, open modal & pre-select reward
  const modalPreselectClickHandler = (event) => {
    event.preventDefault();
    setShowModalDefault(true);
    setCurrentSelection(event.target.value);
  };

  //close modal
  const modalExitClickHandler = () => {
    setShowModalDefault(false);
    setShowModalComplete(false);
  };

  //enter pledge
  const enterPledgeHandler = (event) => {
    setEnteredAmount(event.target.valueAsNumber);
  };

  //submit pledge
  const submitPledgeHandler = (event) => {
    event.preventDefault();

    setStatistics({
      ...statistics,
      funding: statistics["funding"] + enteredAmount,
      backers: statistics["backers"] + 1,
    });

    for (let i = 0; i < rewards.length; i++) {
      if (i == event.target.id) {
        rewards[i]["remaining"]--;
      }
    }

    setEnteredAmount(0);
    setShowModalDefault(false);
    setShowModalComplete(true);
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

      <main className='absolute w-full pb-[76px] font-commissioner sm:pb-[124px]'>
        {showModalDefault && (
          <ModalDefault
            onClick={modalExitClickHandler}
            indexSelection={currentSelection}
            modalSelection={radioSelectClickHandler}
            submitPledge={submitPledgeHandler}
            enterPledge={enterPledgeHandler}
            rewards={rewards}
          />
        )}
        {showModalComplete && <ModalComplete onClick={modalExitClickHandler} />}
        {/* Crowdfund Project */}
        <CrowdFundProject onClick={modalEnterClickHandler} />

        {/* Funding Statistics */}
        <FundingStatistics statistics={statistics} />

        {/* About */}
        <About onClick={modalPreselectClickHandler} />
      </main>
    </React.Fragment>
  );
}
