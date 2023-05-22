import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className="h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
