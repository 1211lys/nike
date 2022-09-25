import React from 'react';
import { Link } from 'react-router-dom';
import './SearchModal.scss';

function SearchModal({ closeTargetModal }) {
  const handleCloseModal = () => {
    closeTargetModal('search');
  };
  return (
    <div
      className="searchModalWrapper"
      onClick={() => {
        handleCloseModal();
      }}
    >
      <div
        className="searchModal"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="header">
          <div>
            <Link to="/" className="headerLeft">
              나이키
            </Link>
          </div>
          <div className="headerCenter">
            <i className="fa-solid fa-magnifying-glass headerCenterIcon" />
            <input
              type="text"
              placeholder="검색"
              className="headerCenterInput"
            />
          </div>
          <div className="headerRight">
            <button
              className="delateModal"
              onClick={() => {
                handleCloseModal();
              }}
            >
              <i className="fa-solid fa-x headerRightIcon" />
            </button>
          </div>
        </div>
        <div className="searchInfo">
          <div>최근 검색어</div>
          <div>추천 검색어</div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
