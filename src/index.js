import React from 'react'
import REACTDOM from 'react-dom/client'
import App from './App'


const el = document.getElementById('root')
const root = REACTDOM.createRoot(el)


root.render(<App />)