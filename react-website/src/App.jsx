import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <nav style={styles.nav}>
        <h2 style={styles.logo}>RED AND WHITE</h2>

        <div style={styles.navLinks}>
          <button style={styles.linkBtn} onClick={() => setPage("home")}>
            Home
          </button>

          <button style={styles.linkBtn} onClick={() => setPage("about")}>
            About Us
          </button>

          <button style={styles.loginBtn}>
            Login
          </button>
        </div>
      </nav>

      {page === "home" ? <Home /> : <About />}
    </>
  );
}

const styles = {
  nav: {
    background: "#111827",
    color: "white",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    margin: 0
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    margin: "0 5px"
  },
  linkBtn: {
    background: "transparent",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    margin: "0px 5px"
  },
  loginBtn: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default App;
