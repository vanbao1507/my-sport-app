import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import './Styles/Header.css';

interface NavItem {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Trang chủ', href: '#' },
  { label: 'Giới thiệu', href: '#' },
  {
    label: 'Dịch vụ',
    href: '#',
    dropdownItems: [
      { label: 'Đặt sân', href: '#' },
      { label: 'Giỏ hàng', href: '#' },
      { label: 'Tình trạng sân', href: '#' },
    ],
  },
  { label: 'Liên hệ', href: '#' },
];

const carouselImages = [
  '/placeholder.svg?height=400&width=800',
  '/placeholder.svg?height=400&width=800',
  '/placeholder.svg?height=400&width=800',
];

const cardData = [
  {
    image: '/placeholder.svg?height=200&width=300',
    title: 'Sân cỏ nhân tạo 5 người',
    content: 'Sân cỏ nhân tạo 5 người với kích thước tiêu chuẩn và chất lượng cao.',
  },
  {
    image: '/placeholder.svg?height=200&width=300',
    title: 'Sân cỏ nhân tạo 7 người',
    content: 'Sân cỏ nhân tạo 7 người phù hợp cho các trận đấu và tập luyện.',
  },
  {
    image: '/placeholder.svg?height=200&width=300',
    title: 'Sân cỏ nhân tạo 11 người',
    content: 'Sân cỏ nhân tạo 11 người cho các giải đấu và trận giao hữu.',
  },
  {
    image: '/placeholder.svg?height=200&width=300',
    title: 'Dịch vụ cho thuê sân',
    content: 'Dịch vụ cho thuê sân linh hoạt theo giờ hoặc theo ngày.',
  },
];

const StickyHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header className={`sticky-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">Logo</div>
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li key={`nav-item-${index}`} className={item.dropdownItems ? 'dropdown' : ''}>
                  <a href={item.href}>{item.label}</a>
                  {item.dropdownItems && (
                    <div className="dropdown-content">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <a key={dropdownIndex} href={dropdownItem.href}>
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <Carousel images={carouselImages} />
      <main>
        <h2>Dịch vụ sân cỏ nhân tạo</h2>
        <div className="card-container">
          {cardData.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} className="card-image" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-content">{card.content}</p>
              <button className="card-button">Xem thêm</button>
            </div>
          ))}
        </div>
      </main>
      
    </>
  );
};

export default StickyHeader;