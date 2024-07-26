import Header from '@/components/Header'
import React, { useState } from 'react'
import styles from "./assets/style/style.module.scss"


import User_data from './User_data'
import User_order from './User_order'
import User_like from './User_like'
import User_coupon from './User_coupon'

import bg_img from "./assets/img/bg-noise.png"


export default function User() {

    // 標題和決定分頁的東西(data_target 用來跳頁和顯示 active)
    const [list, setList] = useState([
        { title: "基本資料", data_target: "#basic-info" },
        { title: "訂單查詢", data_target: "#order-info" },
        { title: "按讚好物", data_target: "#favorite-items" },
        { title: "優惠專區", data_target: "#discounts" },
    ]);
    
    // 決定顯示哪個部分
    const [activeTab, setActiveTab] = useState(list[0].data_target);

    return (
        <div
            id={styles["user-page"]}
            style={{ backgroundImage: `url(${bg_img.src})` }}
        >
            {/* header 部分 */}
            <Header/>

            {/* 開始會員資料 */}
            <div id={styles["user-data"]}>
                <h1 className="my-4" style={{ fontSize: "4rem" }}>
                會員中心
                </h1>
                <div className={styles["tab-box"]}>
                    
                    {/* 換頁按鈕 */}
                    <ul className={`nav ${styles['nav']} nav-tabs ${styles['nav-tabs']} mb-5 mb-sm-0`}>
                        {list.map((e, index) => (
                            <li key={index} className={`${styles["nav-item"]} nav-item`}>
                                <a
                                    className={`nav-link ${activeTab === e.data_target ? styles.active : ""} px-sm-5 py-sm-3`}
                                    href="#"
                                    onClick={() => setActiveTab(e.data_target)}
                                >
                                    {e.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* 基本資訊 */}
                    {activeTab === "#basic-info" && <User_data/>}

                    {/* 訂單查詢 */}
                    {activeTab === "#order-info" && <User_order/>}

                    {/* 按讚好物 */}
                    {activeTab === "#favorite-items" && <User_like/>}

                    {/* 好康優惠 */}
                    {activeTab === "#discounts" && <User_coupon/>}
                
                </div>
            </div>
        </div>
    )
}
