import React from 'react'
import styles from "./assets/style/style.module.scss"

import picture from "./assets/img/bird.jpg"

export default function User_like() {

    const array = new Array(9).fill(0); //假陣列
    
    return (
    <div id={`${styles["favorite-items"]}`} className="tab-content">

        {/* 桌機 12個 平板6個 手機4個 */}
        <div className="row px-sm-5 px-2 py-4" style={{ backgroundColor: "#fff", height: "60vh", overflow: "auto" }}>

            
            {
                array.map((e) => (
                    // 商品組件
                    <div className="col-6 col-sm-4 col-md-3">
                        <div id={`${styles["Product-component"]}`} className="mx-2 my-3">
                        <div className={`${styles["img-box"]}`}>
                            <img src={picture.src} alt="商品圖片"/>
                        </div>
                        <p className={`${styles["content"]}`}>
                            【步昂咖啡】水洗 肯亞 AA FAQ 中淺焙 水果調 新鮮烘焙咖啡豆 (
                            半磅227g / 包 )
                        </p>
                        <div className={`${styles["other"]}`}>
                            <p>
                            $ <span>360</span>
                            </p>
                            <div className={`${styles["icon"]}`}>icon</div>
                        </div>
                        </div>
                    </div>
                ))
            }

        </div>

        <a href="#" className="text-center" style={{ fontSize: "2rem" }}>
            <p className="mt-5 mx-auto">查看更多(放個icon啥的)</p>
        </a>
    </div>
    )
}
