import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Marquee from "react-fast-marquee";

import Footer from '../components/Footer.js';

import { FaLanguage } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

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
                  <p>ZulCoin is an ERC20 token deployed to the Polygon network.</p>
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

      {/* Vision and Mission */}
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
                  <h2 className="text-4xl font-[Starduster] text-customBlack">our vision And mission</h2>
                  <p>ZulCoin is an ERC20 token deployed to the Polygon network.</p>
                </div>
              }

              { introLang == 2 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack font-bold">私たちのビジョンと使命</h2>
                </div>
              }

              { introLang == 3 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack font-bold">हमारी दृष्टि और मिशन</h2>
                </div>
              }

              { introLang == 4 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack">jövöképünk és küldetésünk</h2>
                </div>
              }

              { introLang == 5 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack">zvizyonumuz ve misyonumuz</h2>
                </div>
              }
            </div>
            <div className="w-full md:w-1/2 p-4">

            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
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
                  <h2 className="text-4xl font-[Starduster] text-customBlack">Our RoAdmAp</h2>
                  <div className="w-full flex">
                    <div className="w-1/2">
                      <p>Website launched <FaCheck className="inline -mt-2" /></p>
                      <p>White paper released <FaCheck className="inline -mt-2" /></p>
                      <p>Token launched <FaCheck className="inline -mt-2" /></p>
                      <p>Building Discord community</p>
                      <p>Building Reddit community</p>
                      <p>Building Twitter community</p>
                      <p>Building Telegram community</p>
                    </div>
                    <div className="w-1/2">
                      <p>Social media marketing</p>
                      <p>Influencer marketing</p>
                      <p>Content marketing</p>
                      <p>Advertising</p>
                      <p>DEX listing - UniSwap, PancakeSwap</p>
                    </div>
                  </div>
                </div>
              }

              { introLang == 2 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack font-bold">目標と目的</h2>
                  <div className="w-full flex">
                    <div className="w-1/2">
                      <p>ウェブサイトの展開 <FaCheck className="inline -mt-2" /></p>
                      <p>ホワイトペーパーがリリースされました <FaCheck className="inline -mt-2" /></p>
                      <p>暗号通貨が開始されました <FaCheck className="inline -mt-2" /></p>
                      <p>Discordコミュニティの構築</p>
                      <p>Redditコミュニティの構築</p>
                      <p>Twitterコミュニティの構築</p>
                      <p>Telegramコミュニティの構築</p>
                    </div>
                    <div className="w-1/2">
                      <p>ソーシャルメディアマーケティング</p>
                      <p>インフルエンサーマーケティング</p>
                      <p>コンテンツマーケティング</p>
                      <p>広告キャンペーン</p>
                      <p>DEXリスト-UniSwap、PancakeSwap</p>
                    </div>
                  </div>
                </div>
              }

              { introLang == 3 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack font-bold">लक्ष्य और उद्देश्येें</h2>
                  <div className="w-full flex">
                    <div className="w-1/2">
                      <p>वेबसाइट लॉन्च की गई <FaCheck className="inline -mt-2" /></p>
                      <p>श्वेत पत्र जारी <FaCheck className="inline -mt-2" /></p>
                      <p>क्रिप्टोक्यूरेंसी लॉन्च किया गया <FaCheck className="inline -mt-2" /></p>
                      <p>बिल्डिंग डिसॉर्डर कम्युनिटी</p>
                      <p>रेडिट समुदाय का निर्माण</p>
                      <p>ट्विटर समुदाय का निर्माण</p>
                      <p>टेलीग्राम समुदाय का निर्माण</p>
                    </div>
                    <div className="w-1/2">
                      <p>सामाजिक माध्यम बाजारीकरण</p>
                      <p>इन्फ्लुएंसर मार्केटिंग</p>
                      <p>विषयवस्तु का व्यापार</p>
                      <p>प्रचार अभियान</p>
                      <p>DEX लिस्टिंग - UniSwap, PancakeSwap</p>
                    </div>
                  </div>
                </div>
              }

              { introLang == 4 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack">célok és célkitUzések</h2>
                  <div className="w-full flex">
                    <div className="w-1/2">
                      <p>Elindult a weboldal <FaCheck className="inline -mt-2" /></p>
                      <p>Kiadtak a fehér papírt <FaCheck className="inline -mt-2" /></p>
                      <p>Token elindítva <FaCheck className="inline -mt-2" /></p>
                      <p>Növekvő Discord közösség</p>
                      <p>Növekvő Reddit közösség</p>
                      <p>Növekvő Twitter közösség</p>
                      <p>Növekvő Telegram közösség</p>
                    </div>
                    <div className="w-1/2">
                      <p>Közösségi média marketing</p>
                      <p>Befolyasoló marketing</p>
                      <p>Tartalom marketing</p>
                      <p>Reklamkampany</p>
                      <p>DEX lista - UniSwap, PancakeSwap</p>
                    </div>
                  </div>
                </div>
              }

              { introLang == 5 &&
                <div className="w-full">
                  <h2 className="text-4xl font-[Starduster] text-customBlack">AmAçlAr ve hedefler</h2>
                  <div className="w-full flex">
                    <div className="w-1/2">
                      <p>Web sitesi açıldı <FaCheck className="inline -mt-2" /></p>
                      <p>Beyaz kağıt yayınlandı <FaCheck className="inline -mt-2" /></p>
                      <p>Jeton yayınlandı <FaCheck className="inline -mt-2" /></p>
                      <p>Discord topluluğu oluşturma</p>
                      <p>Reddit topluluğu oluşturma</p>
                      <p>Twitter topluluğu oluşturma</p>
                      <p>Telegram topluluğu oluşturma</p>
                    </div>
                    <div className="w-1/2">
                      <p>Sosyal medya pazarlamacılığı</p>
                      <p>Etkileyici pazarlama</p>
                      <p>İçerik pazarlama</p>
                      <p>Reklam kampanyası</p>
                      <p>DEX listesi - UniSwap, PancakeSwap</p>
                    </div>
                  </div>
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
