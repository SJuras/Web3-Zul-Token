import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <footer className="w-full pt-2">
      <div className="w-full max-w-7xl mx-auto p-3 flex flex-col items-start md:flex-row">
        <div className="w-full md:w-1/3 mb-4">
          <h4 className="text-2xl text-customWhite font-[Starduster]">Zulcoin</h4>
          <p className="text-customWhite font-[Starduster]">Polygon BlockchAin Token</p>
          <p className="text-customWhite font-[Starduster]">ポリゴンブロックチェーントークン</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 flex flex-col md:justify-center md:items-center">
          <h4 className="text-white text-xl">Follow Us:</h4>
          <h4 className="text-white mb-2 text-xl">フォローしてください</h4>
          <ul className="">
            <li className="group"><a href="https://github.com/SJuras" className="flex group"><span><FaGithub className="text-white inline transition duration-300 mr-1 group-hover:text-customRed -mt-1" /></span> <p className="text-white transition duration-300 group-hover:text-customRed">GitHub</p></a></li>
            <li className="group"><a href="https://www.facebook.com/stjepko.juras" className="flex group"><span><FaFacebook className="text-white inline transition duration-300 mr-1 group-hover:text-customRed -mt-1" /></span><p className="text-white transition duration-300 group-hover:text-customRed">Facebook</p></a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-left md:text-right mb-4">
          <h4 className="text-white text-xl">Useful Links:</h4>
          <h4 className="text-white mb-2 text-xl">便利なリンク</h4>
          <ul>
            <li className="transition duration-300 "><a href="https://ethereum.org/en/" className="text-white transition duration-300 hover:text-customRed">Ethereum</a></li>
            <li className="transition duration-300 "><a href="https://polygon.technology/" className="text-white transition duration-300 hover:text-customRed">Polygon</a></li>
            <li className="transition duration-300 "><a href="https://polygon.technology/matic-token/" className="text-white transition duration-300 hover:text-customRed">MATIC</a></li>
            <li className="transition duration-300 "><a href="https://chain.link/" className="text-white transition duration-300 hover:text-customRed">ChainLink</a></li>
            <li className="transition duration-300 "><a href="https://www.coinbase.com/" className="text-white transition duration-300 hover:text-customRed">Coinbase</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto p-4 rounded-lg flex flex-col md:flex-row justify-between items-center">
        <p className="text-white">&copy; 2022 ZulCoin</p>
        <p className="text-white">Created with <span><FaHeart className="inline text-customRed" /></span> by: Sarif-Design</p>
      </div>
    </footer>
  );
}
