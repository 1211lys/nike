import React, { useState } from 'react';
import './SignIn.scss';

function SignIN() {
  const [inputValue, setInputValue] = useState({ id: '', pw: '', age: '' });

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleClickBtnSignIn = e => {
    e.preventDefault();

    fetch('api주소', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        id: inputValue.id,
        pw: inputValue.pw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      // .catch((error) => console.log(error))
      .then(data => {
        localStorage.setItem('TOKEN', data.accessToken);
      });
  };

  return (
    <div className="SignInWrapper">
      <h1 className="SignInTitle">나이키 멤버 가입</h1>
      <p className="SignInInfo">
        멤버가 되어 나이키가 제공하는
        <br />
        최고의 제품과 혜택을 만나보세요.
      </p>
      <form>
        <input
          className="SignInInput"
          type="text"
          placeholder="ID"
          onChange={handleChangeInput}
        />
        <input
          className="SignInInput"
          type="text"
          placeholder="P/W"
          onChange={handleChangeInput}
        />
        <input
          className="SignInInput"
          type="text"
          placeholder="P/W 다시 입력"
          onChange={handleChangeInput}
        />
        <input className="SignInInput" type="text" placeholder="주소" />
        <input className="SignInInput" type="text" placeholder="이름" />
        <button className="SignInButtonMan">남성</button>
        <button className="SignInButtonWoman">여성</button>
        <input className="SignInInput" type="text" placeholder="생년월일" />
        <button
          className="SignInButtonSignIn"
          type="button"
          onClick={handleClickBtnSignIn}
        >
          회원가입하기 (만 14세 이상)
        </button>
      </form>
    </div>
  );
}

export default SignIN;
