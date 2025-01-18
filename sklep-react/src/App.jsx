import { useState } from "react"

import './App.css'
import Images from "./components/Images"
import Button from "./components/Button"
import Description from './components/Description';
import descriptions from "./data/descriptions.js";




function App() {
  const [description, setDescription] = useState("");
  const [showImage, setShowImage] = useState(false);



    const changeDescription = (descriptionKey) => {
        setDescription(descriptionKey);
        setShowImage(false);
  
    };
    
    const toggleImage = () => {
      setShowImage((prev) => !prev);
    };

  return (
    <>
      <Images />
      <h1>Vite + React</h1>
      <div className="buttons">
        <Button 
        onClick={() => changeDescription("first")}
        isActive={description === "first"} 
        >First</Button>
          
        <Button 
        onClick={() => changeDescription("second")}
        isActive={description === "second"} 
        >Second</Button>
        
        <Button 
        onClick={() => changeDescription("third")}
        isActive={description === "third"} 
        >Third</Button>
        
        <Button 
        onClick={() => changeDescription("four")}
        isActive={description === "four"} 
        >Four</Button>
        
      </div>
      <div className="card">
  <h3>Descriptions</h3>
  {description ? (
    <>
      <Description showImage={showImage}>
        {descriptions[description]}
      </Description>
      <button onClick={() => setShowImage((prev) => !prev)}>
        {showImage ? "Ukryj Obraz" : "Pokaż Obraz"}
      </button>
    </>
  ) : (
    <p>Please select description</p>
  )}
</div>

    </>
  );
};

export default App
