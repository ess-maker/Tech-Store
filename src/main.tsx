import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routring/route.tsx';
import {RouterProvider,} from "react-router-dom";
import "./sass/base/_reset.scss"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
