import React from 'react'

export default function Navbar() {

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-[72px] z-50">
                <div className="flex flex-row h-full items-center justify-between px-[24px] bg-white">
                    {/* Logo */}
                    <div className="">
                        <svg data-v-d62904aa="" width="103" height="26" viewBox="0 0 103 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="swensens-logo"><path fill-rule="evenodd" clip-rule="evenodd" d="M77.274 7.98469C77.257 8.07883 77.246 8.17393 77.2409 8.26944C77.2386 9.12659 77.2371 9.98375 77.2357 10.841C77.2328 12.5567 77.2299 14.2727 77.2198 15.9896C77.2198 16.498 77.3201 16.9231 77.7773 17.2209C77.9324 17.3346 78.0635 17.4776 78.1633 17.642C78.3257 17.8836 78.2345 18.1643 77.9548 18.2435C77.7883 18.2907 77.5688 18.3137 77.4234 18.2435C76.696 17.8949 75.9218 17.7106 75.1477 17.5264C74.9156 17.4712 74.6834 17.4159 74.4526 17.3562C74.2652 17.3143 74.0804 17.2614 73.8992 17.1978C73.5152 17.0494 73.465 16.7496 73.7989 16.505C74.0045 16.3626 74.2276 16.2474 74.4626 16.1621C74.7744 16.0408 74.9639 15.8302 75.0111 15.5064C75.0528 15.2258 75.0756 14.9428 75.0792 14.6592C75.0833 13.7347 75.0819 12.8103 75.0806 11.8859C75.0799 11.4237 75.0792 10.9615 75.0792 10.4993C75.0833 8.25273 75.0879 6.00585 75.0933 3.75863C75.0933 3.63322 75.0862 3.50638 75.0792 3.38051L75.0752 3.30846C75.0684 3.13239 75.0167 2.96098 74.9251 2.81044C74.8335 2.65991 74.7051 2.53523 74.5519 2.4482C74.403 2.35807 74.2765 2.23534 74.1819 2.08926C74.0004 1.78848 74.1628 1.51576 74.5178 1.50674C74.7737 1.50073 75.0296 1.50273 75.2859 1.50473C75.4141 1.50574 75.5424 1.50674 75.6708 1.50674H77.1998C77.668 1.50674 78.0651 1.67919 78.3027 2.08626C78.7288 2.82218 79.1339 3.57114 79.5289 4.32512C79.9968 5.21551 80.46 6.11246 80.923 7.00879L80.9244 7.01167L80.9253 7.01335L80.9261 7.01482L80.9268 7.01629C81.2096 7.56379 81.4923 8.11105 81.7758 8.65645L81.962 9.01695L81.9621 9.01723L81.9622 9.01751L81.9624 9.01779C82.2108 9.49891 82.4592 9.98005 82.7102 10.4612C82.7432 10.5237 82.7832 10.5819 82.8232 10.6401C82.8416 10.6669 82.86 10.6937 82.8777 10.7209L82.9428 10.7088C82.9652 10.6189 82.9803 10.5274 82.988 10.4351V3.34355C82.9939 3.21747 82.9636 3.09233 82.9005 2.98301C82.8374 2.8737 82.7442 2.78481 82.632 2.72693C82.5157 2.66176 82.4004 2.59459 82.2891 2.51939C82.0425 2.35396 81.9312 2.08826 82.0044 1.85465C82.0776 1.62104 82.249 1.50072 82.5799 1.50072C82.9418 1.50072 83.3038 1.49994 83.6659 1.49916C84.3901 1.49761 85.1145 1.49605 85.8384 1.50072C86.0389 1.50072 86.1262 1.44959 86.1653 1.23703C86.2705 0.660525 86.8059 0.229397 87.4145 0.197313C88.0753 0.164227 88.6508 0.544221 88.8182 1.13777C88.8881 1.36283 88.9123 1.59962 88.8892 1.83416C88.8661 2.06869 88.7963 2.29623 88.6839 2.50335C88.4026 3.05241 87.9246 3.47523 87.3454 3.68745C87.1686 3.73885 86.9878 3.7754 86.8049 3.79673L86.7809 3.72555C86.852 3.67355 86.9155 3.61178 86.9694 3.54207C87.0824 3.36221 87.1784 3.17223 87.2561 2.97458C87.3123 2.81717 87.2561 2.72794 87.0466 2.71189C86.9154 2.70185 86.7984 2.65254 86.6815 2.60328C86.6117 2.57383 86.5418 2.54441 86.4691 2.5234L86.4446 2.51653C86.3398 2.48702 86.2103 2.45053 86.1342 2.49232C85.5326 2.81918 85.1235 3.29442 85.1225 4.01531C85.1179 6.47107 85.1194 8.92683 85.121 11.3826C85.1218 12.6105 85.1225 13.8383 85.1225 15.0662C85.1225 16.2447 85.119 17.4231 85.1154 18.6021V18.6039V18.6056V18.6074C85.1136 19.1982 85.1118 19.789 85.1105 20.3801C85.1105 20.5927 85.1105 20.8143 84.8929 20.9296C84.7908 20.981 84.6757 21.0012 84.5621 20.9876C84.4486 20.9741 84.3415 20.9274 84.2543 20.8534C84.0857 20.7337 83.9446 20.5796 83.8402 20.4012C82.7286 18.2689 81.624 16.1327 80.5265 13.9924C79.5279 12.054 78.5296 10.1156 77.5317 8.1772C77.4812 8.09842 77.4235 8.02457 77.3592 7.95662L77.274 7.98469ZM23.4416 10.1334C23.4561 10.0976 23.4728 10.0566 23.4922 10.007C23.5413 10.1329 23.5719 10.198 23.6017 10.2615L23.6017 10.2615L23.6055 10.2697C23.6697 10.4821 23.7333 10.6946 23.7968 10.9073L23.7969 10.9074L23.797 10.9078L23.7972 10.9085L23.7974 10.9091C23.8747 11.1678 23.9521 11.4266 24.0307 11.6854C24.6824 13.835 25.3361 15.9843 25.9918 18.1333C26.0336 18.2774 26.0893 18.4171 26.1582 18.5504C26.3377 18.8852 26.5573 18.8993 26.7488 18.5764C26.8603 18.3808 26.9504 18.1737 27.0175 17.9588C27.1931 17.4209 27.3635 16.8812 27.5339 16.3414L27.534 16.3412L27.5342 16.3404C27.6429 15.9961 27.7516 15.6517 27.8617 15.3079C28.5936 13.0179 29.3272 10.7272 30.0624 8.43589C30.1999 8.00621 30.3369 7.57653 30.4739 7.14686C30.8165 6.0726 31.159 4.99834 31.5092 3.92408C31.5678 3.74479 31.6738 3.58471 31.816 3.46087C32.0005 3.31147 32.193 3.41775 32.2321 3.65437C32.2403 3.72088 32.243 3.78795 32.2401 3.8549C32.2348 7.53921 32.2348 11.2235 32.2401 14.9078C32.2411 15.6217 32.0015 16.1872 31.3749 16.5782C31.1979 16.7022 31.0447 16.8571 30.9227 17.0354C30.8014 17.1968 30.7232 17.3963 30.8495 17.5979C30.9758 17.7994 31.1924 17.7864 31.3929 17.7543C31.5681 17.7256 31.7416 17.6885 31.9154 17.6514C32.052 17.6222 32.1887 17.5929 32.3264 17.5678C32.7544 17.4892 33.1821 17.4094 33.6099 17.3295C34.7982 17.1076 35.9864 16.8857 37.1801 16.6925C37.7569 16.5993 38.3406 16.5502 38.9244 16.5011C39.2071 16.4774 39.4899 16.4536 39.7719 16.4248C40.3183 16.3676 40.606 16.104 40.6812 15.5655C40.8356 14.4496 40.987 13.3317 41.1364 12.2138C41.1597 12.1335 41.1597 12.0484 41.1364 11.9681L41.1323 11.9604C41.0666 11.8379 40.9807 11.6777 40.8697 11.6443C40.7995 11.635 40.7282 11.6419 40.6611 11.6645C40.594 11.6871 40.533 11.7248 40.4827 11.7746C40.3483 11.9237 40.2459 12.0987 40.1819 12.289C39.5232 14.1789 38.0774 15.0041 36.2005 15.2407C35.7904 15.2928 35.6902 15.1886 35.6902 14.7745V12.7191V10.0872L35.69 10.0725L35.6892 10.0426C35.6858 9.93404 35.6824 9.82568 35.8586 9.81951C36.5685 9.79344 37.166 10.008 37.542 10.6437C37.6201 10.7761 37.6722 10.9236 37.7244 11.0713L37.7244 11.0713C37.7587 11.1683 37.793 11.2655 37.8348 11.3585C37.9198 11.5829 38.0319 11.796 38.1687 11.9932C38.3772 12.2579 38.678 12.2007 38.7873 11.8799C38.8604 11.6586 38.8979 11.4271 38.8986 11.1941C38.9019 10.197 38.9008 9.20037 38.8997 8.20358V8.20346V8.20335V8.20324V8.20313C38.8991 7.7046 38.8986 7.20604 38.8986 6.70736C38.9022 6.64039 38.8992 6.57322 38.8895 6.50684L38.8852 6.48339C38.8526 6.30895 38.8171 6.11884 38.6118 6.07471C38.3973 6.02859 38.2609 6.16394 38.1667 6.32937C38.0383 6.55296 37.924 6.78657 37.8157 7.02118C37.4498 7.81526 36.8241 8.20528 35.9589 8.24338C35.7553 8.25241 35.6811 8.19425 35.6811 7.97969C35.6852 7.48904 35.6838 6.99883 35.6825 6.50877V6.50866V6.50855V6.50843V6.50832C35.6818 6.2635 35.6811 6.01871 35.6811 5.77392V3.71854C35.6832 3.3596 35.7563 3.28641 36.1033 3.28641L36.2856 3.28709C36.6258 3.28815 36.9661 3.2892 37.3064 3.31047C38.0022 3.35459 38.695 3.46087 39.2054 3.9722C39.4571 4.22457 39.6665 4.51914 39.8759 4.81352C39.9709 4.94719 40.0659 5.08082 40.1649 5.21044C40.3388 5.46344 40.5276 5.70584 40.7304 5.93634C40.8948 6.10479 41.1003 6.04363 41.1495 5.81402C41.2148 5.54791 41.2371 5.27306 41.2156 4.99989C41.1449 4.38283 41.051 3.76706 40.9572 3.15154C40.9339 2.99897 40.9107 2.84641 40.8878 2.69386C40.7534 1.80353 40.4597 1.54184 39.5573 1.49071H39.3568H29.4308C29.2721 1.49013 29.1138 1.50626 28.9586 1.53884C28.6357 1.60701 28.5625 1.80453 28.7731 2.06321C28.9122 2.23533 29.0718 2.38987 29.2483 2.52341C29.3725 2.60995 29.4739 2.7253 29.5437 2.85958C29.6135 2.99386 29.6498 3.14307 29.6494 3.29443C29.6594 3.59363 29.6233 3.89259 29.5421 4.18075C28.9131 6.05231 28.2744 7.92388 27.6261 9.79544C27.5875 9.90553 27.5112 10.0019 27.4348 10.0985C27.3998 10.1427 27.3648 10.187 27.3333 10.2326C27.3035 10.1838 27.2695 10.1361 27.2354 10.0885C27.1616 9.9852 27.0878 9.88192 27.0576 9.76737C26.8843 9.11493 26.7262 8.45808 26.5682 7.80181C26.5269 7.6301 26.4856 7.45842 26.444 7.28688L26.2283 6.4104L26.2283 6.41009L26.2282 6.40984L26.2281 6.4096L26.2281 6.40935C25.9768 5.3875 25.7257 4.36593 25.4684 3.34556C25.3712 2.95855 25.4664 2.65776 25.7863 2.42014C25.8804 2.35117 25.9674 2.2729 26.0459 2.18653C26.2735 1.93086 26.2124 1.66015 25.8845 1.56992C25.6585 1.51221 25.426 1.4839 25.1927 1.4857C24.301 1.48169 23.4097 1.48302 22.5186 1.48436C22.0731 1.48503 21.6277 1.4857 21.1822 1.4857C21.0319 1.48399 20.8821 1.50322 20.737 1.54285C20.4363 1.63308 20.2899 1.91983 20.4363 2.19555C20.5195 2.36099 20.6729 2.55048 20.8373 2.60462C21.2624 2.74399 21.4439 3.04578 21.5632 3.42978C21.6366 3.66631 21.7092 3.90298 21.7817 4.1396L21.7818 4.13965L21.7818 4.13971L21.7818 4.13976L21.7818 4.13981C21.9858 4.80484 22.1896 5.46953 22.4114 6.12985C22.5243 6.44544 22.532 6.78907 22.4335 7.10941C21.976 8.62691 21.5225 10.1461 21.0695 11.6639L20.9245 12.1496C20.89 12.2701 20.8429 12.3867 20.7842 12.4975C20.6979 12.6479 20.5836 12.6549 20.4974 12.5075C20.4122 12.3642 20.3449 12.211 20.2969 12.0513C19.575 9.55615 18.8561 7.05995 18.1402 4.56275C18.034 4.19378 17.9347 3.82281 17.8585 3.44683C17.7903 3.10594 17.8715 2.80816 18.1723 2.58257C18.3298 2.458 18.4686 2.31146 18.5844 2.14743C18.7809 1.88173 18.7107 1.66216 18.3939 1.57593C18.1765 1.51755 17.9523 1.48789 17.7272 1.4877C16.9409 1.48405 16.1547 1.48393 15.3684 1.4838H15.3683H15.3683H15.3683H15.3683C14.6425 1.48369 13.9165 1.48357 13.1903 1.48068C12.9222 1.4786 12.6627 1.57533 12.4614 1.75239C12.2854 1.90128 12.0806 2.01222 11.8598 2.07825C11.5976 2.15592 11.3197 2.16385 11.0534 2.10125C10.7872 2.03865 10.542 1.9077 10.3418 1.72131C9.90384 1.31496 9.35865 1.04254 8.77072 0.936259C8.09525 0.815164 7.40478 0.80264 6.72537 0.899162C4.80133 1.19093 3.05476 2.92747 2.65371 4.94475C2.35292 6.4918 2.72991 7.89547 3.55607 9.19888C4.42836 10.5705 5.64253 11.5982 6.99307 12.4755C7.31631 12.6854 7.64289 12.8907 7.96946 13.0959L7.96948 13.0959C8.63963 13.5172 9.30972 13.9384 9.95081 14.3995C10.9766 15.1162 11.8158 16.0682 12.3982 17.1758C12.8153 17.9879 13.0489 18.8441 12.9557 19.7605C12.7331 21.9292 11.0066 23.7951 8.86096 24.2072C6.55191 24.6513 4.36118 22.9799 4.20878 20.6509C4.14361 19.6031 4.52561 18.6246 5.60544 18.1684C5.82497 18.0657 6.02777 17.9305 6.20701 17.7673C6.88378 17.1948 7.21665 16.4839 7.01613 15.5856C6.8156 14.6872 6.23308 14.0927 5.37182 13.827C3.71148 13.3167 2.08021 13.9122 1.1608 15.3801C0.0338539 17.1808 -0.0954846 19.0888 0.735691 21.0369C1.72227 23.3489 3.41972 24.8729 5.88316 25.4745C 7.53074 25.8858 9.25777 25.8543 10.8893 25.3832C12.702 24.8679 14.1307 23.7971 15.1745 22.227C15.9766 21.0198 16.4729 19.6954 16.525 18.2426C16.5962 16.2483 15.9605 14.4787 14.7123 12.9286C13.8039 11.7997 12.68 10.9334 11.4176 10.2316C10.015 9.45355 8.70455 8.55019 7.6177 7.35706C6.97502 6.65222 6.42859 5.88621 6.23709 4.9277C6.03456 3.90603 6.53888 3.13902 7.55654 2.92246C8.71457 2.67581 9.67509 3.07385 10.5113 3.85189C11.1419 4.43943 11.6202 5.14126 12.0353 5.89123C12.0845 5.98 12.133 6.06928 12.1815 6.15857L12.1815 6.15863L12.1815 6.15868L12.1816 6.15874L12.1816 6.1588L12.1816 6.15883C12.3396 6.44963 12.4977 6.74061 12.681 7.01517C12.8133 7.21569 13.0279 7.39917 13.2956 7.30392C13.5633 7.20867 13.5823 6.93396 13.5633 6.70736C13.5279 6.15071 13.4576 5.59684 13.3527 5.04902C13.2143 4.41536 13.1121 3.78572 13.1522 3.13802C13.1559 3.01309 13.1782 2.8894 13.2184 2.77106C13.3156 2.51439 13.5141 2.4813 13.6595 2.7079C13.7795 2.89779 13.872 3.1037 13.9342 3.3195C14.7049 5.93969 15.4736 8.56021 16.2403 11.1811C17.1152 14.1702 17.9909 17.1597 18.8671 20.1495C18.9043 20.2951 18.9536 20.4373 19.0145 20.5747C19.1228 20.7922 19.2782 20.9767 19.5509 20.9557C19.8236 20.9346 19.947 20.7361 20.0242 20.4995C21.1431 17.0952 22.2624 13.6916 23.382 10.2887C23.3978 10.2411 23.4165 10.1951 23.4416 10.1334ZM88.7129 24.154C90.2028 25.3722 91.9755 25.7813 93.8614 25.7963C94.8755 25.8172 95.8857 25.6643 96.8482 25.3441C99.1312 24.5631 100.732 23.0311 101.621 20.7952C102.858 17.6831 102.117 14.9369 99.9644 12.4955C99.1322 11.554 98.1115 10.8432 97.0147 10.2356C95.619 9.46557 94.3226 8.55418 93.2478 7.36006C92.6272 6.67025 92.1038 5.91828 91.9123 4.98785C91.7008 3.95715 92.2121 3.18313 93.2418 2.96756C94.3447 2.73596 95.2851 3.08888 96.1013 3.81879C96.9395 4.57577 97.515 5.52325 98.0063 6.52588C98.1267 6.77257 98.29 6.99594 98.4885 7.1856C98.5557 7.24213 98.6343 7.28349 98.7189 7.30686C98.8035 7.33022 98.8922 7.33503 98.9788 7.32096C99.0861 7.29389 99.2024 7.0713 99.2114 6.92993C99.2358 6.55618 99.2261 6.18098 99.1823 5.809C99.1525 5.56391 99.1081 5.31881 99.0636 5.07372C98.9989 4.71724 98.9342 4.36076 98.9146 4.00428C98.8902 3.56179 98.9095 3.11765 98.9289 2.67344L98.9289 2.67278C98.9397 2.42573 98.9505 2.17866 98.9537 1.93185C98.9537 1.80352 98.9126 1.57592 98.8535 1.56389C98.6715 1.53647 98.4858 1.54879 98.3091 1.59998C98.2604 1.61143 98.2219 1.65623 98.1823 1.70226C98.1525 1.73684 98.1222 1.77213 98.0865 1.79449C98.0446 1.82133 98.003 1.84957 97.9611 1.87791C97.8155 1.97658 97.6682 2.07639 97.507 2.12235C97.2615 2.19593 97.0015 2.20648 96.7509 2.15304C96.5003 2.09959 96.2673 1.98386 96.0732 1.81655L96.0674 1.81187C95.7994 1.59568 95.5165 1.36744 95.2019 1.23703C94.0418 0.741746 92.7334 0.722659 91.5594 1.18389C88.741 2.25169 87.4607 5.44505 88.7119 8.27846C89.5321 10.1383 90.9859 11.4267 92.6482 12.5095C92.9965 12.7364 93.3504 12.9549 93.7041 13.1733C94.2527 13.512 94.801 13.8506 95.3282 14.22C96.4462 15.0041 97.4027 15.9576 98.0504 17.1818C98.4604 17.9558 98.6941 18.7779 98.6419 19.6602C98.5567 21.1151 97.8759 22.2701 96.773 23.1815C95.8546 23.9384 94.8119 24.3816 93.5947 24.3184C91.403 24.2051 89.7326 22.3553 89.891 20.1856C89.9512 19.3454 90.3432 18.7058 91.1152 18.3047C91.4281 18.1478 91.7193 17.951 91.9815 17.7192C93.0543 16.7416 92.9681 15.1605 91.8141 14.2762C90.5909 13.3397 88.4823 13.5763 87.3654 14.7624C86.4328 15.7449 85.9107 17.0464 85.9056 18.401C85.8565 20.7782 86.9082 22.6741 88.7129 24.154ZM50.2312 6.68927C50.2265 6.77598 50.2168 6.86235 50.2022 6.94795L50.124 6.969C50.1029 6.94272 50.0811 6.91685 50.0594 6.89096C50.014 6.83686 49.9684 6.78268 49.9284 6.72436C49.6627 6.33535 49.3963 5.94661 49.13 5.55784L49.1293 5.55685L49.1286 5.55587L49.1281 5.55507C48.3852 4.47084 47.6422 3.38633 46.9105 2.29477C46.7498 2.0343 46.5223 1.8215 46.2518 1.67837C45.9812 1.53525 45.6773 1.46698 45.3715 1.48064H42.4639C42.3552 1.4786 42.2466 1.48564 42.1391 1.5017C41.8854 1.54381 41.8373 1.66011 41.9987 1.85362C42.0889 1.96297 42.1931 2.06005 42.3085 2.14237C42.4513 2.24044 42.5726 2.36659 42.665 2.51312C42.7574 2.65965 42.819 2.82348 42.8459 2.9946C42.8807 3.18342 42.8974 3.37511 42.896 3.5671C42.8953 4.86605 42.8941 6.165 42.8929 7.46395C42.891 9.63107 42.889 11.7982 42.889 13.9653C42.89 14.4827 42.7276 14.8566 42.2554 15.1153C42.0384 15.2532 41.8567 15.44 41.725 15.6607C41.5786 15.8833 41.6859 16.1199 41.9435 16.1921C42.121 16.2367 42.3043 16.254 42.487 16.2433C43.0572 16.222 43.6265 16.1904 44.1958 16.1589L44.1962 16.1589L44.3378 16.151C44.4734 16.1424 44.6092 16.1355 44.745 16.1285L44.7451 16.1285L44.7452 16.1285L44.7452 16.1285C45.0851 16.1111 45.4249 16.0937 45.7615 16.0508C45.8432 16.0361 45.9203 16.0029 45.9871 15.9537C46.0538 15.9045 46.1084 15.8406 46.1465 15.767C46.1874 15.6416 46.0839 15.452 46.0059 15.309L46.0042 15.3058C45.9641 15.2382 45.8719 15.1966 45.7892 15.1593L45.7585 15.1454C45.2833 14.9268 45.0226 14.5539 45.0226 14.0425C45.0173 12.4383 45.019 10.8341 45.0208 9.22992C45.0217 8.42782 45.0226 7.62572 45.0226 6.82362C45.0355 6.71697 45.0577 6.61164 45.0888 6.5088L45.132 6.56886C45.2051 6.67024 45.2486 6.73068 45.2893 6.79254C45.9597 7.8199 46.6318 8.84692 47.3056 9.8736C48.5863 11.8307 49.8743 13.7828 51.1697 15.7299C51.3027 15.9307 51.4762 16.1014 51.679 16.2312C51.9718 16.4157 52.2465 16.2623 52.3017 15.9194C52.3175 15.7951 52.3239 15.6697 52.3207 15.5444C52.3147 11.6275 52.3147 7.71028 52.3207 3.79269C52.3235 3.45115 52.357 3.11055 52.421 2.77503C52.4441 2.638 52.5033 2.50959 52.5924 2.40299C52.6816 2.29639 52.7975 2.21544 52.9283 2.16844C53.1218 2.09124 53.3584 1.98596 53.3113 1.73731C53.2642 1.48866 52.9915 1.48866 52.7909 1.48866C51.7803 1.47763 50.7696 1.47864 49.759 1.48365C49.5815 1.48465 49.387 1.51072 49.3379 1.72628C49.2888 1.94185 49.4412 2.09224 49.6156 2.1514C50.138 2.32886 50.2312 2.73593 50.2312 3.20616V6.68927ZM68.0057 1.50073H71.9902C72.702 1.50073 73.056 1.81155 73.075 2.52241C73.0931 3.24879 73.0891 3.97575 73.0852 4.70284V4.70291C73.0839 4.94527 73.0825 5.18764 73.082 5.43002C73.0803 5.52156 73.0616 5.61198 73.0269 5.69672C72.9176 5.96843 72.676 6.02157 72.4765 5.804C72.3681 5.66736 72.2752 5.51906 72.1997 5.36184C72.1345 5.2473 72.0731 5.13026 72.0116 5.01321L72.0115 5.01303C71.8906 4.78279 71.7697 4.55251 71.6202 4.34117C71.0908 3.59522 70.3479 3.23227 69.4335 3.22625H67.6789C67.3991 3.22625 67.337 3.28641 67.336 3.56414C67.3313 4.88359 67.329 6.20338 67.329 7.5235C67.329 7.78518 67.4092 7.85236 67.6859 7.84634C68.5341 7.8283 69.1116 7.37712 69.3974 6.52288C69.4466 6.34728 69.5256 6.18144 69.631 6.0326C69.8315 5.77592 70.1443 5.8431 70.2486 6.15592C70.2804 6.26799 70.2943 6.3844 70.2897 6.50082V10.8863C70.2898 11.0442 70.2627 11.2009 70.2095 11.3495C70.1805 11.4386 70.1203 11.5142 70.04 11.5625C69.9597 11.6107 69.8647 11.6284 69.7724 11.6122C69.6796 11.6061 69.5914 11.5696 69.5214 11.5083C69.4515 11.4471 69.4037 11.3645 69.3854 11.2733C69.3706 11.2157 69.3563 11.158 69.3421 11.1002L69.3421 11.1001C69.3044 10.9466 69.2667 10.7933 69.2179 10.6447C69.1038 10.3277 68.8892 10.0568 68.6068 9.87304C68.3245 9.68933 67.9898 9.60293 67.6538 9.627C67.6119 9.62509 67.57 9.63176 67.5308 9.64662C67.4915 9.66148 67.4557 9.68422 67.4256 9.71342C67.3954 9.74263 67.3716 9.77769 67.3555 9.81645C67.3394 9.85521 67.3314 9.89685 67.332 9.93882V10.1143C67.332 10.4619 67.3326 10.8095 67.3331 11.1571V11.1589C67.3347 12.1141 67.3363 13.0693 67.326 14.0245C67.326 14.2882 67.4262 14.3995 67.6628 14.4627C69.3172 14.9108 70.6938 14.4546 71.8167 13.1873C71.9522 13.0345 72.0745 12.8699 72.1969 12.705L72.1971 12.7048L72.1971 12.7048C72.294 12.5744 72.3909 12.4439 72.4945 12.319L72.5146 12.2948C72.6353 12.1489 72.7755 11.9793 72.9958 12.0544C73.2284 12.1336 73.2354 12.3782 73.2204 12.5687C73.1763 13.1512 73.1061 13.7317 73.0329 14.3103C72.965 14.8386 72.889 15.3658 72.8132 15.8912L72.813 15.8928C72.7926 16.0339 72.7723 16.1747 72.7522 16.3155C72.7405 16.4065 72.7227 16.4966 72.699 16.5852C72.5988 16.9612 72.4113 17.0745 72.0293 16.9913C71.8212 16.9463 71.6138 16.8985 71.4063 16.8508L71.406 16.8507C71.0766 16.7748 70.7472 16.6989 70.4151 16.6343C68.5755 16.2939 66.7174 16.0633 64.8505 15.9435C64.2429 15.8994 63.6353 15.8553 63.0287 15.7972C62.8141 15.7771 62.5705 15.747 62.4893 15.5044C62.4131 15.2818 62.5775 15.1244 62.7259 14.989C62.8781 14.8474 63.0418 14.7187 63.2152 14.604C63.4149 14.4875 63.5793 14.319 63.6911 14.1165C63.8028 13.9141 63.8577 13.6851 63.8499 13.454V13.432C63.8514 12.6284 63.8525 11.8248 63.8536 11.0212C63.857 8.60935 63.8604 6.19753 63.8739 3.78572C63.8739 3.23828 63.7737 2.76103 63.3546 2.38204C63.325 2.35096 63.2982 2.31741 63.2743 2.28178C62.9916 1.91983 63.0879 1.62807 63.534 1.53382C63.7144 1.49959 63.8979 1.4838 64.0815 1.4867H68.0158L68.0057 1.50073ZM56.26 15.4512C56.8961 15.9506 57.6812 16.2224 58.4898 16.2233C60.2474 16.2634 62.6297 15.0883 62.7951 12.3882C62.8894 10.8301 62.3259 9.60192 61.0987 8.66447C60.755 8.40195 60.4093 8.14215 60.0636 7.88237C59.4481 7.41987 58.8327 6.95742 58.2292 6.47975C57.7818 6.11798 57.3591 5.72675 56.9639 5.30869C56.6817 5.02894 56.5062 4.6594 56.4676 4.26396C56.3944 3.48492 56.7964 3.0207 57.5704 2.96656C58.0313 2.94138 58.4901 3.04556 58.8949 3.26735C59.8614 3.76264 60.5151 4.55973 61.0445 5.48114C61.1211 5.63793 61.2227 5.78118 61.3453 5.90525C61.4506 5.99749 61.6311 6.08071 61.7514 6.05264C61.8306 6.03359 61.9178 5.80499 61.9048 5.68066C61.8651 5.2494 61.7981 4.82109 61.7043 4.39831C61.5408 3.68043 61.3824 2.96456 61.4035 2.22061C61.4024 2.129 61.3861 2.0382 61.3553 1.9519C61.235 1.57692 60.9553 1.50173 60.6736 1.76943C60.5912 1.85235 60.5157 1.94188 60.448 2.03713C60.3798 2.1267 60.2921 2.19948 60.1915 2.24989C60.0908 2.30029 59.98 2.32697 59.8675 2.32789C59.5538 2.34863 59.3171 2.19633 59.0817 2.04488C59.0326 2.01333 58.9836 1.98181 58.934 1.9519C57.9534 1.36136 56.1186 1.12474 54.8654 2.21359C54.1324 2.84725 53.7595 3.66038 53.6311 4.60585C53.4366 6.04061 53.7575 7.32998 54.8603 8.31556C55.3293 8.73591 55.8452 9.10434 56.3608 9.47259C56.5795 9.62872 56.798 9.78482 57.013 9.94482C57.206 10.0886 57.4031 10.2286 57.6003 10.3686C57.9614 10.6251 58.3232 10.882 58.6623 11.164C59.4403 11.8087 59.6449 12.6489 59.3641 13.6064C59.3081 13.8404 59.1799 14.0507 58.9976 14.2077C58.8153 14.3646 58.5882 14.4601 58.3485 14.4807C57.8351 14.5509 57.3709 14.3975 56.9238 14.1799C55.7016 13.5843 54.8363 12.6479 54.2858 11.4097C54.2253 11.2642 54.1367 11.132 54.0252 11.0206C53.9497 10.9408 53.851 10.8866 53.7431 10.8657C53.6352 10.8448 53.5234 10.8584 53.4236 10.9043C53.2 11.0056 53.1539 11.2081 53.1619 11.4287C53.1644 11.5204 53.1755 11.6117 53.195 11.7014C53.2387 11.8949 53.2823 12.0883 53.326 12.2817C53.5505 13.2773 53.7751 14.2727 54.0101 15.2668C54.0581 15.4606 54.1384 15.645 54.2477 15.8122C54.3731 16.0097 54.5515 16.0147 54.7019 15.8322C54.8019 15.6994 54.8873 15.5562 54.9566 15.4051C55.09 15.1344 55.2684 15.0081 55.5582 15.0933C55.8123 15.168 56.0503 15.2894 56.26 15.4512Z" fill="#E21C23"></path></svg>
                    </div>
                    <div className="flex flex-row items-center h-full gap-[24px]">
                        <div className="flex flex-row justify-center items-center px-[28px] border-x-[1px] h-full border-[#f4f4f4]">
                            <img src="/maps-flags.png" alt="" className="w-[24px] h-[24px] mr-[8px]" />
                            <p className=" hover:text-[#e21c23] font-Kanit cursor-pointer text-[18px] text-[#787878]">กรุณาเลือกที่อยู่จัดส่ง</p>
                            <img src="/arrow-down.png" alt="" className="w-[14px] h-[14px] ml-[67px]"/>
                        </div>
                        <button className="w-[140px] h-[48px] border-[0.5px] rounded-[50px] border-[#e21c23] bg-white font-Kanit text-[14px]   
                            font-light text-[#e21c23]">สมัครสมาชิก</button>
                        <button className="w-[140px] h-[48px] border-[1px] rounded-[50px] border-[#e21c23] bg-[#e21c23] 
                            font-Kanit text-[14px] text-[#fff] font-light">เข้าสู่ระบบ</button>
                        <div className="flex flex-row  justify-center items-center gap-[6px]">
                            <span className=" text-[18px] font-Kanit font-normal leading-[72px]  border-l-[1px] border-[#f4f4f4] text-[#787878] pl-[24px]">TH</span>
                            <img src="/arrow-down.png" alt="" className="w-[9px] h-[9px]"/>
                        </div>
                        
                    </div>


                </div>
            </div>
        </>
    )
}
