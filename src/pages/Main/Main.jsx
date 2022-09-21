import React from 'react';
import './Main.scss';

function Main() {
  return (
    <div>
      <div className="mainFirstImgWrapper">
        <h1 className="mainFirstImgTitle">Trending Now</h1>
        <div className="mainFristImgContainer">
          <div className="mainFirstImgBox" />
          <div className="mainSecondImgBox">
            <div className="mainSecondImg" />
            <div className="mainThirdImg" />
          </div>
        </div>
        <h1 className="mainSecondImgTitle">Trending Now</h1>
        <div className="mainSecondImgContainer">
          <div className="mainFirstImgBox" />
          <div className="mainSecondImgBox" />
        </div>
        <div className="ThirdTitle">
          <h1 className="mainSecondImgTitle">Trending Now</h1>

          {MAIN_FOOTER_IMG_DATA.map((e, idx) => {
            return (
              <div key={idx}>
                <img src={e.img} alt="#" />
                <h1>{e.name}</h1>
                <p>{e.type}</p>
                <p>{e.price}원</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;

const MAIN_FOOTER_IMG_DATA = [
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
];
