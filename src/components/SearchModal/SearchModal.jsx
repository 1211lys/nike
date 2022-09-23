import React, { useEffect, useRef } from 'react';
import './SearchModal.scss';

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      // console.log({ target: event.target });
      // console.log({ refCurrent: ref.current });

      // modalSearchContainer
      //
      if (ref.current && !ref.current.contains(event.target)) {
        // console.log('success');
        // alert('You clicked outside of me!');
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

function SearchModal({ handleToggleSearch }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  // <div ref={wrapperRef} className="searchModalWrapper">
  return (
    <div className="searchModal">
      <div className="header">
        <div>
          <p className="headerLeft">나이키</p>
        </div>
        <div className="headerCenter">
          <i className="fa-solid fa-magnifying-glass headerCenterIcon" />
          <input type="text" placeholder="검색" className="headerCenterInput" />
        </div>
        <div className="headerRight">
          <i className="fa-solid fa-x headerRightIcon" />
        </div>
      </div>
      <div className="searchInfo">
        <div>최근 검색어</div>
        <div>추천 검색어</div>
      </div>
    </div>
  );
}

export default SearchModal;
