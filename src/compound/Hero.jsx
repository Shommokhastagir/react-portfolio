import React from "react";
import QR from "../assets/item/qr-BCxFztlJ.svg";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import Img from "../assets/item/img-1.png";
import { RiTelegram2Fill } from "react-icons/ri";
import { IoLogoTwitter, IoMdHelpCircleOutline } from "react-icons/io";
import { FaMedium } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Logo from "../assets/item/PlayStore.png";
import LogoSec from "../assets/item/Logo-2.png";
import { useState } from 'react'

const Hero = () => {

  const [showNotice, setShowNotice] = useState(false);
  return (
    <div>
      <div className="bg-gradient-to-tr from-black to-blue-950 px-[16px]   mx-auto flex justify-start items-center  ">
        <div className="mt-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
            <div>
              <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start px-4 lg:px-22 lg:pt-[120px]">
                <h1 className="text-[38px] lg:text-[48px] text-violet-400 pb-2 text-center lg:text-left">
                  BUY, STORE, SEND
                  <br />
                  <span className="text-white">Your Crypto Assets</span>
                </h1>
                <p className="text-xl text-stone-50 text-center lg:text-left">
                  Mind Wallet is intuitive, easy to understand, and packed with
                  tons of useful features. It's one of the best and most secure
                  non-custodial multicurrency wallets.
                </p>
                <div className="pt-12 pb-6">
                  <button
                    className="bg-blue-200 h-[60px] w-[360px] text-2xl font-semibold"
                    onClick={() => setShowNotice(true)} // Add this line
                  >
                    ADD MINDCHAIN
                  </button>
                </div>
              </div>
              {showNotice && (
                <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
                  <div className="bg-white text-black p-6 rounded-lg text-center w-[500px] h-[180px] shadow-2xl">
                    <h2 className="text-3xl text-gray-600 mb-4 font-semibold">MeteMask is not installed</h2>
                    
                    <button
                      onClick={() => setShowNotice(false)}
                      className="mt-4 bg-blue-800 text-white font-semibold px-4 py-2 rounded"
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}

              <div className="flex justify-center lg:justify-start">
                <div className="hidden lg:block">
                  <div className="px-4 lg:px-22">
                    {" "}
                    {/* Parent padding controlled */}
                    <div className="flex justify-center lg:justify-start items-start p-2 h-[100px] w-[400px] border text-white gap-3 bg-blue-950">
                      <div>
                        <img src={QR} className="h-[80px]" alt="" />
                      </div>
                      <div>
                        <div className="text-white text-start lg:text-left">
                          Scan the QR code to install app on your phone
                        </div>
                        <div className="flex justify-start lg:justify-start gap-2 pt-1">
                          <FaApple />
                          <FaGooglePlay />
                          <a href="https://my.mindchainwallet.com/public/mindchain-wallet.apk"><FaAndroid /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden text-center text-white">
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-gray-800 h-[60px] w-[360px] flex justify-start items-center px-4 gap-4">
                    <button className="text-6xl">
                      <FaAndroid className="text-green-700" />
                    </button>
                    <div>
                      <p className="text-sm">Download For</p>
                      <h1 className="text-lg">Android APK</h1>
                    </div>
                  </div>
                  <div className="py-6">
                    <div className="bg-gray-800 h-[60px] w-[360px] flex justify-start px-4 items-center gap-4">
                      <button className="  ">
                        <img src={Logo} className="h-[55px] w-[60px]" alt="" />
                      </button>
                      <div>
                        <p className="text-sm">Coming Soon</p>
                        <h1 className="text-lg">Google Play</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <div className="hidden md:block md:pb-5">
                  <div className="flex justify-center-safe">
                    <img src={Img} className="lg:h-[600px] lg:w-[600px] md:h-[350px]" alt="" />
                  </div>
                </div>
                <div>
                  <div className="md:flex justify-center md:text-xl lg:text-2xl lg:flex ">
                    <div className="text-white flex justify-center items-center gap-3 py-3 lg:py-20">
                      <div className="h-10 w-10 border-0 hover:border hover:border-white flex justify-center items-center text-auto rounded-full shadow-2xl shadow-white transition-all duration-300">
                        <a href="https://t.me/mindchainMIND"><RiTelegram2Fill /></a>
                      </div>
                      <div className="h-10 w-10 border-0 hover:border hover:border-white flex justify-center items-center text-auto rounded-full shadow-2xl shadow-white transition-all duration-300">
                        <a href="https://twitter.com/MindChain1"><IoLogoTwitter /></a>
                      </div>
                      <div className="h-10 w-10 border-0 hover:border hover:border-white flex justify-center items-center text-auto rounded-full shadow-2xl shadow-white transition-all duration-300">
                        <a href="https://www.mindchainwallet.com/"><FaMedium /></a>
                      </div>
                      <div className="h-10 w-10 border-0 hover:border hover:border-white flex justify-center items-center text-auto rounded-full shadow-2xl shadow-white transition-all duration-300">
                        <a href="https://discord.com/login?redirect_to=%2Fchannels%2F910149384858136587%2F910149385302720513"><FaGithubAlt /></a>
                      </div>
                      <div className="h-10 w-10 border-0 hover:border hover:border-white flex justify-center items-center text-auto rounded-full shadow-2xl shadow-white transition-all duration-300">
                        <a href="https://github.com/"><FaGithub /></a>
                      </div>
                    </div>

                    <div className="lg:pt-16 pb-[20px]">
                      <div className="flex justify-center">
                        <img src={LogoSec} className="h-[70px]" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
