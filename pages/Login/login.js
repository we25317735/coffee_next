import { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '@/context/auth'

export default function Login() {
  // 2. 在任何後代元件層級深度，使⽤ useContext(MyContext)勾⼦讀取它
  const { auth, login, logout } = useContext(AuthContext)

  return (
    <>
      <h1>會員登入頁</h1>
      <hr />
      {/* <a href="./profile">連至 會員個人資料頁(a連結)</a> */}
      <Link href="./profile">連至 會員個人資料頁(Link元件)</Link>
      <hr />
      <p>目前登入狀況: {auth.isAuth ? '已登入' : '未登入'}</p>
      <button onClick={login}>登入</button>
      <button onClick={logout}>登出</button>
    </>
  )
}