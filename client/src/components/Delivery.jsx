import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './subcomponents/Footer'
import BottomFooter from './subcomponents/BottomFooter'

export default function Delivery() {
    const [isAll, setIsAll] = useState(false);
    const [isPromotion, setIsPromotion] = useState(false);
    const [isCakeIcecrem, setIsCakeIcecrem] = useState(false);
    const [isIcecremQuart, setIsIcecremQuart] = useState(false);
    const [isIcecremQuartMini, setIsIcecremQuartMini] = useState(false);
    const [isSundaySet, setIsSundaySet] = useState(false);
    const [isIcecreamBar, setIsIcecreamBar] = useState(false);
    const [isIcecreamScup, setIsIcecreamScup] = useState(false);
    const [isSmallBright, setIsSmallBright] = useState(false);
    const [isTopping, setIsTopping] = useState(false);

    const handleAll = () => {
        setIsAll(true)
        setIsPromotion(false)
        setIsCakeIcecrem(false)
        setIsIcecremQuart(false)
        setIsIcecremQuartMini(false)
        setIsSundaySet(false)
        setIsIcecreamBar(false)
        setIsIcecreamScup(false)
        setIsSmallBright(false)
        setIsTopping(false)
    }
    const handlePromotion = () => {
        setIsAll(false)
        setIsPromotion(true)
        setIsCakeIcecrem(false)
        setIsIcecremQuart(false)
        setIsIcecremQuartMini(false)
        setIsSundaySet(false)
        setIsIcecreamBar(false)
        setIsIcecreamScup(false)
        setIsSmallBright(false)
        setIsTopping(false)
    }
    const handleCakeIcecrem = () => {
        setIsAll(false)
        setIsPromotion(false)
        setIsCakeIcecrem(true)
        setIsIcecremQuart(false)
        setIsIcecremQuartMini(false)
        setIsSundaySet(false)
        setIsIcecreamBar(false)
        setIsIcecreamScup(false)
        setIsSmallBright(false)
        setIsTopping(false)
    }
    const handleIcecremQuart = () => {
        setIsAll(false)
        setIsPromotion(false)
        setIsCakeIcecrem(false)
        setIsIcecremQuart(true)
        setIsIcecremQuartMini(false)
        setIsSundaySet(false)
        setIsIcecreamBar(false)
        setIsIcecreamScup(false)
        setIsSmallBright(false)
        setIsTopping(false)
    }
    const handleIcecremQuartMini = () => {
        setIsAll(false)
        setIsPromotion(false)
        setIsCakeIcecrem(false)
        setIsIcecremQuart(false)
        setIsIcecremQuartMini(true)
        setIsSundaySet(false)
        setIsIcecreamBar(false)
        setIsIcecreamScup(false)
        setIsSmallBright(false)
        setIsTopping(false)
    }
    const handleSundaySet = () => {
        setIsAll(false)
        setIsPromotion(false)
        setIsCakeIcecrem(false)
        setIsIcecremQuart(false)
        setIsIcecremQuartMini(false)
        setIsSundaySet(true)
        setIsIcecreamBar(false)
        setIsIcecreamScup(false)
        setIsSmallBright(false)
        setIsTopping(false)
    }
    const handleIcecreamBar = () => {
        setIsAll(false)
        setIsPromotion(false)
        setIsCakeIcecrem(false)
        setIsIcecremQuart(false)
        setIsIcecremQuartMini(false)
        setIsSundaySet(false)
        setIsIcecreamBar(true)
        setIsIcecreamScup(false)
        setIsSmallBright(false)
        setIsTopping(false)
    }
    const handleIcecreamScup = () => {
        setIsAll(false)
        setIsPromotion(false)
        setIsCakeIcecrem(false)
        setIsIcecremQuart(false)
        setIsIcecremQuartMini(false)
        setIsSundaySet(false)
        setIsIcecreamBar(false)
        setIsIcecreamScup(true)
        setIsSmallBright(false)
        setIsTopping(false)
    }
    const handleSmallBright = () => {
        setIsAll(false)
        setIsPromotion(false)
        setIsCakeIcecrem(false)
        setIsIcecremQuart(false)
        setIsIcecremQuartMini(false)
        setIsSundaySet(false)
        setIsIcecreamBar(false)
        setIsIcecreamScup(false)
        setIsSmallBright(true)
        setIsTopping(false)
    }
    const handleTopping = () => {
        setIsAll(false)
        setIsPromotion(false)
        setIsCakeIcecrem(false)
        setIsIcecremQuart(false)
        setIsIcecremQuartMini(false)
        setIsSundaySet(false)
        setIsIcecreamBar(false)
        setIsIcecreamScup(false)
        setIsSmallBright(false)
        setIsTopping(true)
    }

    return (
        <>
            <Navbar />
            <div className="w-full h-[643px] bg-cover bg-center mt-[72px] mb-[40px]" style={{ backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/banner%2Fsw-banner.jpg?alt=media")` }}></div>
            <div className="max-w-[1152px] mx-auto flex flex-col">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className='px-[24px] py-[16px] w-fit'>
                            <span className={`font-Kanit font-medium text-[14px] cursor-pointer ${isAll ? "text-[#e21c23]" : "text-[#3B3B3B]"}`} onClick={handleAll}>ทั้งหมด</span>
                        </div>
                        <div className='px-[24px] py-[16px] w-fit'>
                            <span className={`font-Kanit font-medium text-[14px] cursor-pointer ${isPromotion ? "text-[#e21c23]" : "text-[#3B3B3B]"}`} onClick={handlePromotion}>ไฮไลท์ & โปรโมชั่น</span>
                        </div>
                        <div className='px-[24px] py-[16px] w-fit'>
                            <span className={`font-Kanit font-medium text-[14px] cursor-pointer ${isCakeIcecrem ? "text-[#e21c23]" : "text-[#3B3B3B]"}`} onClick={handleCakeIcecrem}>เค้กไอศกรีม</span>
                        </div>
                        <div className='px-[24px] py-[16px] w-fit'>
                            <span className={`font-Kanit font-medium text-[14px] cursor-pointer ${isIcecremQuart ? "text-[#e21c23]" : "text-[#3B3B3B]"}`} onClick={handleIcecremQuart}>ไอศกรีมควอท (450g)</span>
                        </div>
                        <div className='px-[24px] py-[16px] w-fit'>
                            <span className={`font-Kanit font-medium text-[14px] cursor-pointer ${isIcecremQuartMini ? "text-[#e21c23]" : "text-[#3B3B3B]"}`} onClick={handleIcecremQuartMini}>ไอศกรีมมินิควอท (250g)</span>
                        </div>
                        <div className='px-[24px] py-[16px] w-fit'>
                            <span className={`font-Kanit font-medium text-[14px] cursor-pointer ${isSundaySet ? "text-[#e21c23]" : "text-[#3B3B3B]"}`} onClick={handleSundaySet}>ซันเด เซต</span>
                        </div>
                        <div className='px-[24px] py-[16px] w-fit'>
                            <span className={`font-Kanit font-medium text-[14px] cursor-pointer ${isIcecreamBar ? "text-[#e21c23]" : "text-[#3B3B3B]"}`} onClick={handleIcecreamBar}>ไอศกรีมบาร์</span>
                        </div>
                        <div className='px-[24px] py-[16px] w-fit'>
                            <span className={`font-Kanit font-medium text-[14px] cursor-pointer ${isIcecreamScup ? "text-[#e21c23]" : "text-[#3B3B3B]"}`} onClick={handleIcecreamScup}>ไอศกรีมสกู๊ป</span>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className='px-[24px] py-[16px] w-fit'>
                            <span className={`font-Kanit font-medium text-[14px] cursor-pointer ${isSmallBright ? "text-[#e21c23]" : "text-[#3B3B3B]"}`} onClick={handleSmallBright}>ไอศกรีมสมอลไบทส์</span>
                        </div>
                        <div className='px-[24px] py-[16px] w-fit'>
                            <span className={`font-Kanit font-medium text-[14px] cursor-pointer ${isTopping ? "text-[#e21c23]" : "text-[#3B3B3B]"}`} onClick={handleTopping}>ท้อปปิ้ง</span>
                        </div>
                    </div>
                </div>
                <div className=" pb-[80px]">

                    <div className="pl-[24px] mt-[56px]">
                        <div className=" font-Kanit text-[32px] font-medium text-[#000000D9] pl-[10px] mb-[28px]">ไฮไลท์ & โปรโมชั่น</div>
                        <div className="grid grid-col grid-cols-4 justify-items-center">
                            <div className="w-[270px] h-[298px] rounded-[10px] shadow-[0_2px_15px_0px_rgba(0,0,0,0.05)]">
                                <img src="https://firebasestorage.googleapis.com/v0/b/assignment-codediva.appspot.com/o/Promotion%2F636218_4_TH.jfif?alt=media&token=00520118-15df-4044-a316-0ecb202ca485" alt="" className="w-full h-[180px] rounded-t-[10px]" />
                                {/* <img src="/Promotion/ICE1.jfif" alt="" className="w-full h-[180px] rounded-t-[10px]" /> */}
                                <div className="flex flex-col p-[16px] gap-[8px]">
                                    <div className="flex flex-row">
                                        <div className="w-[200px] font-Kanit text-[20px] font-medium leading-[24px] h-[48px] text-ellipsis overflow-hidden">
                                            ซื้อ 1 แถม 1 ไอศกรีม มินิ ควอท 239.- สำหรับลูกค้าทุกท่าน
                                        </div>
                                        <svg width="23px" height="26px" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0667 26.7066L15.1059 27.6526C15.6132 28.1145 16.3882 28.116 16.8973 27.656L17.9334 26.72L17.986 26.6721C24.8232 20.459 29.3334 16.3604 29.3334 11.3333C29.3334 7.22666 26.1067 4 22.0001 4C20.3695 4 18.785 4.53352 17.4827 5.44316C16.9321 5.82774 16.4319 6.27953 16.0001 6.78666C15.5682 6.27953 15.0681 5.82774 14.5175 5.44316C13.2152 4.53352 11.6307 4 10.0001 4C5.89341 4 2.66675 7.22666 2.66675 11.3333C2.66675 16.3692 7.19264 20.4732 14.0498 26.6913L14.0667 26.7066ZM16.5884 25.2398L16.5905 25.2379C20.0635 22.0818 22.7836 19.6065 24.6599 17.3109C26.5136 15.043 27.3334 13.1964 27.3334 11.3333C27.3334 8.33123 25.0022 6 22.0001 6C20.2857 6 18.6089 6.80787 17.5228 8.08334L16.5077 9.27542C16.2415 9.58801 15.7587 9.58801 15.4925 9.27542L14.4774 8.08334C13.3912 6.80787 11.7145 6 10.0001 6C6.99798 6 4.66675 8.33123 4.66675 11.3333C4.66675 13.1964 5.48657 15.0429 7.33985 17.3087C9.2161 19.6026 11.9367 22.0752 15.4102 25.2251L15.4131 25.2277L16.0052 25.7667L16.5884 25.2398Z"></path></svg>
                                    </div>
                                    <div className="font-Kanit text-[20px] font-medium leading-[30px] text-[#e21c23]">239 บาท</div>
                                </div>
                            </div>
                            <div className="w-[270px] h-[298px] rounded-[10px] shadow-[0_2px_15px_0px_rgba(0,0,0,0.05)]">
                                <img src="/Promotion/ICE1.jfif" alt="" className="w-full h-[180px] rounded-t-[10px]" />
                                <div className="flex flex-col p-[16px] gap-[8px]">
                                    <div className="flex flex-row">
                                        <div className="w-[200px] font-Kanit text-[20px] font-medium leading-[24px] h-[48px] text-ellipsis overflow-hidden">
                                            ซื้อ 1 แถม 1 ไอศกรีม มินิ ควอท 239.- สำหรับลูกค้าทุกท่าน
                                        </div>
                                        <svg width="23px" height="26px" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0667 26.7066L15.1059 27.6526C15.6132 28.1145 16.3882 28.116 16.8973 27.656L17.9334 26.72L17.986 26.6721C24.8232 20.459 29.3334 16.3604 29.3334 11.3333C29.3334 7.22666 26.1067 4 22.0001 4C20.3695 4 18.785 4.53352 17.4827 5.44316C16.9321 5.82774 16.4319 6.27953 16.0001 6.78666C15.5682 6.27953 15.0681 5.82774 14.5175 5.44316C13.2152 4.53352 11.6307 4 10.0001 4C5.89341 4 2.66675 7.22666 2.66675 11.3333C2.66675 16.3692 7.19264 20.4732 14.0498 26.6913L14.0667 26.7066ZM16.5884 25.2398L16.5905 25.2379C20.0635 22.0818 22.7836 19.6065 24.6599 17.3109C26.5136 15.043 27.3334 13.1964 27.3334 11.3333C27.3334 8.33123 25.0022 6 22.0001 6C20.2857 6 18.6089 6.80787 17.5228 8.08334L16.5077 9.27542C16.2415 9.58801 15.7587 9.58801 15.4925 9.27542L14.4774 8.08334C13.3912 6.80787 11.7145 6 10.0001 6C6.99798 6 4.66675 8.33123 4.66675 11.3333C4.66675 13.1964 5.48657 15.0429 7.33985 17.3087C9.2161 19.6026 11.9367 22.0752 15.4102 25.2251L15.4131 25.2277L16.0052 25.7667L16.5884 25.2398Z"></path></svg>
                                    </div>
                                    <div className="font-Kanit text-[20px] font-medium leading-[30px] text-[#e21c23]">239 บาท</div>
                                </div>
                            </div>
                           
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
            <BottomFooter />
        </>
    )
}
