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
        <title>ZulCoin | Buy ZulCoin ズルコインを買う</title>
        <meta name="description" content="Zul coin selling website, Web3 token" />
        <meta name="keywords" content="zulcoin, crypto, buy, buy crypto, buying crypto, token, polygon, matic, blockchain" />
        <meta name="author" content="Sarif-Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
      {/* navbar */}
        <nav className="w-full max-w-7xl mx-auto pt-4 mb-4 px-2 md:px-0">
          <div className="flex justify-between items-center px-2">
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

            <div className="w-full flex flex-col md:flex-row p-2 mb-4">

              <div className="w-full md:w-1/3 p-4 rounded-lg bg-white border-4 border-customLightBlue drop-shadow-xl">
                <h4 className="text-2xl font-[Starduster] text-center">ZulCoin Address</h4>
                <h4 className="text-2xl font-[Starduster] text-center mb-2 font-bold">ズルコインアドレス</h4>
                <div className="w-full text-center overflow-hidden">
                  <a href="" className="transition duration-300 hover:text-customRed">30827985625637653925392783596573625</a>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-4 rounded-lg bg-white border-4 border-customLightBlue drop-shadow-xl">
                <h4 className="text-2xl font-[Starduster] text-center">Your TrAnsActions</h4>
                <h4 className="text-2xl font-[Starduster] text-center mb-2 font-bold">あなたの取引</h4>
                <div className="w-full text-center overflow-hidden">
                  <h5 className="text-xl font-bold">2</h5>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-4 rounded-lg bg-white border-4 border-customLightBlue drop-shadow-xl">
                <h4 className="text-2xl font-[Starduster] text-center">Your ZulCoin</h4>
                <h4 className="text-2xl font-[Starduster] text-center mb-2 font-bold">あなたのズルコイン</h4>
                <div className="w-full text-center overflow-hidden">
                  <h5 className="text-xl font-bold">4 ZUL</h5>
                </div>
              </div>

            </div>

            <div className="flex flex-col md:flex-row items-start">
              <div className="flex w-full md:w-2/3 flex-col h-full p-2">
                <div className="w-full flex flex-col md:flex-row mb-4">
                  <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <p>今すぐ通貨を購入する</p>
                    <p>अभी मुद्रा खरीदें</p>
                    <div className="w-full">
                      <button className="p-2 bg-customRed font-[Starduster] text-xl text-customWhite cursor-pointer drop-shadow-lg transition duration-300 hover:bg-customLightRed">Buy ZulCoin</button>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                    <div className="w-1/2">
                      <img src="/images/zulcoinPic.png" className="h-full w-full" alt="zulcoin" />
                    </div>
                    <h4 className="text-xl font-[Starduster] text-white drop-shadow-lg">invest in your future</h4>
                    <h4 className="text-xl font-[Starduster] text-white font-bold drop-shadow-lg">あなたの未来に投資する</h4>
                  </div>
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
                        <div className="p-2">
                          <h4 className="text-xl text-customDark font-[Starduster]">Instructions</h4>
                          <p>
                            Click the "Connect Wallet" button on the top right corner to connect to your MetaMask wallet.
                          </p>
                          <p>
                            The price of the 1 ZUL is fixed. The value of 1 ZUL is shown in USD, payable in Ether.
                          </p>
                          <p>
                            Choose how many ZUL you are willing to buy.
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2">
                        <div className="p-2">
                          <h4 className="text-xl text-customDark font-[Starduster] font-bold">使用説明書</h4>
                          <p>
                            右上隅にある[ウォレットの接続]ボタンをクリックして、MetaMaskウォレットに接続します。
                          </p>
                          <p>
                            1ZULの価格は固定されています。 1 ZULの値は米ドルで表示され、Etherで支払う必要があります。
                          </p>
                          <p>
                            購入するZULの数を選択してください。
                          </p>
                        </div>
                      </div>
                    </div>
                  }

                  { instructionsLang == 2 &&
                    <div className="w-full flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2">
                        <div className="p-2">
                          <h4 className="text-xl text-customDark font-[Starduster] font-bold">사용 지침</h4>
                          <p>
                            오른쪽 상단의 "지갑 연결" 버튼을 클릭하여 MetaMask 지갑에 연결합니다.
                          </p>
                          <p>
                            1 ZUL의 가격은 고정되어 있습니다. 1 ZUL의 가치는 USD로 표시되며 Ether로 지불 가능합니다.
                          </p>
                          <p>
                            구매할 의향이 있는 ZUL 수를 선택하십시오.
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2">
                        <div className="p-2">
                          <h4 className="text-xl text-customDark font-[Starduster]">hAsznAlAti útmutAtó</h4>
                          <p>
                            Kattintson a jobb felső sarokban található "Connect Wallet" gombra a MetaMask pénztárcához való csatlakozáshoz.
                          </p>
                          <p>
                            Az 1 ZUL ára fix. 1 ZUL értéke USD-ben van feltüntetve, éterben fizetendő.
                          </p>
                          <p>
                            Válassza ki, hány ZUL-t hajlandó vásárolni.
                          </p>
                        </div>
                      </div>
                    </div>
                  }

                  { instructionsLang == 3 &&
                    <div className="w-full flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2">
                        <div className="p-2">
                          <h4 className="text-xl text-customDark font-[Starduster] font-bold">उपयोग के लिए निर्देश</h4>
                          <p>
                            अपने मेटामास्क वॉलेट से कनेक्ट करने के लिए ऊपरी दाएं कोने पर "कनेक्ट वॉलेट" बटन पर क्लिक करें।
                          </p>
                          <p>
                            1 ZUL की कीमत तय है। 1 ZUL का मान USD में दिखाया गया है, जो ईथर में देय है।
                          </p>
                          <p>
                            चुनें कि आप कितने ZUL खरीदना चाहते हैं।
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2">
                        <div className="p-2">
                          <h4 className="text-xl text-customDark font-[Starduster]">upute</h4>
                          <p>
                            Pritisnite tipku "Connect Wallet" na gornjem desnom uglu ekrana radi spajanja sa Vašim MetaMask novčanikom.
                          </p>
                          <p>
                            Cijena 1 ZUL je fiksna. Vrijednost 1 ZUL je prikazana u USD, plativa u Etheru.
                          </p>
                          <p>
                            Odaberite koliko ZUL-a želite kupiti.
                          </p>
                        </div>
                      </div>
                    </div>
                  }

                  { instructionsLang == 4 &&
                    <div className="w-full flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2">
                        <div className="p-2">
                          <h4 className="text-xl text-customDark font-[Starduster]">kullAnim için tAlimAtlAr</h4>
                          <p>
                            MetaMask cüzdanınıza bağlanmak için sağ üst köşedeki "Cüzdanı Bağla" düğmesini tıklayın.
                          </p>
                          <p>
                            1 ZUL fiyatı sabittir. 1 ZUL'un değeri USD cinsinden gösterilir ve Ether ile ödenir.
                          </p>
                          <p>
                            Ne kadar ZUL satın almak istediğinizi seçin.
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2">
                        <div className="p-2">
                          <h4 className="text-xl text-customDark font-Roboto font-bold">Инструкции по применению</h4>
                          <p>
                            Нажмите кнопку «Подключить кошелек» в правом верхнем углу, чтобы подключиться к вашему кошельку MetaMask.
                          </p>
                          <p>
                            Цена 1 ZUL фиксированная. Стоимость 1 ZUL указана в долларах США, оплата производится в эфире.
                          </p>
                          <p>
                            Выберите, сколько ZUL вы готовы купить.
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
              <div className="flex w-full md:w-1/3 flex-col h-full p-2">
                <div className="w-full p-4 rounded-lg bg-white border-4 border-customLightBlue drop-shadow-xl">
                  <h4 className="text-2xl font-[Starduster] text-center">Current ETH Price</h4>
                  <h4 className="text-2xl font-[Starduster] text-center font-bold mb-2">現在のETH価格</h4>
                  <h5 className="text-xl font-bold text-center">8 USD</h5>
                </div>
                <div className="w-full p-4 rounded-lg bg-white border-4 border-customLightBlue drop-shadow-xl">
                  <h4 className="text-2xl font-[Starduster] text-center">TrAnsActions</h4>
                  <h4 className="text-2xl font-[Starduster] text-center mb-2 font-bold">会報</h4>
                  <div className="w-full flex">
                    <div className="w-2/3 p-2">
                      <h4 className="font-bold text-lg">Address</h4>
                      <h4 className="font-bold text-lg mb-2">住所</h4>
                      <div className="w-full text-center overflow-hidden">
                        <a href="" className="transition duration-300 hover:text-customRed">30827985625637653925392783596573625</a>
                      </div>
                    </div>
                    <div className="w-1/3 p-2">
                      <h4 className="font-bold text-lg">Amount</h4>
                      <h4 className="font-bold text-lg mb-2">量</h4>
                      <p>3</p>
                    </div>
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
