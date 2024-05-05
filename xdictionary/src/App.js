import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  var dict = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];
  const [search, setSearch] = useState("");
  const [meaning, setmeaning] = useState("");

  function PerformSearch(){
    // console.log(dict.filter(e => e.word.toLowerCase() === search.toLowerCase()).length)
    if(dict.filter(e => e.word.toLowerCase() === search.toLowerCase()).length > 0){
      console.log("yess")
      var search1 = dict.filter(e => e.word.toLowerCase() === search.toLowerCase());
      setmeaning(search1[0].meaning)
    }
    else{
      setmeaning("Word not found in the dictionary.")
    }
  }
  return <div className="App">
    <h1>Dictionary App</h1>
    <input type="text" onChange={(e)=>setSearch(e.target.value)}/><button onClick={PerformSearch}>Search</button>
    <p>Definition:</p>
    <p>{meaning}</p>
  </div>;
}

export default App;
