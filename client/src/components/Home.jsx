import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Navbar from './Navbar'
import Footer from './subcomponents/Footer';
import BottomFooter from './subcomponents/BottomFooter';

export default function Home() {
    const nextArrow = <button className="mr-[15px]" ><img src="/slide-next.svg" alt="" className="w-[40px] h-[40px]"/></button>
    const prevArrow = <button className="ml-[15px]" ><img src="/slide-prev.svg" alt="" className="w-[40px] h-[40px]"/></button>
    const indicators = (i) => (<div className="w-[18px] h-[6px] bg-[#1D1D1D1F] test rounded-[30px] mx-[2px] cursor-pointer"></div>)

    return (
        <>
            <Navbar />
            <section className="w-full h-[680px] flex flex-row justify-center items-center bg-gradient-to-b from-[#ff807c] to-[#fd4b47] mt-[72px]">
                <div className="flex flex-row justify-center items-center gap-[30px]">
                    <div className="flex flex-col items-start">
                        <p className="text-[50px] text-white leading-[1.25] font-Kanit font-medium ">สมัครเป็นสมาชิก</p>
                        <p className="text-[50px] text-white leading-[1.25] font-Kanit max-w-[555px] font-medium">สเวนเซ่นส์วันนี้ พร้อมรับสิทธิพิเศษมากมายรอคุณอยู่ที่นี่</p>

                        <p className="text-[20px] text-white leading-[1.5] font-Kanit max-w-[555px] font-light mt-[25px]">
                            พิเศษสุดๆ!&nbsp;สำหรับสมาชิกสเวนเซ่นส์ ยิ่งกิน ยิ่งได้
                            ยิ่งคุ้ม&nbsp;ใครๆ ก็สมัครได้
                            ใช้ง่ายสะดวกสบายพร้อมสิทธิประโยชน์มากมายเพื่อคนสำคัญเช่นคุณ&nbsp;รอไม่ได้แล้ว
                            สมัครเลย
                        </p>
                        {/* Button */}
                        <img src="/button_normal.svg" alt="" className="mt-[48px] w-[289px] h-[82px] cursor-pointer" />
                    </div>
                    <img src="/banner-image.svg" alt="" className="w-[561px] h-[394px]" />
                </div>
            </section>
            <section className="w-full h-[560px] flex flex-row justify-center items-center">
                <div className="w-[1152px] flex flex-col items-start">
                    <p className="text-[32px] font-Kanit font-medium">ดีลสุดคุ้ม</p>
                    <div className="w-[1125px] h-[235px] mt-[30px]">
                        <Slide slidesToScroll={3} slidesToShow={3} indicators={indicators} duration="1000" nextArrow={nextArrow} prevArrow={prevArrow}>
                            {/* children here */}
                            <div className="w-[368px] h-[205px] px-[12px] rounded-[12px] bg-black bg-cover bg-center"
                                style={{ backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FAW SW Happy Thursday PRO Sticky Chewy Choc Fantasy Free Chewy Choc Fancy 1440x810-01.jpg?alt=media")` }}
                            ></div>
                            <div className="w-[368px] h-[205px] px-[12px] rounded-[12px] bg-black bg-cover bg-center"
                                style={{ backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FMANGO ORT PRO SUNDAE S _ BOAT1440x810px.jpg?alt=media")` }}
                            ></div>
                            <div className="w-[368px] h-[205px] px-[12px] rounded-[12px] bg-black bg-cover bg-center"
                                style={{ backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FDino_Cup - 1440x810px.jpg?alt=media")`}}
                            ></div>
                            <div className="w-[368px] h-[205px] px-[12px] rounded-[12px] bg-black bg-cover bg-center"
                                style={{ backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FDino_Cake 1.5lbs. 1440x810px-01.jpg?alt=media")`}}
                            ></div>
                        </Slide>
                    </div>
                    <p className="text-[32px] font-Kanit font-medium mt-[56px]">ข่าว</p>
                </div>
            </section>
            <Footer/>
            <BottomFooter/>
        </>
    )
}
