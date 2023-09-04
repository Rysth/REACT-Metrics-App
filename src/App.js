import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchClasses } from './redux/Classes/ClassesSlice';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('classArray'));
    if (!item) dispatch(fetchClasses());
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
