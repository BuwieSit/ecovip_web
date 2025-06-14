import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './pages/HeaderFolder/header';
import Home from './pages/Home/Home';
import Create from './pages/Create/create.js';
import Content from './pages/Content/content';
import About_Page from './webpages/about/About_Page.js';
import Contact_Page from './webpages/contact/Contact_Page.js';
import Package_Page from './webpages/packages/Package_Page.js';
import Book from './webpages/book/Book.js';

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
        <Route path='/' element={<About_Page/>}/>
        <Route path='/Package_Page' element={<Package_Page/>}/>
        <Route path='/' element={<Contact_Page/>}/>
        <Route path="/create" element={<Create/>} />
        <Route path="/Book" element={<Book />} />
      </Routes>

    </Router>
  
  );
}

export default App;