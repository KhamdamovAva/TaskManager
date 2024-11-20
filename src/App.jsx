import React from 'react'
import AppRouter from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import "./assets/style.css"

function App() {
  return (
    <>
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <AppRouter />
    </BrowserRouter>
    </>
  )
}

export default App