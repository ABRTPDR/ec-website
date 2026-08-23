import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Notices from './pages/Notices';
import Candidates from './pages/Candidates';
import Archives from './pages/Archives';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* The Layout component wraps all nested routes */}
        <Route path="/" element={<Layout />}>
          
          {/* 'index' means this loads automatically at the "/" path */}
          <Route index element={<Home />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;