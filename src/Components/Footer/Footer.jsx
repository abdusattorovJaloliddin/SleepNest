import "./Footer.css";
import Logo from "./images/logo.png";
import { RiTelegramFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-main">
              <img src={Logo} alt="SleepNest Logo" />
              <p className="footer-left-text">
                “Ekologik Toza Uyqu Mahsulotlat” koʻp yillardan buyon butun
                dunyoda foydalanish uchun paxta matolari ishlab chiqaradigan
                kompaniya hisoblanadi.
              </p>
            </div>
            <div className="footer-second">
              <h6 className="footer-title">MENYU</h6>
              <a href="#" className="footer-link">
                Bosh sahifa
              </a>
              <a href="#" className="footer-link">
                To'plam
              </a>
              <a href="#" className="footer-link">
                Biz haqimizda
              </a>
              <a href="#" className="footer-link">
                Kontaktlar
              </a>
            </div>
            <div className="footer-third">
              <h6 className="footer-title">Kontaktlar</h6>
              <p>Buxoro, st. Alpomish 80.</p>
              <p>Email: sleepnest@gamil.com</p>
              <p>Telegram: sleepnest</p>
              <p>+998 94 033 72 12</p>
            </div>
            <div className="footer-end">
              <h6 className="footer-title-end">
                Elektron pochtamizga obuna bo'ling
              </h6>
              <div className="footer-subscribe">
                <input
                  type="text"
                  placeholder="Elektron pochtamizga obuna bo'ling"
                />
                <button>Obuna Bo'ling</button>
              </div>
              <p>Kamida bitta roʻyxatni tanlang.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © 2024 MChJ Ekologik Toza Uyqu Mahsulotlari Barcha huquqlar
              himoyalangan.
            </p>
            <RiTelegramFill className="tg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
