import HeaderNav from "./HeaderNav";

const Layout = ({ children }) => {
  const stylePages = {
    padding: "1em",
    backgroundColor: "#0d0c1c",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div style={stylePages}>
      <HeaderNav />
      {children}
    </div>
  );
};
export default Layout;
