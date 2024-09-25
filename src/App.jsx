import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Router from './Router'
import { Toaster } from 'react-hot-toast'
import auth from './api/auth.api'
import toast from 'react-hot-toast'

function App() {

  return (
    <Provider store={store}>
      <Router />
      <Toaster position="top-right" />
    </Provider>
  )
}

export default App
