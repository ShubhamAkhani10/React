function Header({ title }) {
  return (
    <div style={styles.header}>
      <h1>{title}</h1>
    </div>
  );
}

const styles = {
  header: {
    textAlign: "center",
    padding: "40px 20px"
  }
};

export default Header;
