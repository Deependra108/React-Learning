import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Children } from 'react'
import React from 'react'
function MyApp(){
  return (
    <>
    <h2>Hii Heelo</h2>
    <h3>Namaskar</h3>
    </>
  )
}

// let reactElement = {
//     type:'a',
//     props:{
//       href:"https://www.google.com",
//       target:"_blank"
//     },
//     children:"Click to visit google"
// }

let ReactElement = React.createElement(
  'a',
  {href: "https://www.google.com",target:'_blank'},
  "click to visit google"
)
const anotherElement = (
  <a href='https://www.google.com' target='_blank'>Click to visit google.com</a>
)
createRoot(document.getElementById('root')).render(
  ReactElement
)
