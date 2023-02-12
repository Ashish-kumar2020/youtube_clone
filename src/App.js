import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body';
import Search from './components/Search';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Offer from "./components/Offer";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import Help from "./components/Help";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => {
  return (
    <Provider store = {store}>
        <Header/>
        <Outlet/>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: "/search",
        element : <Search/>
      },
      {
        path: "/",
        element : <Body/>
      },
      {
        path: "/offer",
        element: <Offer/>
      },
      {
        path: "/help",
        element: <Help/>
      },
      {
        path: "/signin",
        element: <SignIn/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/restaurantDetail/:resId",
        element: <RestaurantMenu/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)