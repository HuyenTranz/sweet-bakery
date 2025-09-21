import React from "react";
import "./CardComponent.scss";

const CartComponent = () => {
    return (
        <div className="cart-container">
            {/* Ảnh sản phẩm */}
            <div className="image-wrapper">
                <img
                    src="https://i.pinimg.com/736x/26/a2/0c/26a20c27556cc18ba2dcbc5e5f504e90.jpg"
                    alt="Bánh trung thu"
                    className="product-image"
                />

                {/* Nút thêm giỏ hàng */}
                <button className="add-btn">THÊM VÀO GIỎ HÀNG</button>
            </div>

            {/* Nội dung */}
            <div className="info">
                <h2 className="title">Bánh trung thu</h2>
                <div className="price">299.000 VND</div>
            </div>
        </div>
    );
};

export default CartComponent;
