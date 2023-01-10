import React from 'react';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className="wrrap_sing">
      <div className="frm">
        <form>
          <label for="user">نام کاربری</label>
          <input type="text" id="user" required />
          <label for="email">ایمیل</label>
          <input type="email" id="email" required />
          <label for="pass">رمز عبور</label>
          <input type="Password" id="pass" required />
          <button className="btn">تاییدواتمام ثبت نام</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
