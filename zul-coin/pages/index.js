import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [introLang, setIntroLang] = useState(1);

  return (
    <div className=" w-full bg-blue-300">
      <Head>
        <title>Zul Coin | Crypto</title>
        <meta name="description" content="Zul coin selling website, Web3 token" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-full w-full">
      {/* navbar */}
        <nav className="w-full mb-4 absolute z-50 top-0">
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto p-3 mt-4">
            <div className="">
                <h1 className="font-[Audiowide] text-2xl md:text-4xl text-customYellow drop-shadow-lg drop-shadow-lg"><span className="font-[Atari] text-4xl md:text-8xl text-customYellow drop-shadow-lg">Z</span>ULCOIN</h1>
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
                <h4 className="font-[Starduster] text-4xl md:text-8xl text-customYellow drop-shadow-lg">Secure your</h4>
                <h4 className="font-[Starduster] text-4xl md:text-8xl text-customYellow drop-shadow-lg mb-4">future</h4>
                <h1 className="text-2xl font-[Starduster] text-customYellow mb-8">MATIC Token of the future</h1>
              </section>
              <section className="flex w-1/2 md:w-full flex-col md:flex-row">
                <div className="md:mr-4 p-2 bg-yellow-300 font-[Starduster] text-2xl cursor-pointer drop-shadow-lg transition duration-300 hover:bg-customLightPurple">
                  <Link href="/lotterypage" className="font-[Starduster] cursor-pointer text-yellow-300">
                    <p className="text-customYellow text-2xl text-center">Buy ZulCoin</p>
                  </Link>
                </div>
                <div className="text-center p-2 bg-customBlue font-[Starduster] text-2xl cursor-pointer drop-shadow-lg transition duration-300 hover:bg-customLightBlue">
                  <button href="/lotterypage" className="font-[Starduster] cursor-pointer text-customYellow">
                    LeArn More
                  </button>
                </div>
              </section>
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center relative">

            </div>
            <div className="w-full h-12 bg-customYellow absolute z-100 bottom-20 overflow-hidden flex items-center">

            </div>
          </div>
        </div>

        <div className="w-full h-screen">
          <Image
            src="/images/background.png"
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
                <h4 className="font-[Starduster] text-xl">lAnguAge Selection</h4>
                <div className="flex">
                  <button className="p-2 px-4 mr-2 bg-customYellow text-customPurple font-bold rounded transition duration-300 hover:bg-customPurple hover:text-customYellow" onClick={() => setIntroLang(1)}>En</button>
                  <button className="p-2 px-4 mr-2 bg-customYellow text-customPurple font-bold rounded transition duration-300 hover:bg-customPurple hover:text-customYellow" onClick={() => setIntroLang(2)}>Ja</button>
                  <button className="p-2 px-4 mr-2 bg-customYellow text-customPurple font-bold rounded transition duration-300 hover:bg-customPurple hover:text-customYellow" onClick={() => setIntroLang(3)}>Hi</button>
                  <button className="p-2 px-4 mr-2 bg-customYellow text-customPurple font-bold rounded transition duration-300 hover:bg-customPurple hover:text-customYellow" onClick={() => setIntroLang(4)}>Hu</button>
                  <button className="p-2 px-4 mr-2 bg-customYellow text-customPurple font-bold rounded transition duration-300 hover:bg-customPurple hover:text-customYellow" onClick={() => setIntroLang(5)}>Tr</button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
