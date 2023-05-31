import HeaderNav from "../component/HeaderNav";

const HomePage = () => {
  return (
    <div
      style={{
        padding: "1em",
        backgroundColor: "#0d0c1c",
        width: "100vw",
        height: "100vh",
      }}
    >
      <HeaderNav />
      <p style={{ color: "white" }}>
        Nombre d'expérience(s)
        <input type="number" min="1" max="100" />
      </p>
      <button>lancer</button>
      <a style={{ textDecoration: "none" }} href="/description">
        <p style={{ color: "white", fontSize: "2em" }}>Resultat</p>
      </a>
    </div>
  );
};
export default HomePage;
