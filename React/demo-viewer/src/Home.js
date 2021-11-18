import React from 'react';
import {Link} from "react-router-dom";

function Home(){
  return(
    <div>
      <h1>React Demos</h1>
      <ol>
        <li>Introduction to React
          <ol>
            <li><Link to="/say-hello">SayHello</Link></li>
          </ol>
        </li>
        <li>JSX and React Elements
          <ol>
            <li><Link to="/jsx-form">JSXForm</Link></li>
          </ol>
        </li>
        <li>React Components
          <ol>
            <li><Link to="/greeting">Greeting</Link></li>
            <li><Link to="/greeting-2">Greeting2</Link></li>
          </ol>
        </li>
        <li>React State
          <ol>
            <li><Link to="/change-count-1">ChangeCount1</Link></li>
            <li><Link to="/change-count-2">ChangeCount2</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
          </ol>
        </li>
        <li>Component Style
          <ol>
            <li><Link to="/apple">Apple</Link></li>
            <li><Link to="/banana">Banana</Link></li>
          </ol>
        </li>
        <li>useEffect
          <ol>
            <li><Link to="/light-bulb-1">LightBulb1</Link></li>
            <li><Link to="/light-bulb-2">LightBulb2</Link></li>
            <li><Link to="/light-bulb-3">LightBulb3</Link></li>
            <li><Link to="/light-bulb-4">LightBulb4</Link></li>
            <li><Link to="/change-color-1">ChangeColor1</Link></li>
            <li><Link to="/change-color-2">ChangeColor2</Link></li>
          </ol>
        </li>
        <li><Link to="/play">Playground</Link> - for testing stuff</li>
      </ol>
    </div>
  )
}

export default Home;