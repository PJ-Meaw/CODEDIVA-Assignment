import React from 'react'

export default function Footer() {
    return (
        <>
            <section className="w-full h-[420px] pt-[70px] bg-cover" style={{ backgroundImage: `url("/bg-page-bottom.jpg")` }} >
                <div className="flex flex-row justify-center items-center gap-[30px]">
                    <img src="/app-screen-webp.webp" alt="" className="w-[480px] h-[350px]" />
                    <div className="flex flex-col gap-[24px]">
                        <p className="text-[40px] font-Kanit font-medium">ดาวน์โหลดที่</p>
                        <div className="flex flex-row">
                            <a href="https://play.google.com/store/apps/details?id=com.swensens1112.swensens" className="pr-[12px] cursor-pointer" target="_blank">
                                <img src="/google-play.png" alt="" className='w-[204px] h-[60px]' />
                            </a>
                            <a href="https://apps.apple.com/th/app/swensens/id1553427962" className="px-[12px] cursor-pointer" target="_blank">
                                <img src="/app-store.png" alt="" className='w-[204px] h-[60px]' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
