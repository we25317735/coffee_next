import React from 'react'
import styles from "./assets/style/style.module.scss"

import coupon1 from "./assets/img/coupon1.png"

export default function User_coupon() {

    const array = new Array(9).fill(0); //假陣列

    return (

    <div id={`${styles["discounts"]}`} className="tab-content">
        <div className="row px-sm-5 px-2 py-4"
        style={{ backgroundColor: "#fff", maxHeight: "60vh",overflow: "auto"}}>
            {
                // 優惠券組件
                array.map((e) => (
                    // 優惠券組件
                    <div className="col-md-6" key={e.id}>
                        <div id={`${styles["coupon"]}`} className="d-flex m-3">
                            <div className={`${styles["card-img-box"]}`}>
                                <img src={coupon1.src} alt="" />
                            </div>
                            <div className={`${styles["card-content"]} px-3 py-2`}>
                                <div className="d-flex justify-content-between">
                                    <p className={`${styles["discount-number"]}`}>
                                        <span>9</span>折
                                    </p>
                                    <button className={`${styles["usable-btn"]} mt-2`}>可使用</button>
                                </div>
                                <div className={`${styles["coupon-name"]} py-sm-3`}>
                                    <span>咖啡分享日</span>
                                </div>
                                <p className={`${styles["condition"]}`}>
                                    低消 $<span>300</span>
                                </p>
                                <p className={`${styles["date"]} pt-sm-4`}>
                                    有效期限:
                                    <span>2024年 06月 06日 10:45</span>
                                    截止
                                </p>
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
