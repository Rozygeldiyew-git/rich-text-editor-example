import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage';
import Products from './components/Products/Products';
import CompanyComponent from './components/Kompaniya/CompanyComponent';
import Contact from './components/Kompaniya/Contact';
import Admin from './components/Admin/Admin';
import BlogDetails from './components/Blog/BlogDetails';
import UsefulPage from './components/Useful/UsefulPage';
import Export from './components/Kompaniya/Export';
import Auth from './components/Admin/Auth';



function App() {
 


  return (

    <main>
      <Router>
        {
          window.location.pathname === '/admin' ? null : <Header />
        }
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<CompanyComponent />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='useful/:blogID' element={<BlogDetails />} />
          <Route path='/useful' element={<UsefulPage />} />
          <Route path='/export' element={<Export />} />

          <Route path='/admin' element={<Auth />} />
        </Routes>
        {
          window.location.pathname === '/admin' ? null : <Footer />
        }

      </Router>
    </main>

  );
}

export default App;
