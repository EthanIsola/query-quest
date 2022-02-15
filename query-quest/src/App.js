import React, { useState } from 'react'
import NavBar from "./NavBar";
import Wheel from './Wheel'
import { Route, Switch } from "react-router-dom";
import './index.css'
import QuestionForm from './QuestionForm';
import Home from './Home';
import CategoryCard from "./CategoryCard";
import categories from "./category_data";

function App() {
 
  const [randomCategory, setRandomCategory]=useState(true)

  const categoriesToShow = categories
  .filter(category=>randomCategory ? randomCategory.id : true)
    

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
          <Home categories={categories, randomCategory, setRandomCategory}/>
        </Route>
      </Switch>
  </div>
)
}

export default App