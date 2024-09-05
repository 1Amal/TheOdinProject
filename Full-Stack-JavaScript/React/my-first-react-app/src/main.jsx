import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import {Quotes} from './Quotes.jsx'
import {TodaysDate} from './Date.jsx'
import {ConvertThisHTML} from './htmlConvert.jsx'
import { HtmlConvert2 } from './HtmlConvert2.jsx'
import Bio from './Bio.jsx'
import TodoList from './Person.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
    <Greeting/>
    <Quotes/>
    <h1>Today's Date:</h1>
    <TodaysDate/>
    <ConvertThisHTML/>
    <HtmlConvert2/>
    <Bio/>
    <TodoList/>
    
  </StrictMode>,
)
