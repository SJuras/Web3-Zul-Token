import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Marquee from "react-fast-marquee";

import Footer from '../components/Footer.js';

import { FaLanguage } from "react-icons/fa";

export default function Home() {

  const [introLang, setIntroLang] = useState(1);

  return (
    <div className=" w-full bg-customLightBlue">
      <Head>
        <title>ZulCoin | Polygon Blockchain Token</title>
        <meta name="description" content="Zul coin selling website, Web3 token" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-full w-full">
      {/* navbar */}
        <nav className="w-full mb-4 absolute z-50 top-0">
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto p-3 mt-4">
            <div className="">
                <h1 className="font-[Audiowide] text-2xl md:text-4xl text-customWhite drop-shadow-lg drop-shadow-lg"><span className="font-[Atari] text-4xl md:text-8xl text-customWhite drop-shadow-lg">Z</span>ULCOIN</h1>
            </div>
            <div className="hidden p-2 bg-purple-500 font-[Starduster] text-xl text-yellow-300 cursor-pointer drop-shadow-lg">
              <button className="font-[Starduster] cursor-pointer">
                Connect Wallet
              </button>
            </div>
          </div>
        </nav>

        {/* main content */}
        <div className="w-full absolute z-50 min-h-full">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row h-screen justify-center items-center p-3">
            <div className="w-full md:w-1/2 flex flex-col justify-start items-center">
              <section className="w-full">
                <h4 className="font-[Starduster] text-4xl md:text-8xl text-customWhite drop-shadow-lg">invest</h4>
                <h4 className="font-[Starduster] text-4xl md:text-8xl text-customWhite drop-shadow-lg">in your</h4>
                <h4 className="font-[Starduster] text-4xl md:text-8xl text-customRed drop-shadow-lg mb-4">future</h4>
                <h1 className="text-2xl font-[Starduster] text-customBlack mb-8">Polygon blockchAin token</h1>
              </section>
              <section className="flex w-1/2 md:w-full flex-col md:flex-row">
                <div className="md:mr-4 p-2 bg-customRed font-[Starduster] text-2xl cursor-pointer drop-shadow-lg transition duration-300 hover:bg-customLightPurple">
                  <Link href="/lotterypage" className="font-[Starduster] cursor-pointer text-customWhite">
                    <p className="text-customWhite text-2xl text-center">Buy ZulCoin</p>
                  </Link>
                </div>
                <div className="text-center p-2 bg-customLightBlue font-[Starduster] text-2xl cursor-pointer drop-shadow-lg transition duration-300 hover:bg-customWhite">
                  <button href="/lotterypage" className="font-[Starduster] cursor-pointer text-customYellow">
                    LeArn More
                  </button>
                </div>
              </section>
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center relative">
              <div className="w-3/4 flex justify-center items-center mb-4">
                <img src="/images/zulcoinPic.png" className="h-full w-full" alt="zulcoin" />
              </div>
              <h4 className="text-6xl font-bold text-customWhite font-[Starduster] text-center drop-shadow-lg">ズルコイン</h4>
            </div>
            <div className="w-full h-12 bg-customLightBlue absolute z-100 bottom-20 overflow-hidden flex items-center">
              <Marquee pauseOnHover speed={80} gradient={false}>
                <h4 className="text-4xl font-[Starduster] text-customDark mx-8">invest in your future</h4>
                <h4 className="text-4xl font-[Starduster] text-customDark mx-8 font-bold">あなたの未来に投資する</h4>
                <h4 className="text-4xl font-[Starduster] text-customDark mx-8">fektessen be A jövöjébe</h4>
                <h4 className="text-4xl font-[Starduster] text-customDark mx-8 font-bold">अपने भविष्य में निवेश करें</h4>
                <h4 className="text-4xl font-[Starduster] text-customDark mx-8">geleceGine yAtirim yAp</h4>
                <h4 className="text-4xl font-[Starduster] text-customDark mx-8 font-bold">당신의 미래에 투자</h4>
                <h4 className="text-4xl font-[Starduster] text-customDark mx-8">investieren Sie in ihre Zukunft</h4>
                <h4 className="text-4xl font-[Starduster] text-customDark mx-8 font-bold">投资于你的未来</h4>
              </Marquee>
            </div>
          </div>
        </div>

        <div className="w-full h-screen">
          <Image
            src="/images/background2.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </main>

      {/* ABout */}
      <div className="w-full py-8">
        <div className="w-full py-8">
          <div className="w-full max-w-7xl mx-auto flex justify-center items-center flex-col md:flex-row mb-4 bg-white rounded-xl border-4 border-customLightBlue drop-shadow-xl">
            <div className="w-full md:w-1/2 p-4">
              <div className="w-full">
                <h4 className="font-[Starduster] text-xl"><FaLanguage className="inline text-4xl mr-2 text-customRed" />lAnguAge Selection</h4>
                <div className="flex mb-4">
                  <button className="p-2 px-4 mr-2 bg-customLightBlue text-customBlack font-bold rounded transition duration-300 hover:bg-customDark hover:text-customWhite" onClick={() => setIntroLang(1)}>En</button>
                  <button className="p-2 px-4 mr-2 bg-customLightBlue text-customBlack font-bold rounded transition duration-300 hover:bg-customDark hover:text-customWhite" onClick={() => setIntroLang(2)}>Ja</button>
                  <button className="p-2 px-4 mr-2 bg-customLightBlue text-customBlack font-bold rounded transition duration-300 hover:bg-customDark hover:text-customWhite" onClick={() => setIntroLang(3)}>Hi</button>
                  <button className="p-2 px-4 mr-2 bg-customLightBlue text-customBlack font-bold rounded transition duration-300 hover:bg-customDark hover:text-customWhite" onClick={() => setIntroLang(4)}>Hu</button>
                  <button className="p-2 px-4 mr-2 bg-customLightBlue text-customBlack font-bold rounded transition duration-300 hover:bg-customDark hover:text-customWhite" onClick={() => setIntroLang(5)}>Tr</button>
                </div>
              </div>
              { introLang == 1 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack">About ZulCoin</h2>
                </div>
              }

              { introLang == 2 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack font-bold">ズルコインについて</h2>
                </div>
              }

              { introLang == 3 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack font-bold">ज़ज़ुल्कोइन के बारे मेें</h2>
                </div>
              }

              { introLang == 4 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack">A zulcoinról</h2>
                </div>
              }

              { introLang == 5 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack">zulcoin hAkkindA</h2>
                </div>
              }
            </div>
            <div className="w-full md:w-1/2 p-4">

            </div>
          </div>
        </div>
      </div>


      <div className="w-full bg-customDark">
        <Footer />
      </div>
    </div>
  )
}
