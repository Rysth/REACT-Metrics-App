import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchClasses } from './redux/Classes/ClassesSlice';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
