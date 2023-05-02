import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './subcomponents/Footer'
import BottomFooter from './subcomponents/BottomFooter'
import axios from 'axios';
import Boxmenu from './subcomponents/Boxmenu';

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
    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/menu").then(
            (res) => {
                setMenu(res.data.menu)
            }
        )
    }, [])


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

                {/* ไฮไลท์ & โปรโมชั่น */}
                <div className={` ${(isPromotion || isAll)  ? "" : "hidden"}  pb-[80px]`}>
                    <div className="pl-[24px] mt-[56px]">
                        <div className=" font-Kanit text-[32px] font-medium text-[#000000D9] pl-[10px] mb-[28px]">ไฮไลท์ & โปรโมชั่น</div>
                        <div className="grid grid-col grid-cols-4 justify-items-center">
                            {
                                menu.map(
                                    (data, i) => {
                                        if(data.category == "Promotion"){
                                            return <Boxmenu image={data.image} message={data.message} price={data.price} />
                                        }
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
                
                {/* เค้กไอศกรีม */}
                <div className={` ${(isCakeIcecrem || isAll)  ? "" : "hidden"}  pb-[80px]`}>
                    <div className="pl-[24px] mt-[56px]">
                        <div className=" font-Kanit text-[32px] font-medium text-[#000000D9] pl-[10px] mb-[28px]">เค้กไอศกรีม</div>
                        <div className="grid grid-col grid-cols-4 justify-items-center">
                            {
                                menu.map(
                                    (data, i) => {
                                        if(data.category == "CakeIcecrem"){
                                            return <Boxmenu image={data.image} message={data.message} price={data.price} />
                                        }
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* ไอศกรีมควอท (450g) */}
                <div className={` ${(isIcecremQuart || isAll)  ? "" : "hidden"}  pb-[80px]`}>
                    <div className="pl-[24px] mt-[56px]">
                        <div className=" font-Kanit text-[32px] font-medium text-[#000000D9] pl-[10px] mb-[28px]">ไอศกรีมควอท (450g)</div>
                        <div className="grid grid-col grid-cols-4 justify-items-center">
                            {
                                menu.map(
                                    (data, i) => {
                                        if(data.category == "IcecremQuart"){
                                            return <Boxmenu image={data.image} message={data.message} price={data.price} />
                                        }
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* ไอศกรีมมินิควอท (250g) */}
                <div className={` ${(isIcecremQuartMini || isAll)  ? "" : "hidden"}  pb-[80px]`}>
                    <div className="pl-[24px] mt-[56px]">
                        <div className=" font-Kanit text-[32px] font-medium text-[#000000D9] pl-[10px] mb-[28px]">ไอศกรีมมินิควอท (250g)</div>
                        <div className="grid grid-col grid-cols-4 justify-items-center">
                            {
                                menu.map(
                                    (data, i) => {
                                        if(data.category == "IcecremQuartMini"){
                                            return <Boxmenu image={data.image} message={data.message} price={data.price} />
                                        }
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* ซันเด เซต */}
                <div className={` ${(isSundaySet || isAll)  ? "" : "hidden"}  pb-[80px]`}>
                    <div className="pl-[24px] mt-[56px]">
                        <div className=" font-Kanit text-[32px] font-medium text-[#000000D9] pl-[10px] mb-[28px]">ซันเด เซต</div>
                        <div className="grid grid-col grid-cols-4 justify-items-center">
                            {
                                menu.map(
                                    (data, i) => {
                                        if(data.category == "SundaySet"){
                                            return <Boxmenu image={data.image} message={data.message} price={data.price} />
                                        }
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* ไอศกรีมบาร์ */}
                <div className={` ${(isIcecreamBar || isAll)  ? "" : "hidden"}  pb-[80px]`}>
                    <div className="pl-[24px] mt-[56px]">
                        <div className=" font-Kanit text-[32px] font-medium text-[#000000D9] pl-[10px] mb-[28px]">ไอศกรีมบาร์</div>
                        <div className="grid grid-col grid-cols-4 justify-items-center">
                            {
                                menu.map(
                                    (data, i) => {
                                        if(data.category == "IcecreamBar"){
                                            return <Boxmenu image={data.image} message={data.message} price={data.price} />
                                        }
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* ไอศกรีมสกู๊ป */}
                <div className={` ${(isIcecreamScup || isAll)  ? "" : "hidden"}  pb-[80px]`}>
                    <div className="pl-[24px] mt-[56px]">
                        <div className=" font-Kanit text-[32px] font-medium text-[#000000D9] pl-[10px] mb-[28px]">ไอศกรีมสกู๊ป</div>
                        <div className="grid grid-col grid-cols-4 justify-items-center">
                            {
                                menu.map(
                                    (data, i) => {
                                        if(data.category == "IcecreamScup"){
                                            return <Boxmenu image={data.image} message={data.message} price={data.price} />
                                        }
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* ไอศกรีมสมอลไบทส์ */}
                <div className={` ${(isSmallBright || isAll)  ? "" : "hidden"}  pb-[80px]`}>
                    <div className="pl-[24px] mt-[56px]">
                        <div className=" font-Kanit text-[32px] font-medium text-[#000000D9] pl-[10px] mb-[28px]">ไอศกรีมสมอลไบทส์</div>
                        <div className="grid grid-col grid-cols-4 justify-items-center">
                            {
                                menu.map(
                                    (data, i) => {
                                        if(data.category == "SmallBright"){
                                            return <Boxmenu image={data.image} message={data.message} price={data.price} />
                                        }
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* ท้อปปิ้ง */}
                <div className={` ${(isTopping || isAll)  ? "" : "hidden"}  pb-[80px]`}>
                    <div className="pl-[24px] mt-[56px]">
                        <div className=" font-Kanit text-[32px] font-medium text-[#000000D9] pl-[10px] mb-[28px]">ท้อปปิ้ง</div>
                        <div className="grid grid-col grid-cols-4 justify-items-center">
                            {
                                menu.map(
                                    (data, i) => {
                                        if(data.category == "Topping"){
                                            return <Boxmenu image={data.image} message={data.message} price={data.price} />
                                        }
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>


                
            </div>
            <Footer />
            <BottomFooter />
        </>
    )
}
