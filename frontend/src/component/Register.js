import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const handelForm =  (e) => {
  e.preventDefault();
 
};

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="wrrap_sing">
      <div className="frm">
        <form onSubmit={handelForm}>
          <label htmlFor="user">نام کاربری</label>
          <input type="text" id="user" required onChange={(e)=> setName(e.target.value)}  />
          <label htmlFor="email">ایمیل</label>
          <input type="email" id="email" required onChange={(e)=> setEmail(e.target.value)} />
          <label htmlFor="pass">رمز عبور</label>
          <input type="Password" id="pass" required onChange={(e)=> setPassword(e.target.value)} />
          <button className="btn" type="submit" value="Submit">
            تایید و اتمام ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
