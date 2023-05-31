const HomePage = () => {
  return (
    <>
    <p style={{ color: "white" }}>
        Nombre de dé(s)
        <input type="number" value="5" min="1" />
      </p>
      <p style={{ color: "white" }}>
        Nombre d'expérience(s)
        <input type="number" min="1" value="1" />
      </p>
      <button>lancer</button>
      <a style={{ textDecoration: "none" }} href="/statistic">
        <p style={{ color: "white", fontSize: "2em" }}>Resultat</p>
      </a>
    </>
  );
};
export default HomePage;
