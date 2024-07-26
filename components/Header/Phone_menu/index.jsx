import React, { useState } from 'react';
import styles from "./asset/style/JunCheng.module.scss";

import arrow from './asset/img/arrow.png';
import arrow2 from './asset/img/arrow_2.png';

export default function PhoneMenu() {
  
  const [item, setItem] = useState("/"); // 初始值設置為首頁
  const [animationClass, setAnimationClass] = useState(""); // 動畫效果

  // 不同路徑的內容
  const pages = {
    // 首頁
    "/": [
      ["線上商店", "ONLINE SHOP", "true", "/product"],
      ["咖啡專欄", "ARTICLES", "false", "/articles"],
      ["咖啡地圖", "CAFE’ MAP", "false", "/cafe-map"],
      ["項目", "會員"],
      ["登入", "LOGIN", "false", "/login"],
      ["註冊", "REGISTER", "false", "/register"],
      ["會員中心", "MEMBER CENTRE", "true", "/user"],
      ["訂單管理", "ORDER MANAGEMENT", "false", "/order-management"],
    ],

    // 商品
    "/product": [
      ["返回", "", "", "/"],
      ["所有商品", "ALL PRODUCTS", "false", "/product/all_product"],
      ["咖啡人的必修課", "COURSES for COFFEE LOVERS", "true", "/product/courses"],
      ["咖啡豆", "COFFEE BEANS", "true", "/product/beans"],
      ["咖啡機", "MACHINE", "true", "/product/machines"],
      ["其他/配件", "OTHERS", "false", "/product/others"],
    ],

    // 商品: 咖啡豆
    "/product/beans": [
      ["返回", "", "", "/product"],
      ["所有咖啡豆", "ALL COFFEE BEANS", "false", "/product/beans/all"],
      ["淺、中烘焙咖啡豆", "LIGHT ROASTED", "false", "/product/beans/light"],
      ["深、中烘焙咖啡豆", "DARK ROASTED", "false", "/product/beans/dark"]
    ],

    // 商品: 機器
    "/product/machines": [
      ["返回", "", "", "/product"],
      ["所有咖啡機", "ALL MACHINE", "false", "/product/machines/all"],
      ["Nespresso系列", "Nespresso", "false", "/product/machines/nespresso"],
      ["PANASONIC系列", "PANASONIC", "false", "/product/machines/panasonic"],
      ["PHILIPS系列", "PHILIPS", "false", "/product/machines/philips"]
    ],

    // 商品: 課程
    "/product/courses": [
      ["返回", "", "", "/product"],
      ["課程總覽", "ALL COURSES", "false", "/product/courses/all_courses"],
      ["師資介紹", "TEACHERS INTRODUCTION", "false", "/product/courses/teacher"]
    ],

    // 使用者
    "/user": [
      ["返回", "", "", "/"],
      ["個人設定", "ALL MACHINE", "false", "/user/data"],
      ["交易紀錄", "Nespresso", "false", "/user/trade"],
      ["好康折扣", "PANASONIC", "false", "/user/coupon"],
      ["按讚好物", "PHILIPS", "false", "/user/like"]
    ],
  };

  // 點擊事件處理
  const itemChoose = (e, path) => {
    e.preventDefault();
    const validPaths = Object.keys(pages);

    if (validPaths.includes(path)) { // 只有特定的路徑才會觸發狀態變更
      setAnimationClass(`${styles['slide-out']}`); // 退出時，從右向左退出
      setTimeout(() => {
        setItem(path);
        setAnimationClass(`${styles['slide-in']}`); // 進入時，從左向右進入
        setTimeout(() => setAnimationClass(""), 500); // 清除動畫類
      }, 500);
    } else {
      console.log(path);
    }
  };

  // 根據當前路徑顯示對應的頁面內容
  let current_page = pages[item] || pages["/"];

  return (
    <div className={`${styles['Mobile-menu']}`}>
      <ul className={animationClass}>
        {
          current_page.map((e, index) => (
            e[0] === "返回" ?
              (
                // 返回按鈕
                <li className={`${styles['back-btn']}`}  key={index} onClick={(event) => itemChoose(event, e[3])}>
                  <a href={e[3]}>
                    <img src={arrow2.src} alt="" />
                    <p>回上一層 BACK</p>
                  </a>
                </li>
              ) :
              e[0] === "項目" ?
                (
                  <li key={index} className={`${styles['item']}`}>
                    <p>{e[1]}</p>
                  </li>
                ) :
                (
                  <li key={index} onClick={(event) => itemChoose(event, e[3])}>
                    <a href={e[3]} >
                      <div className={`styles["item-box"]`}>
                        <p>{e[0]}</p>
                        <p>{e[1]}</p>
                      </div>
                      {e[2] === "true" ?
                        (
                          <div>
                            <img src={arrow.src} alt="arrow"/>
                          </div>
                        ):
                        null
                      }
                    </a>
                  </li>
                )
          ))
        }
      </ul>
    </div>
  );
}
