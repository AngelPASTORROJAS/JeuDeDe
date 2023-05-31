const HomePage = () => {
  return (
    <>
      <p style={{ color: "white" }}>
        Nombre d'expérience(s)
        <input type="number" min="1" max="100" />
      </p>
      <button>lancer</button>
      <a style={{ textDecoration: "none" }} href="/statistic">
        <p style={{ color: "white", fontSize: "2em" }}>Resultat</p>
      </a>
    </>
  );
};
export default HomePage;
