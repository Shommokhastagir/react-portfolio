import React, { useState } from "react";
import img from "../assets/item/img-4.jpg";
import { FaTelegramPlane } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

const item = [
  {
    id: 1,
    title: "What is Mind Wallet?",
    description:
      "Mind Wallet is a non-custodial cryptocurrency wallet, similar to MetaMask and Trust Wallet. It allows users to store, send, receive, and swap cryptocurrencies securely while maintaining full control over their private keys.",
  },
  {
    id: 2,
    title: "How is Mind Wallet different from custodial wallets?",
    description:
      "Mind Wallet does not store your private keys or funds, unlike custodial wallets. You have complete control over your assets, ensuring maximum security and decentralization.",
  },
  {
    id: 3,
    title: "What blockchains does Mind Wallet support?",
    description:
      "Mind Wallet supports Mindchain Network tokens, including MIND, MUSD, BMIND, PMIND, WMIND, MKIDS and other multi-chain cryptocurrencies.",
  },
  {
    id: 4,
    title: "Is Mind Wallet secure?",
    description:
      "Yes. Mind Wallet uses advanced encryption, private key protection, and security protocols to ensure your funds remain safe. Only you have access to your wallet.",
  },
  {
    id: 5,
    title: "How do I recover my Mind Wallet if I lose my device?",
    description:
      "You can restore your wallet using the 12/24-word Secret Recovery Phrase generated during wallet creation. Mind Wallet does not store or recover your phrase, so keep it secure.",
  },
  {
    id: 6,
    title: "Can I buy crypto directly on Mind Wallet?",
    description:
      "Yes. Mind Wallet provides easy on-ramp solutions to buy crypto using fiat through integrated third-party payment providers.",
  },
  {
    id: 7,
    title: "Does Mind Wallet support token swapping?",
    description:
      "Yes. Mind Wallet has an integrated DEX swap feature, allowing you to exchange supported tokens instantly without leaving the app.",
  },
  {
    id: 8,
    title: "Can I connect Mind Wallet to DApps?",
    description:
      "Yes. Mind Wallet supports Web3 integration, enabling you to interact with DeFi platforms, NFT marketplaces, and decentralized applications (DApps)",
  },
  {
    id: 9,
    title: "Does Mind Wallet charge any fees?",
    description:
      "Mind Wallet itself does not charge fees, but network transaction fees (gas fees) apply depending on the blockchain used.",
  },
  {
    id: 10,
    title: "Do I need to complete KYC to use Mind Wallet?",
    description:
      "No. Since Mind Wallet is non-custodial, KYC verification is not required. You can use it privately and securely.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // If already open, close it
    } else {
      setActiveIndex(index); // Open the clicked one
    }
  };

  return (
    <div id="FAQ" className="md:pt-10 ">
      <div className="px-[0px] lg:px-[150px]">
        <h1 className="text-3xl px-3 font-semibold py-8">FAQ</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden">
            <img src={img} className=" lg:h-[550px] lg:w-[550px]" alt="" />
            <p className="p-3  text-lg" >
              Still have questions? Check out our<br></br> Gitbook or head to our
              Telegram chat
            </p>
            <button className="flex justify-center items-center h-15 text-xl border w-full md:w-[300px] lg:w-[400px] mx-auto m-3 md:my-5" >
              <a href="https://t.me/mindchainMIND"><span className="flex justify-center items-center gap-3">
                <FaTelegramPlane /> Telegram chat
              </span></a>
            </button>
            <button className="flex justify-center items-center h-15 border text-xl w-full md:w-[300px] lg:w-[400px] mx-auto md:my-5 m-3">
             <a href="https://my.mindchainwallet.com/public/mindchain-wallet.apk"> <span className="flex justify-center items-center gap-3">
                <IoNewspaperOutline /> Whitepaper
              </span></a>
            </button>
          </div>

          {/* FAQ List */}
          <div className="flex flex-col justify-start items-start px-3">
            {item.map((data, index) => (
              <div key={data.id} style={{ marginBottom: "10px" }}>
                <div className="flex flex-col justify-between items-between">
                  <button
                    onClick={() => toggleDetails(index)}
                    className="flex justify-between items-start w-full p-[10px] text-xl font-semibold cursor-pointer"
                  >
                    {data.title}
                    <FaCaretDown />
                  </button> 

                  {/* Show/Hide Description */}
                  {activeIndex === index && (
                    <div style={{ padding: "10px", }}>
                      {data.description}
                    </div>
                  )}
                </div>
                <div className="w-full bg-black h-[1px] my-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
