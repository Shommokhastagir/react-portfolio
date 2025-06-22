import React from 'react'
import Icon1 from '../assets/Advantage/Icon1.svg'
import Icon2 from '../assets/Advantage/Icon2.svg'
import Icon3 from '../assets/Advantage/icon3 (1).svg'
import Icon4 from '../assets/Advantage/Icon3 (2).svg'
import Icon5 from '../assets/Advantage/Icon3 (3).svg'
import Icon6 from '../assets/Advantage/Icon3 (4).svg'

const Item =[
    {id:1, img: Icon1, title:"Available Devices", text:"iOS, Android",},
    {id:2, img: Icon2, title:"Secure & Private", text:"Mind Wallet prioritizes your security and anonymity. Our audited system ensures complete data integrity and gives only you access to your wallet.",},    
    {id:3, img: Icon3, title:"Simple & Universal", text:"A single wallet to manage all of your crypto on multiple blockchains seamlessly, with multiple platforms supported.",},
    {id:4, img: Icon4, title:"Transactions", text:"Experience rocket-fast transactions with Mind Wallet. Your transfers are complete in just seconds, ensuring swift and seamless operations.",},
    {id:5, img: Icon5, title:"NFT", text:"Soon we will launch NFT",},
    {id:6, img: Icon6, title:"Manage Your Portfolio", text:"Import multiple assets under one single Identity to track all your digital assets from a single dashboard.",},
];

const Advantage = () => {
  return (
    <div>
       <div id="Advantage" className="pt-8 pl-3">
        <div className=' lg:mx-[60px] md:p-[60px] '>
            <div>
                <div className='text-4xl font-semibold pb-10'>
                    <h1>Smart Advantage of Mind Wallet</h1>
                </div>
                <div >
                    <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                        {Item.map((data) => (
                            <div key={data.id} className='p-6'>
                                <div>
                                    <img src={data.img} className='h-[65px]' alt="" />
                                    <h1 className='text-2xl font-semibold'>{data.title}</h1>
                                    <p>{data.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Advantage