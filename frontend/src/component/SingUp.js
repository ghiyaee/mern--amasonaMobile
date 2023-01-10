import React from 'react';
import { Link } from 'react-router-dom';
function SingUp() {
  return (
    <div className="wrrap_sing">
      <div className="frm">
        <form>
          <label for="email" >ایمیل</label>
          <input type="email" id='email' required/>
          <label>رمز عبور</label>
          <input type="Password" required/>
          <button className="btn" type='submit' value='Submit'>ورود</button>
        </form>
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
