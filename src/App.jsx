import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound";
import HomePage from './pages/HomePage';
import DescriptionPage from './pages/DescriptionPage';
import StatisticPage from './pages/StatisticPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/description' element={<DescriptionPage />} />
      <Route path='/statistic' element={<StatisticPage />}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
