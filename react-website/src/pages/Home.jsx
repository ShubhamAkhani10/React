import Header from "../components/Header";
import Cards from "../components/Cards";

function Home() {
  const courseData = [
    {
      id: 1,
      img: "https://www.rwskill.edu.in/wp-content/uploads/2025/08/AIML.png",
      title: "AI/ML & Data Science",
      description: "Learn AI, ML & Data Analysis",
      fullDescription:
        "Learn to use AI and Machine Learning to turn data into insights. Work with Python, visualization, and predictive models to prepare for careers in analytics and automation."
    },
    {
      id: 2,
      img: "https://www.rwskill.edu.in/wp-content/uploads/2025/08/uiux.png",
      title: "UI/UX & Graphic Design",
      description: "Creative Design & Branding",
      fullDescription:
        "Learn to design creative graphics and user-friendly digital experiences. This course covers design tools, visual communication, and UI/UX principles."
    },
    {
      id: 3,
      img: "https://www.rwskill.edu.in/wp-content/uploads/2025/08/video-editing.png",
      title: "Video Editing & Animation",
      description: "Animation & Visual Effects",
      fullDescription:
        "Gain skills in animation and visual effects for films, games, and media using professional industry tools."
    }
  ];

  return (
    <>
      {/* 🔥 Hero Section */}
      <div style={styles.hero}>
        <img
          src="https://www.rwskill.edu.in/wp-content/uploads/2025/08/image.png"
          alt="banner"
          style={styles.heroImg}
        />

        <div style={styles.overlay}>
          <h1 style={styles.heroTitle}>Welcome To EduPlatform</h1>
          <p style={styles.heroText}>
            Learn Industry Skills & Build Your Career
          </p>
        </div>
      </div>

      <Header title="Our Courses" />
      <Cards data={courseData} />
    </>
  );
}

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "520px",
    overflow: "hidden"
  },

  heroImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    margin: "0 auto"
  },

  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    background: "rgba(0, 0, 0, 0.5)",
    padding: "40px 60px",
    borderRadius: "15px"
  },

  heroTitle: {
    fontSize: "42px",
    marginBottom: "15px",
    fontWeight: "bold"
  },

  heroText: {
    fontSize: "20px",
    letterSpacing: "1px"
  }
};

export default Home;
