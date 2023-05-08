import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './Context/auth';
import { SearchProvider } from "./Context/Search";
import { CartProvider } from "./Context/Cart";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
   
  </AuthProvider>
  
  
);

