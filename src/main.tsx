import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout.tsx';
import ContainerPresentaion from './pages/ContainerPresentaion.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Layout />} >
          <Route index element={<App/>} />
          <Route path='/container-presentaion' element={<ContainerPresentaion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
