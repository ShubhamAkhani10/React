import Header from "../components/Header";

function About() {
  return (
    <>
      <Header title="About Us" />
      <div style={styles.container}>
        <p>
          EduPlatform provides high quality technical courses to help students
          build strong careers in modern technology fields.
        </p>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "1.6"
  }
};

export default About;
