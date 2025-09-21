import { Col, Row, Input, Badge, Button } from 'antd';
import { ShoppingCartOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import logo from '../../assets/Logo.jpg';
import "./HeaderComponentStyle.scss";

const { Search } = Input;

const HeaderComponent = () => {
    const onSearch = (value) => console.log(value);

    return (
        <div className="header-container">
            <Row align="middle" >
                {/* Logo */}
                <Col span={6}>
                    <a href="/">
                        <img src={logo} alt="Logo" className="header-logo" />
                    </a>
                </Col>

                {/* Search */}
                <Col span={12} className="header-search">
                    <Search
                        placeholder="Bạn muốn tìm bánh gì..."
                        allowClear
                        enterButton={<SearchOutlined />}
                        size="large"
                        onSearch={onSearch}
                        className="custom-search"
                    />
                </Col>

                {/* Icons + Button */}
                <Col span={6} className="header-actions">
                    <div className="contact">Liên hệ</div>
                    {/* Cart */}
                    <Badge count={0} size="small">
                        <ShoppingCartOutlined className="header-icon" />
                    </Badge>

                    {/* User */}
                    <UserOutlined className="header-icon" />

                    {/* Order button */}
                    <Button type="primary" className="order-btn">
                        🍰 Đặt bánh
                    </Button>
                </Col>
            </Row>
            {/* <MenuBar /> */}
        </div>
    );
};

export default HeaderComponent;
