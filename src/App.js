import { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { ScaleLoader } from 'react-spinners';
import Preloader from './components/Preloader';
import { Container } from '@mui/system';

function App() {
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='App'>
      <Container maxWidth="xl">
        {loading ? (
          // <ScaleLoader loading={loading} color={"#9D4EDD"} size={50} />
          <Preloader />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Profile />} />
              <Route render={() => <Navigate to='/' />} />
            </Routes>
          </BrowserRouter>
        )}
      </Container>
    </div>
  );
}

export default App;
