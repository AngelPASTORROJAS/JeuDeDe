import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import DescriptionPage from "./pages/DescriptionPage";
import StatisticPage from "./pages/StatisticPage";
import HeaderNav from "./component/HeaderNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  padding: "1em",
                  backgroundColor: "#0d0c1c",
                  width: "100vw",
                  height: "100vh",
                }}
              >
                <HeaderNav />
                <HomePage />
              </div>
            }
          />
          <Route
            path="/description"
            element={
              <div
                style={{
                  padding: "1em",
                  backgroundColor: "#0d0c1c",
                  width: "100vw",
                  height: "100vh",
                }}
              >
                <HeaderNav />
                <DescriptionPage />
              </div>
            }
          />
          <Route
            path="/statistic"
            element={
              <div
                style={{
                  padding: "1em",
                  backgroundColor: "#0d0c1c",
                  width: "100vw",
                  height: "100vh",
                }}
              >
                <HeaderNav />
                <StatisticPage />
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
