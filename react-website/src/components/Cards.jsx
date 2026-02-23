import { useState } from "react";

function Cards({ data }) {
  const [selected, setSelected] = useState(null);

  return (
    <section style={styles.wrapper}>
      {selected ? (
        <div style={styles.detailCard}>
          <img src={selected.img} alt={selected.title} style={styles.detailImg} />
          <h2>{selected.title}</h2>
          <p>{selected.fullDescription}</p>

          <button style={styles.backBtn} onClick={() => setSelected(null)}>
            Back
          </button>
        </div>
      ) : (
        data.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.img} alt={item.title} style={styles.image} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <button style={styles.btn} onClick={() => setSelected(item)}>
              View Details
            </button>
          </div>
        ))
      )}
    </section>
  );
}

const styles = {
  wrapper: {
    maxWidth: "1200px",
    margin: "20px auto 60px",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px"
  },

  card: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    textAlign: "center"
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "15px"
  },

  btn: {
    marginTop: "15px",
    padding: "10px 22px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600"
  },

  detailCard: {
    gridColumn: "1 / -1",
    background: "#ffffff",
    padding: "50px",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    textAlign: "center"
  },

  detailImg: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "20px"
  },

  backBtn: {
    marginTop: "25px",
    padding: "12px 30px",
    background: "#111827",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600"
  }
};

export default Cards;
