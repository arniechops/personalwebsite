import { Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe';
import Book from './pages/Book';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <Home />
      }></Route>
      <Route path="/book" element={
        <Book />
      }></Route>
      <Route path="/projects" element={
        <Projects />
      }></Route>
      <Route path="/about" element={
        <AboutMe />
      }></Route>
    </Routes>
  );
}

export default App;
