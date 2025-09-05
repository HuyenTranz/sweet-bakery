import React, { useState, useEffect, useRef } from "react";
import { CaretDownFilled } from "@ant-design/icons";
import "./DropdownMenuStyle.css";

function DropdownMenu({ title, items }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Chuyển đổi trạng thái mở/đóng dropdown
    const toggleDropdown = () => setOpen(!open);

    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown-wrapper" ref={dropdownRef}>
            <button className="menu-btn" onClick={toggleDropdown}>
                <span>{title}</span>
                <CaretDownFilled />
            </button>
            {open && (
                <div className="dropdown-menu">
                    {items.map((item) => (
                        <div
                            key={item.key}
                            className="dropdown-item"
                            onClick={() => {
                                if (item.onClick) item.onClick();
                                setOpen(false);
                            }}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
