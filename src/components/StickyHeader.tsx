// StickyHeader.tsx
import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import NavBar from './NavBar';
import Card from './Card';


const carouselImages = [
  'https://foba.vn/wp-content/uploads/2020/09/Hinh-anh-%E2%80%93-2020-San-Bong-Cu-Chi-Sau-01-Nam-Khai-Thac-1.jpg',
  'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/17160690/pexels-photo-17160690/free-photo-of-n-c-anh-london-san-v-n-d-ng-emirates-arsenal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const cardData = [
  {
    image: 'https://www.sanbongro.com.vn/sources/utils/timthumb.php?src=https://www.sanbongro.com.vn/uploads/supply/2019/01/07/thi_cong_san_bong_da_mini_5_nguoi_tiet_kiem.jpg&w=480&h=480&zc=2&a=t&wm=0',
    title: 'Sân cỏ nhân tạo 5 người',
    content: 'Sân cỏ nhân tạo 5 người với kích thước tiêu chuẩn và chất lượng cao.',
  },
  {
    image: 'https://sonsanepoxy.vn/wp-content/uploads/2023/08/kich-thuoc-san-bong-da-1.jpg',
    title: 'Sân cỏ nhân tạo 7 người',
    content: 'Sân cỏ nhân tạo 7 người phù hợp cho các trận đấu và tập luyện.',
  },
  {
    image: 'https://www.tinhphuqui.vn/uploads/supply/2023/10/24/14.jpg',
    title: 'Sân cỏ nhân tạo 11 người',
    content: 'Sân cỏ nhân tạo 11 người cho các giải đấu và trận giao hữu.',
  },
  {
    image: 'https://thethaotruonggiang.com/wp-content/uploads/2018/09/kich-thuoc-san-bong-tieu-chuan-700x450.jpg',
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
          <NavBar />
        </div>
      </header>
      <Carousel images={carouselImages} />
      <main>
        <h2>Dịch vụ sân cỏ nhân tạo</h2>
        <div className="card-container">
          {cardData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </main>
    </>
  );
};

export default StickyHeader;
