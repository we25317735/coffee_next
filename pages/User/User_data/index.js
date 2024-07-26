import React, { useState } from 'react'
import styles from "./assets/style/style.module.scss"

import picture from "./assets/img/a.jpg"

// 客戶資料 + 資料更改
export default function User_data() {

    const [edit_Control, setEdit_Control] = useState(false); //編輯開關

    let User_edit = () => {
        setEdit_Control(!edit_Control);
    }

  return (
    <div
        id={`${styles["basic-info"]}`}
        className="tab-content active"
        style={{ backgroundColor: "#fff" }}
    >
        {/* 編輯按鈕開啟才能觸發 submit */}
        <form action="http://localhost:3005" method='post'>
            <div className={`${styles["profile"]} d-sm-flex justify-content-start pt-md-5`}>
                <div className={`${styles["profile-pic"]} order-2 order-md-1`}>
                    <img src={picture.src} alt="使用者頭貼" />
                    {edit_Control ? (
                        <button type='button' className={`${styles["edit-pic-btn"]}`}>✎</button>
                    ) : null}
                </div>
            
                <ul className="ms-4 ms-md-0 order-1 order-md-2">
                    <li>
                        <div style={{ display: "flex" }}>
                            <p>姓名</p>
                            {edit_Control ? (
                                <input type="text" value={"林俊成"} style={{ marginLeft: 50 }}/>
                            ):(
                                <p style={{ marginLeft: 50 }}>林俊成</p>
                            )}
                        </div>
                    </li>
                    <li>
                        <div style={{ display: "flex" }}>
                            <p>性別</p>
                            {edit_Control ? (
                                <input type="text" value={"男性"} style={{ marginLeft: 50 }}/>
                            ):(
                                <p style={{ marginLeft: 50 }}>男性</p>
                            )}
                        </div>
                    </li>
                    <li>
                        <div style={{ display: "flex" }}>
                            <p>生日</p>
                            {edit_Control ? (
                                <input type="text" value={"100 07/02"} style={{ marginLeft: 50 }}/>
                            ):(
                                <p style={{ marginLeft: 50 }}>100 07/02</p>
                            )}
                        </div>
                    </li>
                    <li>
                        <div style={{ display: "flex" }}>
                            <p>電話</p>
                            {edit_Control ? (
                                <input type="text" value={"0966 535 247"} style={{ marginLeft: 50 }}/>
                            ):(
                                <p style={{ marginLeft: 50 }}>0966 535 247</p>
                            )}
                        </div>
                    </li>
                    <li>
                        <div style={{ display: "flex" }}>
                            <p style={{ whiteSpace: "nowrap" }}>信箱</p>
                            {edit_Control ? (
                                <input type="email" value={"we25317735@gmail.com"} style={{ marginLeft: 50 }}/>
                            ):(
                                <p style={{ marginLeft: 50 }}>we25317735@gmail.com</p>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        
        
            <div className={`${styles["buttons"]}  mx-auto`}>
                <button type="button" className={styles["password-btn"]} onClick={edit_Control ? User_edit : null}>
                    {edit_Control ? "放棄修改" : "修改密碼"}
                </button>

                <button type={edit_Control ? "button" : "submit"} className={`${styles["edit-btn"]}`} onClick={()=>{User_edit()}}>
                    {edit_Control ? "完成" : "編輯"}
                </button>
            </div>
        </form>
    </div>
  )
}
