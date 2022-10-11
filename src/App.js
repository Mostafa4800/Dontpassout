import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./pages/start-page/start-page.component";
import CharecterSelectPage from "./pages/charecter-select-page/charecter-select-page.component";
import UserCodePage from "./pages/code-enterperet-page/code-enterperet-page.component";
import "./App.css";

/* Image Imports */
import Tau_front from "./images/Tau_card_front.png"
import Tau_back from "./images/Tau_card.png"
import Haru_front from "./images/Haru_card_front.png"
import Haru_back from "./images/Haru_card.png"
import Zoya_front from "./images/Zoya_card_front.png"
import Zoya_back from "./images/Zoya_card.png"
import Veda_front from "./images/Veda_card_front.png"
import Veda_back from "./images/Veda_card.png"
import Gran_front from "./images/Gran_card_front.png"
import Gran_back from "./images/Gran_card.png"

function App() {
  const [charecterSelected, setCharecterSelected] = useState([
    {id:"1", selected:false, image_front:Tau_front, image_back:Tau_back, alt_text:"Boy listening to music"},
    {id:"2", selected:false, image_front:Haru_front, image_back:Haru_back, alt_text:"Boy playing videogames"},
    {id:"3", selected:false, image_front:Zoya_front, image_back:Zoya_back, alt_text:"Girl taking Selfie"},
    {id:"4", selected:false, image_front:Veda_front, image_back:Veda_back, alt_text:"Woman looking at phone"},
    {id:"5", selected:false, image_front:Gran_front, image_back:Gran_back, alt_text:"Granma walking with phone"},
  ])

  const selectedCount = charecterSelected.filter((charecter) => charecter.selected).length;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route exact path="/CharecterSelect" element={<CharecterSelectPage charecterSelected={charecterSelected} setCharecterSelected={setCharecterSelected} />} />
          {selectedCount >= 3 ? <Route exact path="/UserCodePage" element={<UserCodePage charecterSelected={charecterSelected} setCharecterSelected={setCharecterSelected} />} /> : ""}
        </Routes>
      </Router>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap" rel="stylesheet"/>
    </div>
  );
}

export default App;
