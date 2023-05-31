import HeaderNav from "../component/HeaderNav";

const StatisticPage = () => {
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
        <h2 style={{color:"white"}}>Statistic</h2>
        <p style={{color:"white"}}>
        Nombre de brelan(s) :        </p>
        <a style={{ textDecoration: "none" }} href="/">
          <p style={{ color: "white", fontSize: "2em" }}>Home</p>
        </a>
      </div>
    </>
  );
};
export default StatisticPage;
