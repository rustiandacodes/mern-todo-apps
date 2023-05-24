import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/molucules/Navbar';
import Update from './pages/Update';

const App = () => {
  return (
    <div className="h-screen text-slate-900">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Update />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
