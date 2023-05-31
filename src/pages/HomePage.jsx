import HeaderNav from "../component/HeaderNav";

const HomePage = () => {
  return (
    <>
      <HeaderNav />
      <p>
        Nombre d'expérience(s)
        <input type="number" min="1" max="100" />
      </p>
      <button>lancer</button>
      <a href="/description">
        <p>Resultat</p>
      </a>
    </>
  );
};
export default HomePage;
