import './Section.css';
import Boy from './images/Link - Qanday qilib mukammal gadjetlarni tanlash mumkin → newsImg1-CeksgPws.png.png'

function Section() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-container">
          <h5 className="section-title">Yangiliklar</h5>
          <p className="section-text">Ekologik Toza Uyqu Mahsulotlari</p>
          <ul className="section-list">
            <li className="section-item">
              <img src={Boy} alt="" className="section-img" />
              <span className='section-span'>
                <p className="section-span-text">10/05/2024</p>
                <b className="section-span-b">admin tomonidan</b>
              </span>
              <p className="section-texts">Qanday qilib mukammal gadjetlarni
              tanlash mumkin</p>
              <blockquote className='section-block'>Go'zal vodiyning bug' bilan to'lganda va
              meridian quyoshi tepalikka urilganda...</blockquote>
            </li>
            <li className="section-item">
              <img src={Boy} alt="" className="section-img" />
              <span className='section-span'>
                <p className="section-span-text">10/05/2024</p>
                <b className="section-span-b">admin tomonidan</b>
              </span>
              <p className="section-texts">Zamonaviy texnologiyalardan qanday
              foydalanish kerak</p>
              <blockquote className='section-block'>Texnologiyalar hayotimizni qanday o'zgartirishi
              haqida qiziqarli hikoyalar...</blockquote>
            </li>
            <li className="section-item">
              <img src={Boy} alt="" className="section-img" />
              <span className='section-span'>
                <p className="section-span-text">10/05/2024</p>
                <b className="section-span-b">admin tomonidan</b>
              </span>
              <p className="section-texts">Kreativ g'oyalarni amalga oshirish
              yo'llarin</p>
              <blockquote className='section-block'>Texnologiyalar hayotimizni qanday o'zgartirishi
              haqida qiziqarli hikoyalar...</blockquote>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Section