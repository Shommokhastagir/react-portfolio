import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaGooglePlay, FaAndroid } from "react-icons/fa";
import img from "../assets/item/img-2.png";
import MobileImage from "../assets/item/img-3.png";
import MindchainLogo from "../assets/item/Logo-2.png";
import play from "../assets/item/PlayStore.png";
import img1 from "../assets/item/img.png";
import QR from "../assets/item/qr-BCxFztlJ.svg";

const Feature = () => {
  return (
    <div id="Feature" className="">
      <div className="mx-auto">
        <div className="m-[0px] py-20 lg:mx-[120px] p-[16px] bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 h-100% w-100%">
            <div>
              <h1 className="text-4xl font-semibold ">
                A Wallet Worth Relying On
              </h1>
              <img src={img} alt="" />
            </div>
            <div className="flex flex-col justify-center items-start pl-10 gap-20 text-xl">
              <p>
                Web3-like interface for Everscale provided by the MIND Wallet
                browser extension. Here's an approximate list of methods that
                you can work with:
              </p>
              <div className="cursor-pointer">
                <div className="flex justify-start items-center gap-6 hover:text-blue-800 pb-2">
                  <FaCheck />
                  <h1>Your Crypto, In Your Control.</h1>
                </div>
                <div className="flex justify-start items-center gap-6 hover:text-blue-800 pb-2">
                  <FaCheck />
                  <h1>Smart Contract Powered Wallet.</h1>
                </div>
                <div className="flex justify-start items-center gap-6 hover:text-blue-800 pb-2">
                  <FaCheck />
                  <h1>Seed Phrase Management</h1>
                </div>
                <div className="flex justify-start items-center gap-6 hover:text-blue-800 pb-2">
                  <FaCheck />
                  <h1>24/7 Live Customer Support</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
