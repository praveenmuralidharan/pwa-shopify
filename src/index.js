import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Store
import { configureStore } from '@reduxjs/toolkit';

// Provider
import { Provider } from 'react-redux';

// Reducers
import topBarReducer from './redux/topbar'
import headerMenuReducer from './redux/header'

// Other imports
import './index.css';
import App from './App';

// Layout
import Layout from './layout'
import AdminLayout from './layout/admin.js'

// Other Common Pages
import PageNotFound from './components/404';

const store = configureStore({
  reducer: {
    topbar: topBarReducer,
    header: headerMenuReducer
  }
})

store.subscribe(()=>{
  !store.getState().topbar.value.topBarStatus && localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default function Index() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route element={ <AdminLayout/> }>
            <Route path='/admin/' element={<App />} />
            <Route path="/page-not-found" element={<PageNotFound />}/>
          </Route>
          <Route element={ <Layout/> }>
            <Route path='/' element={<App />} />
            <Route path="/page-not-found" element={<PageNotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
