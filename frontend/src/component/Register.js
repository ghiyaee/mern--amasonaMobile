import React from 'react';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className="wrrap_sing">
      <div className="frm">
        <form>
          <label>نام کاربری</label>
          <input type="Email" />
          <label>ایمیل</label>
          <input type="Email" />
          <label>رمز عبور</label>
          <input type="Password" />
        </form>
        <Link to={'/cart'}>
          <button className="btn">تاییدواتمام ثبت نام</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
