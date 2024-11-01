import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../Styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Về chúng tôi</h3>
          <p>
            Chúng tôi cung cấp dịch vụ đặt sân thể thao chất lượng cao, giúp bạn
            tận hưởng trải nghiệm thể thao tuyệt vời.
          </p>
        </div>
        <div className="footer-section">
          <h3>Liên kết nhanh</h3>
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <a href="/dat-san">Đặt sân</a>
            </li>
            <li>
              <a href="/gia-ca">Giá cả</a>
            </li>
            <li>
              <a href="/lien-he">Liên hệ</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Liên hệ</h3>
          <p>Email: info@datsanthethao.com</p>
          <p>Điện thoại: (84) 123-456-789</p>
          <p>Địa chỉ: 123 Đường Thể Thao, Quận 1, TP.HCM</p>
        </div>
        <div className="footer-section">
          <h3>Kết nối với chúng tôi</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Đặt Sân Thể Thao. Tất cả các quyền được bảo lưu.</p>
      </div>
    </footer>
  );
};

export default Footer;
