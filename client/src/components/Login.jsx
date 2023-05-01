import React, { useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import BottomFooter from './subcomponents/BottomFooter'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleLogin = () => {
        // Preventing onClick button when button disabled
        if ((email.length != 0) && (password.length != 0)) {
            axios.post("http://localhost:3000/login", {
                email: email,
                password: password
            }).then(
                (res) => {
                    if (res.data.status == "fail") {
                        setError(true);
                        setErrorMessage(res.data.message)
                    }else{
                        localStorage.setItem("token", res.data.token)
                        alert(res.data.message)
                        navigate("/")
                    }
                }
            )
        }
    }

    return (
        <>
            <div className="w-full h-screen pt-[72px] bg-[#f4f4f4]">
                <Navbar />
                <div className="w-full flex flex-col items-center bg-[#f4f4f4] py-[40px] h-fit max-h-[30000px]">
                    <div className="w-[480px] h-[240px] bg-cover" style={{ backgroundImage: `url("/card-head.png")` }}>
                        <div className="flex flex-col h-full justify-center items-start ml-[40px]">
                            <p className="text-[32px] font-Kanit text-white font-medium">ยินดีต้อนรับ</p>
                            <p className="text-[14px] font-Kanit text-white font-light">เข้าสู่ระบบเพื่อใช้งาน</p>
                        </div>
                    </div>
                    <div className="w-[480px] h-auto py-[40px] flex flex-col items-center gap-[16px] bg-white rounded-b-[10px]">
                        <div className="flex flex-col font-Kanit gap-[8px]">
                            <p className="text-[14px] font-light">อีเมล</p>
                            <input type="text" className="w-[400px] h-[48px] py-[4px] px-[11px] rounded-[10px] border border-[#d2d2d2] text-[14px] font-light outline-0" placeholder="กรอกอีเมล" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="flex flex-col font-Kanit gap-[8px]">
                            <p className="text-[14px] font-light">รหัสผ่าน</p>
                            <input type="password" className="w-[400px] h-[48px] py-[4px] px-[11px] rounded-[10px] border border-[#d2d2d2] text-[14px] font-light outline-0" placeholder="กรอกรหัสผ่าน" onChange={(e) => setPassword(e.target.value)} />
                            <span className={`${error ? "" : "hidden"} text-[14px] text-[#e21c23] font-Kanit font-light`}>{errorMessage}</span>
                        </div>
                        <div className="w-[400px] flex flex-row justify-end">
                            <span className="text-[14px] text-[#e21c23] font-Kanit font-light cursor-pointer">ลืมรหัสผ่าน</span>
                        </div>
                        <button className={`${((email.length != 0) && (password.length != 0)) ? "text-white bg-[#e21c23] " : "text-[#787878] bg-[#f4f4f4] cursor-not-allowed"} w-[400px] h-[48px] my-[8px] transition duration-500 text-[14px] font-Kanit  font-light rounded-[30px]`}
                            onClick={handleLogin}>
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </div>
                <div className="w-full fixed left-0 bottom-0">
                    <BottomFooter />
                </div>

            </div>

        </>
    )
}
