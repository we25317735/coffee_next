import Header from '@/components/Header' // 導入頁面頂部的Header組件
import React, { useState, useEffect } from 'react' // 導入React及其相關鉤子
import { useRouter } from 'next/router' // 導入Next.js的路由鉤子
import styles from "./assets/style/style.module.scss" // 導入SCSS樣式

// 導入不同分頁的組件
import User_data from './User_data' // 基本資料頁面
import User_order from './User_order' // 訂單查詢頁面
import User_like from './User_like' // 按讚好物頁面
import User_coupon from './User_coupon' // 優惠專區頁面

// 導入背景圖片
import bg_img from "./assets/img/bg-noise.png"

export default function User() {
    const router = useRouter() // 獲取路由資訊
    const { tab } = router.query // 從路由中解構出tab參數

    // 初始化分頁列表
    const [list] = useState([
        { title: "基本資料", data_target: "basic-info" }, // 基本資料分頁
        { title: "訂單查詢", data_target: "order-info" }, // 訂單查詢分頁
        { title: "按讚好物", data_target: "favorite-items" }, // 按讚好物分頁
        { title: "優惠專區", data_target: "discounts" }, // 優惠專區分頁
    ]);

    // 根據點擊顯示組件
    const [activeTab, setActiveTab] = useState(list[0].data_target);

    // 當組件掛載或tab查詢參數改變時觸發
    useEffect(() => {
        if (tab) {
            setActiveTab(tab); // 如果URL中有tab參數，設置activeTab為該參數的值
        } else {
            setActiveTab(list[0].data_target); // ULR User 後面的東西不存在時, 跳轉到 list[0] 那個
            // replace 替換路由 跟 push 很像但不會留紀錄(??) , shallow: 只改變 url 不進行資源載入
            router.replace(`/User/${list[0].data_target}`, undefined, { shallow: true });
        }
    }, [tab]); // 當tab改變時重新執行

    // 處理分頁切換
    const TabChange = (data_target) => {
        setActiveTab(data_target); // 設置activeTab為點擊的分頁
        router.push(`/User/${data_target}`, undefined, { shallow: true }); // 更新URL
    }

    return (
        <div
            // 設置背景圖片
            id={styles["user-page"]}
            style={{ backgroundImage: `url(${bg_img.src})` }}
        >
            {/* 頁面頂部的標題部分 */}
            <Header />

            {/* 會員資料區域 */}
            <div id={styles["user-data"]}>
                <h1 className="my-4" style={{ fontSize: "4rem" }}>
                    會員中心
                </h1>
                <div className={styles["tab-box"]}>
                    {/* 分頁導航按鈕 */}
                    <ul className={`nav ${styles['nav']} nav-tabs ${styles['nav-tabs']} mb-5 mb-sm-0`}>
                        {list.map((e, index) => (
                            <li key={index} className={`${styles["nav-item"]} nav-item`}>
                                <a
                                    // 根據activeTab設置當前分頁的樣式
                                    className={`nav-link ${activeTab === e.data_target ? styles.active : ""} px-sm-5 py-sm-3`}
                                    href="#"
                                    // 點擊時調用TabChange方法切換分頁
                                    onClick={() => TabChange(e.data_target)}
                                >
                                    {e.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* 根據activeTab顯示對應的分頁內容 */}
                    {activeTab === "basic-info" && <User_data />}
                    {activeTab === "order-info" && <User_order />}
                    {activeTab === "favorite-items" && <User_like />}
                    {activeTab === "discounts" && <User_coupon />}
                </div>
            </div>
        </div>
    );
}
