import React from 'react';
import { CiHeart } from 'react-icons/ci';
import Divan from './images/quality__img-1EUD4VC_.png.png'
import './Main.css';

function Main({ data}) { 
  return (
    <div className="main">
      <div className="container">
        <div className="main-container">
          <h4 className="main-titles">Qish kolleksiyasi</h4>
          <p className="main-texts">Ekologik Toza Uyqu Mahsulotlari</p>
          <div className="cards-container">
            {data.map((item, index) => (
              <div className="card" key={index}>
                <div className="image-container">
                  <img src={item.images} alt={item.title} />
                  <CiHeart className="heart" />
                </div>
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
          <div className="main-bottom-fot main-bottom-fot-1">
            <div className="main-left">
              <p className="main-text-fotr">100%</p>
              <b className="main-b">Material sifati</b>
            </div>
            <div className="main-right">
              <h3 className="main-title-right">
                "Ekologik Toza Uyqu Mahsulotlari"
              </h3>
              <blockquote className="main-right-block">
                ko'p yillar davomida butun dunyoda foydalanish uchun paxta
                mato‘larini ishlab chiqaradigan kompaniya bo'lib kelgan
              </blockquote>
              <button className="main-button">To'plam</button>
            </div>
            <div className="main-center">
              <img src={Divan} alt="Bed" className="main-center-img" />
            </div>
          </div>
          <h4 className="main-titles kuz-title">Kuz kolleksiyasi</h4>
          <p className="main-texts">Ekologik Toza Uyqu Mahsulotlari</p>
          <div className="cards-container kuz-cards">
            {data.map((item, index) => (
              <div className="card" key={`kuz-${index}`}>
                <div className="image-container">
                  <img src={item.images} alt={item.title} />
                  <CiHeart className="heart" />
                </div>
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
          <div className="main-bottom-fot main-bottom-fot-2">
            <div className="main-left">
              <p className="main-text-fotr">100%</p>
              <b className="main-b">Material sifati</b>
            </div>
            <div className="main-right">
              <h3 className="main-title-right">
                "Ekologik Toza Uyqu Mahsulotlari"
              </h3>
              <blockquote className="main-right-block">
                ko'p yillar davomida butun dunyoda foydalanish uchun paxta
                mato‘larini ishlab chiqaradigan kompaniya bo'lib kelgan
              </blockquote>
              <button className="main-button">To'plam</button>
            </div>
            <div className="main-center">
              <img src={Divan} alt="Bed" className="main-center-img" />
            </div>
          </div>
          <h4 className="main-titles yangi-title">Yangi kolleksiya</h4>
          <p className="main-texts">Ekologik Toza Uyqu Mahsulotlari</p>
          <div className="cards-container yangi-cards">
            {data.map((item, index) => (
              <div className="card" key={`yangi-${index}`}>
                <div className="image-container">
                  <img src={item.images} alt={item.title} />
                  <CiHeart className="heart" />
                </div>
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;