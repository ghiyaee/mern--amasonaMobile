import React from 'react';
import { Link } from 'react-router-dom';
const handelForm = (e) => {
  e.preventDefault()

}
function SingUp() {
  return (
      <div className="wrrap_sing">
          <h2 className='titel_form'>فرم ورود یا ثبت نام</h2>
      <div className="frm">
        <form onSubmit={handelForm}>
          <label htmlFor="email">ایمیل</label>
          <input type="email" id="email" required />
          <label>رمز عبور</label>
          <input type="Password" required />
          <button className="btn" type="submit" value="Submit">
            ورود
          </button>
        </form>
      </div>
      <div className="btn_login">
        <p>ثبت نام نکردید؟</p>
        <Link to="/regi">
          <button className="btn"> ثبت نام کنید</button>
        </Link>
      </div>
    </div>
  );
}

export default SingUp;
