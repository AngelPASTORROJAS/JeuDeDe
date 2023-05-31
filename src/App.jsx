import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import DescriptionPage from "./pages/DescriptionPage";
import StatisticPage from "./pages/StatisticPage";
import Layout from "./component/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: "/description",
      element: (
        <Layout>
          <DescriptionPage />
        </Layout>
      ),
    },
    {
      path: "/statistic",
      element: (
        <Layout>
          <StatisticPage />
        </Layout>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
