import React from 'react';
import { Link } from 'react-router-dom';
function SingUp() {
  return (
    <div className="wrrap_sing">
      <div className="frm">
        <form>
          <label>ایمیل</label>
          <input type="Email" />
          <label>رمز عبور</label>
          <input type="Password" />
        </form>
        <Link to="/cart">
          <button className="btn">ورود</button>
        </Link>
      </div>
      <div className="btn_login">
        <p>ثبت نام نکردید؟</p>
        <Link to="/regi">
          <button className="btn">ثبت نام</button>
        </Link>
      </div>
    </div>
  );
}

export default SingUp;
