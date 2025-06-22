import React from "react";
import { FaGooglePlay, FaAndroid } from "react-icons/fa";
import QR from "../assets/item/qr-BCxFztlJ.svg";
import PhoneImg from "../assets/item/img-3.png";
import img from '../assets/item/img.png'
import { useState } from "react";
import Play from '../assets/item/PlayStore.png'

const APK = () => {

  const [showNotice, setShowNotice] = useState(false);
  return (
    <>
      <div>
        <div id="APK">
          <div className="bg-[#000C2A] md:h-[300px] h-[580px] flex md:justify-center px-[26px] lg:px-[150px]  lg:gap-8 text-white relative md:mb-35 mt-6 ">
            <div className="absolute md:left-0 lg:left-[300px] z-40 hidden md:block pl-[10px]"><img src={PhoneImg} className="max-h-[450px] max-w-auto lg:overflow-y-hidden" alt="" /></div>
            <div className="" >
              <div className="md:pt-15 text-lg md:gap-5 absolute md:left-80 lg:left-150 px-8 py-8">
                <h1 className="text-5xl lg:py-6 font-semibold  ">Get the wallet!</h1>
                <div className="flex flex-col justify-center items-start md:flex-row gap-3 ">
                  <div className="flex justify-center items-center gap-2"><span className="h-10 w-10 border rounded-full flex justify-center items-center">1</span>Install the wallet</div>
                  <div className="flex justify-center items-center gap-2"><span className="h-10 w-10 border rounded-full flex justify-center items-center">2</span>Save and secure your seed phrase</div>
                  <div className="flex justify-center items-center gap-2"><span className="h-10 w-10 border rounded-full flex justify-center items-center">3</span>You're ready to go!</div>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-t from-[#020305] to-[#032056] h-auto pb-8 w-auto md:h-50 md:w-[700px] lg:w-[1400px] absolute md:left-20 top-75 md:top-65 flex ">
                  <div className="flex flex-col justify-center items-start md:pl-55 lg:pl-150 pt-10 gap-3 px-8">
                    <div >
                      <button className="flex justify-start items-center gap-2 px-3 h-15 md:h-16 border w-80 md:w-[220px] lg:w-[280px] mx-auto"><img src={Play} className="h-[50px]" alt="" />
                        <p className="text-sm">Coming Soon <br /> <span className="text-2xl">Google Play</span></p></button>
                    </div>
                    <div className="flex  flex-col md:flex-row justify-center items-start gap-4">
                      <a href="https://my.mindchainwallet.com/public/mindchain-wallet.apk"><button className="flex  justify-start items-center gap-3 px-6 h-15 lg:h-15 md:h-18 border w-80 md:w-[220px] lg:w-[280px] mx-auto"> <FaAndroid className="text-5xl text-green-500" />
                        <p className="text-sm">Download for<br></br> <span className="text-[21px]">Android APK</span></p>
                      </button></a>
                      <button className="flex justify-start items-center gap-2 px-3 h-15 text-[20px] font-semibold border w-full md:w-full" onClick={() => setShowNotice(true)}><img src={img} className="h-[50px]" alt="" />ADD MINDCHAIN</button>
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
                    </div>
                  </div>
                  <div className="hidden lg:block pt-[30px] md:px-[10px]">
                    <img src={QR} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default APK;
