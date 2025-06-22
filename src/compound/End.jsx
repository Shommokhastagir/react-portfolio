import React from "react";
import Logo from "../assets/item/Logo-1.png";
import { RiTelegram2Fill } from "react-icons/ri";
import { IoLogoTwitter, IoMdHelpCircleOutline } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";
import { FaMedium } from "react-icons/fa6";


const End = () => {

  const [showNotice, setShowNotice] = useState(false)
  return (
    <div>
      <div className="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center px-[26px] lg:p-[120px]">
          <div className="flex flex-col justify-center items-center text-md gap-6">
            <img src={Logo} className="h-[150px]" alt="" />
            <p>MindWallet – The Ultimate Multi-Chain Wallet</p>
            <p>
              MindWallet is a safe, secure, and user-friendly non-custodial
              wallet designed for seamless multi-chain asset management. With
              advanced encryption, private key control, and an intuitive
              interface, MindWallet empowers users to store, send, and receive
              cryptocurrencies across multiple blockchain networks effortlessly.
            </p>
            <p>
              Experience true financial freedom with MindWallet – your gateway
              to the decentralized world.
            </p>
          </div>
          <div className="pt-15 list-none ">
            <h1 className="text-xl font-semibold">Our Products</h1>
            <li className=" text-gray-500 hover:text-black"><a href="https://mainnet.mindscan.info/">MindScan</a></li>
            <li className=" text-gray-500 hover:text-black"><a href="https://mindchain.info/">CEX</a></li>
            <li className=" text-gray-500 hover:text-black"><a href="https://www.mindchainswap.com/#/swap">DEX</a></li>
            <li className=" text-gray-500 hover:text-black"><a href="https://mindchainwallet.com/">DeFi</a></li>
          </div>
          <div className="py-15 gap-5">
            <button className="h-[60px] w-full rounded-xl border mb-5 text-white font-semibold text-xl bg-blue-400 hover:bg-blue-950">
              <a href="https://my.mindchainwallet.com/public/mindchain-wallet.apk">
                Install MIND Wallet
              </a>
            </button>
            <button className="h-[60px] rounded-xl w-full border hover:bg-blue-400 text-blue-400 text-xl font-semibold hover:text-white" onClick={()=> setShowNotice(true)}>
              <a href="">ADD MINDCHAIN</a>
            </button>
            {showNotice && (
              <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
                <div className="bg-white text-black p-6 rounded-lg text-center w-[500px] h-[180px] shadow-2xl">
                  <h1 className="text-3xl text-gray-600 mb-4 font-semibold">MeteMask is not installed</h1>
                  <button className="mt-4 bg-blue-800 text-white font-semibold px-4 py-2 rounded" onClick={() => setShowNotice(false)}>
                    Ok
                  </button>
                </div>
              </div>
        
            ) }
          </div>
        </div>
        <div className="w-full h-[1px] bg-black"></div>
        <div>
          <div className="flex flex-col pt-4  justify-between items-center px-[30px] lg:px-[150px] lg:h-[100px] md:flex-row ">
            <div className=" text-gray-500 hover:text-black">© Mindchain Development Team</div>
            <div className=" text-gray-500 hover:text-black">
              <a href="https://www.mindwallet.app/terms-of-use">Terms of Use</a>
            </div>
            <div className=" text-gray-500 hover:text-black">
              <a href="https://www.mindwallet.app/privacy-policy">
                Privacy Policy
              </a>
            </div>
            <div>
              <div className="text-black flex justify-center items-center gap-3 text-2xl py-3 lg:py-20">
                <div className="h-10 w-10 border-none flex justify-center items-center text-gray-500 hover:text-black transition-all duration-300"><a href="https://t.me/mindchainMIND"><RiTelegram2Fill /></a></div>
                <div className="h-10 w-10 border-none flex justify-center items-center text-gray-500 hover:text-black transition-all duration-300"><a href="https://twitter.com/MindChain1"><IoLogoTwitter /></a></div>
                <div className="h-10 w-10 border-none flex justify-center items-center text-gray-500 hover:text-black transition-all duration-300"><a href="https://www.mindchainwallet.com/"><FaMedium /></a></div>
                <div className="h-10 w-10 border-none flex justify-center items-center text-gray-500 hover:text-black transition-all duration-300"><a href="https://discord.com/login?redirect_to=%2Fchannels%2F910149384858136587%2F910149385302720513"><FaGithubAlt /></a></div>
                <div className="h-10 w-10 border-none flex justify-center items-center text-gray-500 hover:text-black transition-all duration-300"><a href="https://github.com/"><FaGithub /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
