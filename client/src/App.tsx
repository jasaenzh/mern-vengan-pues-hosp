import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path='*' element={<>Not Found</>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
