import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider,Navigate} from 'react-router-dom';
import Store from './screen/store';
import Foodcourt from './screen/foodcourt';
import Saloon from './screen/saloon';
import Cart from './screen/cart';
import Home from './screen/home';
import Entry from './authentication/Entry';

const approuter=createBrowserRouter([
  {
    path:'/',
    element:<Navigate to="/Entry" replace/>
  },
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/Entry',
        element:<Entry/>,
      },
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/foodcourt',
        element:<Foodcourt/>
      },
      {
        path:'/store',
        element:<Store/>
      },
      {
        path:'/saloon',
        element:<Saloon/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
    ]
  },


 
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={approuter}>
    
    </RouterProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
