import React,{useState, useEffect} from 'react'
import styles from "./assets/style/style.module.scss"
import picture from "./assets/img/bird.jpg"

// 分頁和它的 redux
import Pagination from '@/components/Pagination'; // 分頁組件
import { useSelector, useDispatch } from 'react-redux'; //搜尋 + 更改
import { setTotal, setCurrentPage } from '@/redux/slices/paginationSlice'; //取出要用的東西

export default function User_order() {

    const dispatch = useDispatch(); // 引入 redux 的引入
    const {currentPage} = useSelector(state => state.pagination); //redux 引入當前頁數

    const array = new Array(60).fill(0).map((_, index) => index); //假陣列 商品

    // 普通的分頁系統
    const itemsPerPage = 5; // 每頁顯示的項目數量
    const [reduxPage, setreduxPage] = useState(currentPage);
    const totalPages = Math.ceil(array.length / itemsPerPage);
    const currentItems = array.slice((reduxPage - 1) * itemsPerPage, reduxPage * itemsPerPage); 

    // 設定為 redux 跟分頁變更時再次運行
    useEffect(() => {
      dispatch(setTotal(totalPages)); // 分成幾頁
      setreduxPage(currentPage); // redux 傳過來的當前頁數
    }, [dispatch, currentPage]); 
  


    return (
        <div id={`${styles["order-info"]}`} className="tab-content">

            {/* 包覆 item 的部份 (桌幾2個, 手機3~4個), h: 65vh */}
            <div className="py-3" style={{ backgroundColor: "#fff", height: "60vh", overflow: "auto" }}>
                {
                    currentItems.map((e, index)=>(
                        <div className="mx-sm-5 mx-3 pt-3 py-4">
                            <div
                            className="d-flex py-sm-4 py-3 px-md-5 px-sm-4 px-2"
                            style={{ borderRadius: 14, backgroundColor: "#F7F2ED" }}
                            >
                            <div className={`${styles["img-box"]}`}>
                                <img
                                src={picture.src}
                                alt=""
                                />
                            </div>
                            <div className={`${styles["data-box"]} ms-md-5 ms-3`}>
                                <div>
                                <h3 className="pt-3">
                                    {e}【Simple Kaffa 興波咖啡】古吉水洗咖啡豆 淺焙
                                    200公克(世界冠軍吳則霖)
                                </h3>
                                <div className={`${styles["all-amount"]} mt-3`}>
                                    <div style={{ color: "#F7F2ED" }}>
                                    共<span>7</span>項
                                    </div>
                                </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-end pb-2">
                                <p className={`${styles["amount"]} m-0`} style={{ textWrap: "nowrap" }}>
                                    定單金額: &nbsp;
                                    <span>
                                    <strong>360</strong>
                                    </span>
                                </p>
                                <a
                                    href="#"
                                    className="ms-5"
                                    style={{ textDecoration: "none" }}
                                >
                                    <div className="details-btn">
                                    <p className="m-0">檢視明細</p>
                                    </div>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* 分頁做這邊 */}
            <Pagination/>
           
        </div>
    )
}
