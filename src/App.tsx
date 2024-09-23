import React from 'react';
import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import PageNotFound from './pages/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<Main />} />
          {/* <Route path='/yearly' element={<Yearly />} />
          <Route path='/clusters' element={<Clusters />} />
          <Route path='/homie' element={<HomieTest/>}/> */}
        </Routes>
    </div>
  );
}

export default App;
