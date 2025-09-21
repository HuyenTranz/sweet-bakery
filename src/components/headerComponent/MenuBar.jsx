import React, { useRef, useState, useEffect } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import "./MenuBarStyle.scss";
import DropdownMenu from "../dropdownMenu/DropdownMenu";

const items = [
    { key: "trungthu", label: "Bánh Trung Thu" },
    { key: "kem", label: "Bánh Kem" },
    { key: "bap", label: "Bánh Bắp" },
    { key: "cheese", label: "Cheese Cake" },
    { key: "raucau", label: "Rau Câu" },
    { key: "cuoi", label: "Bánh Cưới" },
    { key: "tea", label: "Tea Break" },
    { key: "nuong", label: "Bánh Nướng" },
    { key: "gateaux", label: "Gateaux" },
    { key: "cookies", label: "Cookies" },
    { key: "muffin", label: "Muffin" },
];

function MenuBar() {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    /**
     * @description Hàm kiểm tra và cập nhật trạng thái cuộn của danh sách.
     * Hàm này được gọi khi có bất kỳ thay đổi nào về kích thước hoặc vị trí cuộn.
     */
    const checkScroll = () => {
        if (scrollRef.current) {
            // Lấy các thông số cuộn và kích thước của phần tử
            // scrollLeft: khoảng cách đã cuộn từ bên trái
            // scrollWidth: tổng chiều rộng của phần tử có thể cuộn (bao gồm phần không hiển thị)
            // clientWidth: chiều rộng hiển thị của phần tử (không bao gồm phần không hiển thị)
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

            // Kiểm tra xem đã cuộn hết sang trái chưa
            setCanScrollLeft(scrollLeft > 0);

            // Kiểm tra xem còn cuộn được sang phải không
            // Sử dụng Math.ceil để làm tròn lên, đảm bảo không có lỗi sub-pixel
            const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;
            // nếu isAtEnd là true thì không thể cuộn phải nữa
            setCanScrollRight(!isAtEnd);
        }
    };

    /**
     * @description Xử lý cuộn khi người dùng nhấn nút.
     * @param {string} direction - "left" hoặc "right"
     */
    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 200;
            scrollRef.current.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    /**
     * @description useEffect để thiết lập các sự kiện.
     * - Lắng nghe sự kiện `resize` của cửa sổ.
     * - Lắng nghe sự kiện `scroll` trên chính `div` danh sách.
     * - Hủy bỏ các sự kiện khi component unmount.
     */
    useEffect(() => {
        // Gọi checkScroll ban đầu để thiết lập trạng thái nút
        checkScroll();

        const currentScrollRef = scrollRef.current;

        // Lắng nghe sự kiện cuộn
        if (currentScrollRef) {
            currentScrollRef.addEventListener("scroll", checkScroll);
        }

        // Lắng nghe sự kiện thay đổi kích thước cửa sổ
        window.addEventListener("resize", checkScroll);

        // Hàm cleanup
        return () => {
            if (currentScrollRef) {
                currentScrollRef.removeEventListener("scroll", checkScroll);
            }
            window.removeEventListener("resize", checkScroll);
        };
    }, []); // Mảng dependencies rỗng, chỉ chạy một lần khi component mount

    return (
        <div className="category-slider">
            {/* Nút Menu */}
            <DropdownMenu
                title="Giới thiệu"
                items={[
                    { key: "about", label: "Về chúng tôi" },
                    { key: "products", label: "Sản phẩm" },
                    { key: "contact", label: "Liên hệ" },
                ]}
            />

            {/* Scroll Left */}
            <button
                className={`scroll-btn left ${canScrollLeft ? "active" : "disabled"}`}
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
            >
                <LeftOutlined />
            </button>

            {/* List danh mục */}
            <div
                className="category-list"
                ref={scrollRef}
            // Loại bỏ onScroll trực tiếp trên JSX để xử lý trong useEffect
            >
                {items.map((item) => (
                    <div key={item.key} className="category-item">
                        {item.label}
                    </div>
                ))}
            </div>

            {/* Scroll Right */}
            <button
                className={`scroll-btn right ${canScrollRight ? "active" : "disabled"}`}
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
            >
                <RightOutlined />
            </button>
        </div>
    );
}

export default MenuBar;