import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout.tsx';
import ContainerPresentaion from './pages/ContainerPresentaion.tsx';
import HigherOrderComponents from './pages/HigherOrderComponents.tsx';
import LogInHoc from './components/HOC/LogInHoc.tsx';
import ProfileHoc from './components/HOC/ProfileHoc.tsx';
import UserSetting from './components/HOC/UserSetting.tsx';
import CompoundHome from './components/compound-component/CompoundHome.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Layout />} >

          <Route index element={<App/>} />

          <Route path='/container-presentaion' element={<ContainerPresentaion />} />

          <Route path='/higher-order-components'  element={<HigherOrderComponents />} >
            <Route path="/higher-order-components/log" index element={<LogInHoc />} />
            <Route path="/higher-order-components/profile" index element={<ProfileHoc />} />
            <Route path="/higher-order-components/user-setting" index element={<UserSetting />} />
          </Route>

          <Route path='/compound-component' element={<CompoundHome/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
