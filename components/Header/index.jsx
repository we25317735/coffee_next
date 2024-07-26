import React,{useState} from 'react';
import styles from './asset/style/nini.module.scss'; // 使用 SCSS 模組
import Phone_menu from './Phone_menu/index'; // 使用 SCSS 模組


import IGOTBREW from './asset/img/IGOTBREW 1.png'; // LOGO
import VectorIcon from './asset/img/Vector.png'; //搜尋
import carIcon from './asset/img/car.png'; //購物車
import sandwichIcon from './asset/img/sandwich.png'; //三明治
import userIcon from './asset/img/user.png'; // 使用者
import xx from './asset/img/XX.png'; // 使用者



export default function Header() {

  const [animationClass, setAnimationClass] = useState(""); // 動畫效果
  const [animationToggle, setAnimationToggle] = useState(false); // 動畫效果開關

  const List_switch = (e) => {
    e.preventDefault();
    
    if(animationToggle){
      setAnimationClass(`${styles['slide-out']}`); 
      setAnimationToggle(!animationToggle);
    }else{
      setAnimationClass(`${styles['slide-in']}`); 
      setAnimationToggle(!animationToggle);
    }

  }


  return (
    <header>
      <div className={`${styles['container-fluid']} ${styles.desktop}`}>
        <div className={styles['wrap-left']}>
          <a href="">線上商店</a>
          <a href="">咖啡專欄</a>
          <a href="">咖啡地圖</a>
        </div>
        <div className={styles['wrap-middle']}>
          <a href="">
            <p className={styles.IGOTBREW}>Ｉ ＧＯＴ ＢＲＥＷ</p>
          </a>
        </div>
        <div className={styles['wrap-right']}>
          <a href="">
            <img src={VectorIcon.src} alt="Search" />
          </a>
          <a href="">
            <img src={carIcon.src} alt="Shopping cart" />
          </a>
          <a href="">
            <img src={userIcon.src} alt="Avatar" />
          </a>
        </div>
      </div>

      <div className={`${styles['container-fluid']} ${styles.phone}`}>
        <div className={styles['wrap-left-phone']}>
          <a href="">
            <img src={IGOTBREW.src} alt="IGOTBREW" />
          </a>
        </div>
        <div className={styles['wrap-right-phone']}>
          <a href="">
            <img src={VectorIcon.src} alt="Search" />
          </a>
          <a href="" onClick={(e)=>{List_switch(e)}}>
            <img src={animationToggle ? xx.src : sandwichIcon.src} alt="Ham" />
          </a>
        </div>
      </div>

      {/* 手機板列表 animationToggle要改*/}
      <div className={`${styles.phone} ${animationClass} ${animationToggle ? "d-block":"d-none"} p-0 `} style={{position:"relative", zIndex:2}}>
        <Phone_menu/>
      </div>
    </header>
  );
}
