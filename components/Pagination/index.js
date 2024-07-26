import React from 'react';
import styles from './assets/style/style.module.scss';

// 引入 Redux 的 useSelector 和 useDispatch
import { useSelector, useDispatch } from 'react-redux'; // 搜尋 + 執行, 都是 redux 的工具
import { setCurrentPage } from '@/redux/slices/paginationSlice'; // 引入用於設置當前頁面的 Redux action


export default function Pagination() {
  
  
  const dispatch = useDispatch(); // 初始化 dispatch 函數
  // 使用 useSelector 從 Redux 狀態中取得 total 和 currentPage 變量
  const { total, currentPage} = useSelector((state) => state.pagination);

  // 定義處理頁面點擊的函數
  const handlePageClick = (e) => {
    dispatch(setCurrentPage(e)); //傳送點擊的頁數
  };

  return (
    <div className={styles.pagination}>
      {/* 第一頁按鈕 */}
      <a href="#" onClick={() => handlePageClick(1)}>
        <i className={`fa-solid fa-angles-left ${styles.grayer}`}></i>
      </a>
      {/* 上一頁按鈕 */}
      <a href="#" onClick={() => handlePageClick(
        currentPage>1 ? currentPage - 1 : currentPage
      )}>
        <i className={`fa-solid fa-angle-left ${styles.grayer}`}></i>
      </a>
        {/* 生成頁碼按鈕 */}
        {[...Array(total)].map((_, index) => (
          <a
            key={index}
            href="#"
            className={index + 1 === currentPage ? styles.selected : ''}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </a>
        ))}
      {/* 下一頁按鈕 */}
      <a href="#" onClick={() => handlePageClick(
        currentPage<total ? currentPage + 1 : currentPage
      )}>
        <i className="fa-solid fa-angle-right"></i>
      </a>
      {/* 最後一頁按鈕 */}
      <a href="#" onClick={() => handlePageClick(total)}>
        <i className="fa-solid fa-angles-right"></i>
      </a>
    </div>
  );
}
