import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

function Nav({ showTargetModal }) {
  const [fullName, setFullName] = useState(null);
  const [token, setToken] = useState(null);
  // Nav 바에서는 토큰 값이
  // 있으면 -> 고객센터, fullName, userDefaultImage 를 보여주고
  // 없으면 -> 고객센터, 맴버 가입, 로그인이 보여진다.

  // 렌더링될때마다 실행 => Prop, state 무엇이든 바뀌어도 실행
  // useEffect(() => {});
  // 초기 렌더링될때 실행
  // useEffect(() => {}, []);
  // 초기 렌더링될때, value값이 변할 때 실행
  // useEffect(() => {}, [value]);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const fullName = localStorage.getItem('fullName');

  //   if (token && fullName) {
  //     // alert(`token: ${token}, fullName: ${fullName}`);
  //     setToken(token);
  //     setFullName(fullName);
  //   }
  // }, [localStorage.getItem('token')]);

  const handleLogout = () => {
    alert('로그아웃');
    localStorage.clear();
    setToken(null);
    setFullName(null);
  };

  return (
    <>
      <div className="navTop">
        <div className="navTopLeft">
          <p className="navTopLeftItem">조던</p>
          <p className="navTopLeftItem">컨버스</p>
        </div>
        <div className="navTopRight">
          <Link to="/item-list" className="navTopRightItem">
            고객센터
          </Link>
          {token && fullName ? (
            <>
              <p className="navTopRightItem">{fullName}</p> |
              <button className="navTopRightItem" onClick={handleLogout}>
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-in" className="navTopRightItem">
                멤버 가입
              </Link>
              <button
                className="navTopRightItem"
                onClick={() => showTargetModal('login')}
              >
                로그인
              </button>
            </>
          )}
        </div>
      </div>
      <div className="navBottom">
        <div className="navBottomLeft">
          <Link to="/" className="navBottomLeftItem">
            나이키
          </Link>
        </div>
        <div
          className="navBottomCenter"
          onMouseEnter={() => showTargetModal('viewItem')}
        >
          <Link to="/item-list" className="navBottomCenterItem">
            New Releases
          </Link>
          <Link to="/item-list" className="navBottomCenterItem">
            Men
          </Link>
          <Link to="/item-list" className="navBottomCenterItem">
            Women
          </Link>
          <Link to="/item-list" className="navBottomCenterItem">
            Kids
          </Link>
          <Link to="/item-list" className="navBottomCenterItem">
            Sale
          </Link>
        </div>
        <div className="navBottomRight">
          <div className="navBottomRightSearch">
            <i className="fa-solid fa-magnifying-glass navBottomRightSearchIcon" />
          </div>
          <div className="navBottomRightInput">
            <input
              onClick={() => showTargetModal('search')}
              type="text"
              placeholder="검색"
              className="navBottomRightInputBar"
            />
          </div>
          <div className="navBottomRightIcon">
            <Link to="#">
              <i className="fa-regular fa-heart navBottomRightItem" />
            </Link>
            <Link to="#">
              <i className="fa-solid fa-bag-shopping navBottomRightItem" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
