import React, { useState } from 'react'
import Navbar from './Navbar';
import BottomFooter from './subcomponents/BottomFooter'

export default function Register() {
    const [sex, setSex] = useState("not specified");
    const [readContract, setReadContract] = useState(false);
    const [acceptNews, setAcceptNews] = useState(false);
    return (
        <>
            <Navbar />
            <div className="w-full mt-[72px] flex flex-col items-center bg-[#f4f4f4] h-auto py-[40px]">
                <div className="w-[480px] h-[240px] bg-cover" style={{ backgroundImage: `url("/card-head.png")` }}>
                    <div className="flex flex-col h-full justify-center items-start ml-[40px]">
                        <p className="text-[32px] font-Kanit text-white font-medium">สร้างบัญชี</p>
                        <p className="text-[14px] font-Kanit text-white font-light">สมัครสมาชิกและเริ่มใช้งาน</p>
                    </div>
                </div>
                <div className="w-[480px] h-auto py-[40px] flex flex-col items-center gap-[16px] bg-white rounded-b-[10px]">
                    <div className="flex flex-row w-full justify-center gap-[16px]">
                        <div className="flex flex-col font-Kanit gap-[8px]">
                            <p className="text-[14px] font-light">ชื่อ</p>
                            <input type="text" className="w-[192px] h-[48px] py-[4px] px-[11px] rounded-[10px] border border-[#d2d2d2] text-[14px] font-light outline-0" placeholder="กรอกชื่อ" />
                        </div>
                        <div className="flex flex-col font-Kanit gap-[8px]">
                            <p className="text-[14px] font-light">นามสกุล</p>
                            <input type="text" className="w-[192px] h-[48px] py-[4px] px-[11px] rounded-[10px] border border-[#d2d2d2] text-[14px] font-light outline-0" placeholder="กรอกนามสกุล" />
                        </div>
                    </div>
                    <div className="flex flex-col font-Kanit gap-[8px]">
                        <p className="text-[14px] font-light">เบอร์โทรศัพท์</p>
                        <input type="text" className="w-[400px] h-[48px] py-[4px] px-[11px] rounded-[10px] border border-[#d2d2d2] text-[14px] font-light outline-0" placeholder="กรอกเบอร์โทรศัพท์" />
                    </div>
                    <div className="flex flex-col font-Kanit gap-[8px]">
                        <p className="text-[14px] font-light">อีเมล</p>
                        <input type="text" className="w-[400px] h-[48px] py-[4px] px-[11px] rounded-[10px] border border-[#d2d2d2] text-[14px] font-light outline-0" placeholder="กรอกอีเมล" />
                    </div>
                    <div className="flex flex-col font-Kanit gap-[8px]">
                        <p className="text-[14px] font-light">รหัสผ่าน</p>
                        <input type="password" className="w-[400px] h-[48px] py-[4px] px-[11px] rounded-[10px] border border-[#d2d2d2] text-[14px] font-light outline-0" placeholder="กรอกรหัสผ่าน" />
                    </div>
                    <div className="w-[400px] flex flex-col font-Kanit gap-[8px]">
                        <p className="text-[14px] font-light">เพศ(ไม่ระบุได้)</p>
                        <div className="flex flex-row items-center gap-[8px]">
                            <button className={`w-[88px] h-[44px] border border-[#d2d2d2] rounded-[30px] text-[14px] font-Kanit font-light ${sex == "male" ? "bg-[#e21c23] text-white" : "text-[#e21c23]"}`} onClick={() => setSex("male")}>ชาย</button>
                            <button className={`w-[88px] h-[44px] border border-[#d2d2d2] rounded-[30px] text-[14px] font-Kanit font-light ${sex == "female" ? "bg-[#e21c23] text-white" : "text-[#e21c23]"}`} onClick={() => setSex("female")}>หญิง</button>
                            <button className={`w-[88px] h-[44px] border border-[#d2d2d2] rounded-[30px] text-[14px] font-Kanit font-light ${sex == "not specified" ? "bg-[#e21c23] text-white" : "text-[#e21c23]"}`} onClick={() => setSex("not specified")}>ไม่ระบุ</button>
                        </div>
                    </div>
                    <div className="flex flex-col font-Kanit gap-[8px]">
                        <p className="text-[14px] font-light">ของขวัญวันเกิดรอคุณอยู่</p>
                        <input type="date" className="w-[400px] h-[48px] py-[4px] px-[11px] rounded-[10px] border border-[#d2d2d2] text-[14px] font-light outline-0 text-[#a5a5a5]" />
                    </div>
                    <label className="flex flex-row items-start gap-[8px]">
                        <div className="w-[16px] h-[16px] rounded-[50px] border border-[#e21c23] flex flex-row justify-center items-center" onClick={() => setReadContract(!readContract)}>
                            <div className={`${readContract ? "" : "hidden"} w-[10px] h-[10px] rounded-[50px] bg-[#e21c23]`}></div>
                        </div>
                        <p className="font-Kanit text-[14px] text-[#787878] font-light w-[384px]">
                            ฉันได้อ่านและยอมรับ
                            <span className="text-[#e21c23]"> ข้อกำหนดการใช้งาน </span>
                            และ
                            <span className="text-[#e21c23]"> นโยบายความเป็นส่วนตัว </span>
                            ของสเวนเซ่นส์
                        </p>
                    </label>
                    <label className="flex flex-row items-start gap-[8px]">
                        <div className="w-[16px] h-[16px] rounded-[50px] border border-[#e21c23] flex flex-row justify-center items-center" onClick={() => setAcceptNews(!acceptNews)}>
                            <div className={`${acceptNews ? "" : "hidden"} w-[10px] h-[10px] rounded-[50px] bg-[#e21c23]`}></div>
                        </div>
                        <p className="font-Kanit text-[14px] text-[#787878] font-light w-[384px]">
                            ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จากสเวนเซ่นส์และ
                            <span className="text-[#e21c23]">บริษัทในเครือ</span>
                            โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ สามารถศึกษาเงื่อนไขหรือข้อตกลง
                            <span className="text-[#e21c23]"> นโยบายความเป็นส่วนตัว </span>
                            เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ
                        </p>
                    </label>
                    <button className={`${readContract ? "text-white bg-[#e21c23] " : "text-[#787878] bg-[#f4f4f4]"} w-[400px] h-[48px] transition duration-500 text-[14px] font-Kanit  font-light rounded-[30px]`}>
                        สมัครสมาชิก
                    </button>
                </div>
            </div>
            <BottomFooter/>
        </>
    )
}
