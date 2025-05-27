import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './pages/HeaderFolder/header';
import Home from './pages/Home/Home';
import Create from './pages/Create/create.js';
import Content from './pages/Content/content';

function App() {

  return (
    <Router>
      <Head />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Content />
          </>
        }/>
        <Route path="/create" element={<Create/>} />
      </Routes>
    </Router>
  );
}

export default App;