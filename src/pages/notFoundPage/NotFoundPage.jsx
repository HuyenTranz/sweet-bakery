export default function NotFound() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff9f9", 
                color: "#5c3d2e",
            }}
        >
            <h1 style={{ fontSize: "80px", margin: "0", color: "#d0021b" }}>404</h1>
            <p style={{ fontSize: "22px", marginBottom: "20px", color: "#d0021b" }}>
                Oops! The page you’re looking for is not available 🍞
            </p>
            <img
                src="https://cdn-icons-png.flaticon.com/512/415/415682.png"
                alt="Bread Icon"
                style={{ width: "120px", marginBottom: "20px" }}
            />
            <a
                href="/"
                style={{
                    padding: "15px 30px",
                    background: "#d0021b", 
                    borderRadius: "15px",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    transition: "0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#a00115")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#d0021b")}
            >
                ⬅ Back to Home
            </a>
        </div>
    );
}
