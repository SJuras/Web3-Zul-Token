import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Marquee from "react-fast-marquee";

import Footer from '../components/Footer.js';

import { FaLanguage } from "react-icons/fa";



export default function Home() {

  const [instructionsLang, setInstructionsLang] = useState(1);

  return (
    <div className=" w-full bg-customLightBlue">
      <Head>
        <title>ZulCoin | Polygon Blockchain Token</title>
        <meta name="description" content="Zul coin selling website, Web3 token" />
        <meta name="keywords" content="zulcoin, crypto, buy, buy crypto, buying crypto, token, polygon, matic, blockchain" />
        <meta name="author" content="Sarif-Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
      {/* navbar */}
        <nav className="w-full max-w-7xl mx-auto pt-4 mb-4 px-2 md:px-0">
          <div className="flex justify-between items-center">
            <div className="cursor-pointer">
              <Link href="/">
                <h1 className="font-[Audiowide] text-2xl md:text-4xl text-customWhite drop-shadow-lg drop-shadow-lg"><span className="font-[Atari] text-4xl md:text-8xl text-customWhite drop-shadow-lg">Z</span>ULCOIN</h1>
              </Link>
            </div>
            <div className="p-2 bg-customRed font-[Starduster] text-xl text-customWhite cursor-pointer drop-shadow-lg transition duration-300 hover:bg-customLightRed">
              <button className="font-[Starduster] cursor-pointer">
                Connect WAllet
              </button>
            </div>
          </div>
        </nav>

        {/* main content */}
        <div className="w-full max-w-7xl mx-auto mt-4 mb-4">
          <section className="mt-5">

            <div className="w-full h-12 bg-customLightBlue overflow-hidden flex items-center">
              <Marquee pauseOnHover speed={80} gradient={false}>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  Good luck!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4 font-bold">
                  행운을 빕니다!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  sok szerencsét!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  powodzeniA!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4 font-bold">
                  اچھی قسمت
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  iyi SAnslAr!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4 font-bold">
                  祝你好運!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  viel Glück!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  noroc!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  sretno!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  זאָל זייַנ מיט מאַזל
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4 font-bold">
                  удачи!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  NgikufiselA inhlAnhlA!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  buonA fortunA!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  幸運を!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  beAnnAchd leAt!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4 font-bold">
                  амжилт хүсье!
                </h4>
                <h4 className="text-2xl font-bold text-customDark font-[Starduster] mx-4">
                  onneA!
                </h4>
              </Marquee>
            </div>

            <div className="flex flex-col md:flex-row items-end">
              <div className="flex w-full md:w-2/3 flex-col h-full p-2">
                <p>今すぐ通貨を購入する</p>
                <p>अभी मुद्रा खरीदें</p>
                <div className="w-full mb-4">
                  <button className="p-2 bg-customRed font-[Starduster] text-xl text-customWhite cursor-pointer drop-shadow-lg transition duration-300 hover:bg-customLightRed">Buy ZulCoin</button>
                </div>
                <div className="w-full p-4 bg-white rounded-xl border-4 border-customLightBlue drop-shadow-xl">
                  <h4 className="font-[Starduster] text-xl"><FaLanguage className="inline text-4xl mr-2 text-customRed" />lAnguAge Selection</h4>
                  <div className="flex mb-4">
                    <button className="p-2 px-4 mr-2 bg-customLightBlue text-customBlack font-bold rounded transition duration-300 hover:bg-customDark hover:text-customWhite" onClick={() => setInstructionsLang(1)}>En / Ja</button>
                    <button className="p-2 px-4 mr-2 bg-customLightBlue text-customBlack font-bold rounded transition duration-300 hover:bg-customDark hover:text-customWhite" onClick={() => setInstructionsLang(2)}>Ko / Hu</button>
                    <button className="p-2 px-4 mr-2 bg-customLightBlue text-customBlack font-bold rounded transition duration-300 hover:bg-customDark hover:text-customWhite" onClick={() => setInstructionsLang(3)}>Hi / Hr</button>
                    <button className="p-2 px-4 mr-2 bg-customLightBlue text-customBlack font-bold rounded transition duration-300 hover:bg-customDark hover:text-customWhite" onClick={() => setInstructionsLang(4)}>Tr / Ru</button>
                  </div>
                  { instructionsLang == 1 &&
                    <div className="w-full flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2">
                        <h4 className="text-xl text-customDark font-[Starduster]">Instructions</h4>
                      </div>
                      <div className="w-full md:w-1/2">
                        <h4 className="text-xl text-customDark font-[Starduster] font-bold">使用説明書</h4>
                      </div>
                    </div>
                  }

                  { instructionsLang == 2 &&
                    <div className="w-full flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2">
                        <h4 className="text-xl text-customDark font-[Starduster] font-bold">사용 지침</h4>
                      </div>
                      <div className="w-full md:w-1/2">
                        <h4 className="text-xl text-customDark font-[Starduster]">hAsznAlati útmutAtó</h4>
                      </div>
                    </div>
                  }

                  { instructionsLang == 3 &&
                    <div className="w-full flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2">
                        <h4 className="text-xl text-customDark font-[Starduster] font-bold">उपयोग के लिए निर्देश</h4>
                      </div>
                      <div className="w-full md:w-1/2">
                        <h4 className="text-xl text-customDark font-[Starduster]">upute</h4>
                      </div>
                    </div>
                  }

                  { instructionsLang == 4 &&
                    <div className="w-full flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2">
                        <h4 className="text-xl text-customDark font-[Starduster]">kullAnim için tAlimAtlAr</h4>
                      </div>
                      <div className="w-full md:w-1/2">
                        <h4 className="text-xl text-customDark font-Roboto font-bold">Инструкции по применению</h4>
                      </div>
                    </div>
                  }
                </div>
              </div>
              <div className="flex w-full md:w-1/3 flex-col h-full p-2">
                <div className="w-full p-4 rounded-lg bg-white border-4 border-customLightBlue drop-shadow-xl">
                  <h4 className="text-2xl font-[Starduster] text-center">TrAnsActions</h4>
                  <h4 className="text-2xl font-[Starduster] text-center mb-2 font-bold">会報</h4>
                  <div className="w-full text-center overflow-hidden">
                    <a href="" className="transition duration-300 hover:text-customRed">30827985625637653925392783596573625</a>
                  </div>
                </div>
                <div className="w-full p-4 rounded-lg bg-white border-4 border-customLightBlue drop-shadow-xl">
                  <div className="w-full flex justify-center">
                    <div className="w-1/2">
                      <a href="https://www.clouch.com/?ref=jaysarif">
                        <img src="/images/clouch.png" className="h-full w-full" />
                      </a>
                    </div>
                  </div>
                  <div className="w-full">
                    <h4 className="font-[Starduster] text-center text-xl font-bold">Clouch.com</h4>
                    <h5 className="font-[Starduster] text-center">Crypto WAllet And SociAl Network</h5>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>


      </main>




      <div className="w-full bg-customDark">
        <Footer />
      </div>
    </div>
  );
}
