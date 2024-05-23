import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Note } from './assets/note'
import View from './assets/view'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Note/>} />
      <Route path="/view" element={<View/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
