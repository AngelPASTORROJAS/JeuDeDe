import HeaderNav from "../component/HeaderNav";

const DescriptionPage = () => {
  return (
    <>
      <div
        style={{
          padding: "1em",
          backgroundColor: "#0d0c1c",
          width: "100vw",
          height: "100vh",
        }}
      >
        <HeaderNav />
        <h2 style={{color:"white"}}>Description</h2>
        <p style={{color:"white"}}>
          Le jeu compte le nombre de brelan(s) obtenu(s) en laçant 3 de dés
          non-pipés un nombre de fois à fixer par l'utilisateur.
        </p>
        <a style={{ textDecoration: "none" }} href="/">
          <p style={{ color: "white", fontSize: "2em" }}>Home</p>
        </a>
      </div>
    </>
  );
};
export default DescriptionPage;
