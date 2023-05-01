import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function HamberkerBar({ isOpen, setIsOpen }) {
    const btnRef = useRef(null);
    const navigate = useNavigate()
    useEffect(() => {
        document.addEventListener('click', closeHamberger, true);
        return () => document.removeEventListener('click', closeHamberger, true);
    }, [])

    const closeHamberger = (e) => {
        if (btnRef.current == null) {
            // This condition for Prevent btnRef don't be used since hamberger bar closed
        }
        else if (!btnRef.current.contains(e.target)) {
            setIsOpen(false)
        } 
    }

    const handleLogout = () => {
        alert("Logout")
        navigate("/login");
        localStorage.removeItem("token")
    }
    return (
        <>
            {
                isOpen &&
                <div className="fixed top-0 left-0 w-full h-screen z-50 bg-black/50">
                    <div className="bg-white h-full w-[320px] py-[16px] absolute right-0" ref={btnRef}>
                        <div className="flex flex-col ml-[24px]  h-full relative">
                            <div className="flex flex-col my-[24px] ">
                                <span className="font-Kanit text-[24px] text-[#000000D9] font-medium">ยินดีต้อนรับ</span>
                                <span className="font-Kanit text-[20px] text-[#e21c23] font-medium">ปฏิญญา จงสุภางค์พันธุ์</span>
                            </div>
                            <div className="flex flex-row gap-[10px] text-[#787878] items-center cursor-pointer my-[24px]">
                                <svg width="21px" height="21px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17.2967 7.16267L19.9387 12.8873C19.9793 12.9747 20 13.07 20 13.1667V17.3333C20 18.436 19.1027 19.3333 18 19.3333H6C4.89733 19.3333 4 18.436 4 17.3333V13.1667C4 13.07 4.02067 12.9747 4.06133 12.8873L6.704 7.162C7.02933 6.45667 7.742 6 8.52 6H15.48C16.258 6 16.9707 6.45667 17.2967 7.16267ZM8.52003 7.33334C8.2607 7.33334 8.02336 7.48534 7.9147 7.72067L5.63203 12.6667H7.00403C7.52336 12.6667 7.97203 13.0007 8.12136 13.498L8.8367 15.8807C8.85803 15.952 8.92203 16 8.99603 16H15.004C15.078 16 15.142 15.952 15.1627 15.8813L15.878 13.498C16.0274 13.0007 16.4767 12.6667 16.9954 12.6667H18.368L16.0854 7.72067C15.9767 7.48534 15.7394 7.33334 15.48 7.33334H8.52003Z"></path></svg>
                                <span className=" font-Kanit text-[14px] font-light">ข้อความ</span>
                            </div>
                            <div className="flex flex-row gap-[10px] text-[#787878] items-center cursor-pointer my-[24px]">
                                <svg width="21px" height="21px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M20 6.5V8V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5C4 3.34315 5.34315 2 7 2H14H15.5L17 3.5L20 6.5ZM14 3.5H7C6.17157 3.5 5.5 4.17157 5.5 5V19C5.5 19.8284 6.17157 20.5 7 20.5H17C17.8284 20.5 18.5 19.8284 18.5 19V8H17C15.3431 8 14 6.65685 14 5V3.5ZM15.5 4.12134L17.8787 6.50002H17C16.1716 6.50002 15.5 5.82844 15.5 5.00002V4.12134ZM8.75 9C8.33579 9 8 9.33579 8 9.75C8 10.1642 8.33579 10.5 8.75 10.5H15.25C15.6642 10.5 16 10.1642 16 9.75C16 9.33579 15.6642 9 15.25 9H8.75ZM8 12.75C8 12.3358 8.33579 12 8.75 12H15.25C15.6642 12 16 12.3358 16 12.75C16 13.1642 15.6642 13.5 15.25 13.5H8.75C8.33579 13.5 8 13.1642 8 12.75ZM8.75 15C8.33579 15 8 15.3358 8 15.75C8 16.1642 8.33579 16.5 8.75 16.5H15.25C15.6642 16.5 16 16.1642 16 15.75C16 15.3358 15.6642 15 15.25 15H8.75Z"></path></svg>
                                <span className=" font-Kanit text-[14px] font-light">ออเดอร์</span>
                            </div>
                            <div className="flex flex-row gap-[10px] text-[#787878] items-center cursor-pointer my-[24px]">
                                <svg width="21px" height="21px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class=""><path d="M21.163 10.3857C21.4839 10.0925 21.3038 9.55786 20.871 9.51857L14.81 8.96842L12.4641 3.15082C12.2957 2.73336 11.7047 2.73352 11.5365 3.15107L9.19 8.97895L3.13278 9.51989C2.69935 9.5586 2.51881 10.0942 2.84035 10.3874L7.46 14.6L6.0807 20.8237C5.98439 21.2583 6.46126 21.5926 6.83698 21.3539L12 18.0737L17.1649 21.3551C17.5403 21.5936 18.017 21.2599 17.9213 20.8255L16.55 14.6L21.163 10.3857ZM12 16.1053L8.24 18.4947L9.24 13.9895L5.92 10.9579L10.3 10.5579L12 6.31579L13.71 10.5684L18.09 10.9684L14.77 14L15.77 18.5053L12 16.1053Z"></path></svg>
                                <span className=" font-Kanit text-[14px] font-light">สิทธิพิเศษ</span>
                            </div>
                            <div className="flex flex-row gap-[10px] text-[#787878] items-center cursor-pointer my-[24px]">
                                <svg width="21px" height="21px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M19 6.5H5C4.17157 6.5 3.5 7.17157 3.5 8V10H20.5V8C20.5 7.17157 19.8284 6.5 19 6.5ZM3.5 17V11.5H20.5V17C20.5 17.8284 19.8284 18.5 19 18.5H5C4.17157 18.5 3.5 17.8284 3.5 17ZM5 5C3.34315 5 2 6.34315 2 8V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V8C22 6.34315 20.6569 5 19 5H5ZM5.75 15.5C5.33579 15.5 5 15.8358 5 16.25C5 16.6642 5.33579 17 5.75 17H8.25C8.66421 17 9 16.6642 9 16.25C9 15.8358 8.66421 15.5 8.25 15.5H5.75Z"></path></svg>
                                <span className=" font-Kanit text-[14px] font-light">บัตรสเวนเซ่นส์การ์ด</span>
                            </div>
                            <div className="flex flex-row gap-[10px] text-[#787878] items-center cursor-pointer my-[24px]">
                                <svg width="21px" height="21px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M7.29217 8.44613C7.29217 10.8966 9.28705 12.8923 11.7375 12.8923C14.1895 12.8923 16.1844 10.8982 16.1844 8.44613C16.1844 5.99407 14.1895 4 11.7375 4C9.28624 4 7.29136 5.99488 7.29217 8.44613ZM8.91255 8.44613C8.91255 6.88816 10.1795 5.6212 11.7375 5.6212C13.2946 5.6212 14.5632 6.88816 14.5632 8.44613C14.5632 10.0041 13.2963 11.2711 11.7375 11.2711C10.1795 11.2711 8.91255 10.0041 8.91255 8.44613ZM16.8518 19.9999H18.4729C18.4729 16.37 15.4502 13.4195 11.7369 13.4195C8.02272 13.4195 5 16.37 5 19.9999H6.6212C6.6212 17.2657 8.91438 15.0406 11.7361 15.0406C14.5578 15.0406 16.8518 17.2649 16.8518 19.9999Z"></path></svg>
                                <span className=" font-Kanit text-[14px] font-light">ข้อมูลของฉัน</span>
                            </div>


                            <div className="flex flex-row gap-[10px] text-[#787878] items-center cursor-pointer absolute -bottom-0 left-0 my-[24px]" onClick={handleLogout}>
                                <svg width="21px" height="21px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class=""><path d="M13 3H11V13H13V3ZM17.83 5.17L16.41 6.59C17.99 7.86 19 9.81 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 9.81 6.01 7.86 7.58 6.58L6.17 5.17C4.23 6.82 3 9.26 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 9.26 19.77 6.82 17.83 5.17Z"></path></svg>
                                <span className=" font-Kanit text-[14px] font-light">ออกจากระบบ</span>
                            </div>

                        </div>
                    </div>
                </div>
            }

        </>
    )
}
