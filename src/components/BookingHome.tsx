import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const DatSanForm: React.FC = () => {
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [email, setEmail] = useState("");
  const [tenSanBong, setTenSanBong] = useState("Sân 1");
  const [ngayDat, setNgayDat] = useState("");
  const [gioDat, setGioDat] = useState("");
  const [thoiGianSuDung, setThoiGianSuDung] = useState("");
  const [soNguoi, setSoNguoi] = useState(0);
  const [ghiChu, setGhiChu] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const datSan = {
      hoTen,
      soDienThoai,
      email,
      tenSanBong,
      ngayDat,
      gioDat,
      thoiGianSuDung,
      soNguoi,
      ghiChu,
    };
    console.log("Dữ liệu đặt sân:", datSan);
    alert("Đặt sân thành công!");
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <h2>Thông Tin Khách Hàng</h2>
        <label>
          Họ và Tên:
          <input
            type="text"
            value={hoTen}
            onChange={(e) => setHoTen(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Số Điện Thoại:
          <input
            type="tel"
            value={soDienThoai}
            onChange={(e) => setSoDienThoai(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />

        <h2>Thông Tin Sân Bóng</h2>
        <label>
          Tên Sân Bóng:
          <select
            value={tenSanBong}
            onChange={(e) => setTenSanBong(e.target.value)}
            required
          >
            <option value="Sân 1">Sân 1</option>
            <option value="Sân 2">Sân 2</option>
          </select>
        </label>
        <br />
        <label>
          Ngày Đặt:
          <input
            type="date"
            value={ngayDat}
            onChange={(e) => setNgayDat(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Giờ Đặt:
          <input
            type="time"
            value={gioDat}
            onChange={(e) => setGioDat(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Thời Gian Sử Dụng:
          <input
            type="text"
            value={thoiGianSuDung}
            onChange={(e) => setThoiGianSuDung(e.target.value)}
            placeholder="VD: 1 giờ"
            required
          />
        </label>
        <br />
        <label>
          Số Người Chơi:
          <input
            type="number"
            value={soNguoi}
            onChange={(e) => setSoNguoi(Number(e.target.value))}
            required
          />
        </label>
        <br />
        <label>
          Ghi Chú:
          <textarea
            value={ghiChu}
            onChange={(e) => setGhiChu(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">Đặt Sân</button>
      </form>
      <Footer />
    </div>
  );
};

export default DatSanForm;
