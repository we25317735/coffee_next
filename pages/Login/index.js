import axios from 'axios';
import React, { useEffect } from 'react';

export default function Login() {

  useEffect(() => {
    axios.post("http://localhost:3005/users/add",{
        body: {
            ID: 'ZXC',
            account: 'aaaa',
            password: '123'
        },
        credentials: "include"
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <form action="http://localhost:3005/users/add" method="post" className='fs-1'>
      姓名: <input type="text" style={{width:"300px", height: "60px"}} /><br/>
      密碼: <input type="password" style={{width:"300px", height: "60px"}} /><br/>
      <button type='submit'>送出</button>
    </form>
  );
}
