import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound";
import HomePage from './pages/HomePage';
import DescriptionPage from './pages/DescriptionPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/description' element={<DescriptionPage />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
