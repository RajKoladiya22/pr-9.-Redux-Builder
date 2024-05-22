import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Note } from './assets/note'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Note/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
