import React, { useState } from 'react'
import NavBar from "./NavBar";
import Wheel from './Wheel'
import { Route, Switch } from "react-router-dom";
import './index.css'
import QuestionForm from './QuestionForm';
import Home from './Home';
import {categories} from "./category_data";

function App() {
 
  const [randomCategory, setRandomCategory]=useState(true)

  function handleRandom(Obj){
    setRandomCategory(categories.filter((category)=>category===Obj))

    console.log(randomCategory)
    }

    const categoriesToShow= categories.filter((category)=>
    (category === randomCategory) ? category.name : true)

return(


  <div>
    <NavBar />
    <Switch>
        <Route path="/playGame">
          <Wheel />
          </Route>
        <Route path="/newQuestion">
          <QuestionForm />
        </Route>
        <Route path="/">
          <Home handleRandom={handleRandom} randomCategory={randomCategory} categories={categoriesToShow} />
        </Route>
      </Switch>
  </div>
)
}

export default App