// NavBar.tsx
import React from "react";

interface NavItem {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Trang chủ", href: "#" },
  { label: "Giới thiệu", href: "#" },
  {
    label: "Dịch vụ",
    href: "#",
    dropdownItems: [
      { label: "Đặt sân", href: "./football-field" },
      { label: "Giỏ hàng", href: "#" },
      { label: "Tình trạng sân", href: "#" },
    ],
  },
  { label: "Liên hệ", href: "#" },
];

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li
            key={`nav-item-${index}`}
            className={item.dropdownItems ? "dropdown" : ""}
          >
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
  );
};

export default NavBar;
