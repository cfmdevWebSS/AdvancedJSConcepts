import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import PlayGround from './Demos/PlayGround';
import SayHello from './Demos/SayHello';
import JSXForm from './Demos/JSXForm';
import Greeting from './Demos/Greeting';
import Greeting2 from './Demos/Greeting2';
import ChangeCount1 from './Demos/ChangeCount1';
import ChangeCount2 from './Demos/ChangeCount2';
import Quiz from './Demos/quiz/Quiz';
import Apple from './Demos/styling/Apple';
import Banana from './Demos/styling/Banana';
import LightBulb1 from './Demos/effect-hook/LightBulb1';
import LightBulb2 from './Demos/effect-hook/LightBulb2';
import LightBulb3 from './Demos/effect-hook/LightBulb3';
import LightBulb4 from './Demos/effect-hook/LightBulb4';
import ChangeColor1 from './Demos/effect-hook/ChangeColor1';
import ChangeColor2 from './Demos/effect-hook/ChangeColor2';
import Home from './Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/play"><PlayGround /></Route>
          <Route path="/say-hello"><SayHello /></Route>
          <Route path="/jsx-form"><JSXForm /></Route>
          <Route path="/greeting"><Greeting /></Route>
          <Route path="/greeting-2"><Greeting2 /></Route>
          <Route path="/change-count-1"><ChangeCount1 /></Route>
          <Route path="/change-count-2"><ChangeCount2 /></Route>
          <Route path="/quiz"><Quiz /></Route>
          <Route path="/apple"><Apple /></Route>
          <Route path="/banana"><Banana /></Route>
          <Route path="/light-bulb-1"><LightBulb1 /></Route>
          <Route path="/light-bulb-2"><LightBulb2 /></Route>
          <Route path="/light-bulb-3"><LightBulb3 /></Route>
          <Route path="/light-bulb-4"><LightBulb4 /></Route>
          <Route path="/change-color-1"><ChangeColor1 /></Route>
          <Route path="/change-color-2"><ChangeColor2 /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
