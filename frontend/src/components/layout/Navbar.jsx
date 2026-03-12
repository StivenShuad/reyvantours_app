import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <span style={styles.logoText}>REYVANTOURS</span>
        </div>

        <nav style={styles.desktopNav}>
          <a href="#inicio" style={styles.link}>Inicio</a>
          <a href="#nosotros" style={styles.link}>Sobre nosotros</a>
          <a href="#destinos" style={styles.link}>Destinos</a>
          <a href="#contacto" style={styles.link}>Contáctanos</a>
        </nav>

        <div style={styles.actions}>
          <button style={styles.loginButton}>Iniciar sesión</button>
          <button style={styles.reserveButton}>Reservar ahora</button>
        </div>

        <button
          style={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div style={styles.mobileMenu}>
          <a href="#inicio" style={styles.mobileLink}>Inicio</a>
          <a href="#nosotros" style={styles.mobileLink}>Sobre nosotros</a>
          <a href="#destinos" style={styles.mobileLink}>Destinos</a>
          <a href="#contacto" style={styles.mobileLink}>Contáctanos</a>
          <button style={styles.mobileLoginButton}>Iniciar sesión</button>
          <button style={styles.mobileReserveButton}>Reservar ahora</button>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#2563EB",
    letterSpacing: "1px",
  },
  desktopNav: {
    display: "flex",
    gap: "24px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#1E293B",
    fontWeight: "500",
  },
  actions: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#ffffff",
    color: "#2563EB",
    border: "1px solid #2563EB",
    padding: "10px 16px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },
  reserveButton: {
    backgroundColor: "#2563EB",
    color: "#ffffff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },
  menuButton: {
    display: "none",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#1E293B",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "16px 20px",
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
  },
  mobileLink: {
    textDecoration: "none",
    color: "#1E293B",
    fontWeight: "500",
  },
  mobileLoginButton: {
    backgroundColor: "#ffffff",
    color: "#2563EB",
    border: "1px solid #2563EB",
    padding: "10px 16px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },
  mobileReserveButton: {
    backgroundColor: "#2563EB",
    color: "#ffffff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Navbar;