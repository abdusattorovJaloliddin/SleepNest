import "./Hero.css";
import Bad from "./images/quality__img-1EUD4VC_.png.png";
import BedImage from "./images/heroImg-npptRuJS.png.png"; 
import { FaTruck, FaShieldAlt, FaHeadset, FaPaypal } from "react-icons/fa"; 

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-top">
            <img src={BedImage} alt="Bed" className="hero-img" />
            <div className="hero-text-container">
              <p className="hero-text-top">Ekologik</p>
              <p className="hero-text-mid">Toza Uyqu</p>
              <p className="hero-text-bottom">Mahsulotlari</p>
            </div>
          </div>
          <div className="hero-bottom">
            <ul className="hero-list">
              <li className="hero-item">
                <FaTruck className="service-icon" />
                <span className="hero-span">
                  <p className="hero-text-fot">Yetkazib berish bepul</p>
                  <blockquote className="hero-block">
                    Barcha buyurtmalar uchun bepul yetkazib berish
                  </blockquote>
                </span>
              </li>
              <li className="hero-item">
                <FaShieldAlt className="service-icon" />
                <span className="hero-span">
                  <p className="hero-text-fot">Qaytish kafolati</p>
                  <blockquote className="hero-block">
                    30 kunlik pulni qaytarish
                  </blockquote>
                </span>
              </li>
              <li className="hero-item">
                <FaHeadset className="service-icon" />
                <span className="hero-span">
                  <p className="hero-text-fot">
                    24/7 onlayn qo'llab-quvvatlash
                  </p>
                  <blockquote className="hero-block">
                    24/7 texnik yordam
                  </blockquote>
                </span>
              </li>
              <li className="hero-item">
                <FaPaypal className="service-icon" />
                <span className="hero-span">
                  <p className="hero-text-fot">Xavfsiz to'lov</p>
                  <blockquote className="hero-block">
                    Barcha to'lov usullari qabul qilinadi
                  </blockquote>
                </span>
              </li>
            </ul>
          </div>
          <div className="hero-bottom-fot">
            <div className="hero-left">
              <p className="hero-text-fotr">100%</p>
              <b className="hero-b">Material sifati</b>
            </div>
           
            <div className="hero-right">
              <h3 className="hero-title-right">
                "Ekologik Toza Uyqu Mahsulotlari"
              </h3>
              <blockquote className="hero-right-block">
                ko'p yillar davomida butun dunyoda foydalanish uchun paxta
                matolarini ishlab chiqaradigan kompaniya bo'lib kelgan
              </blockquote>
              <button className="hero-button">To'plam</button>
            </div>
            <div className="hero-center">
              <img src={Bad} alt="" className="hero-center-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
