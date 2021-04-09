import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopPic from "./Components/TopPic";
import TopBar from "./Components/TopBar";
import Summary from "./Components/Summary";
import Project from "./Components/Project";

function App() {
  return (
      <div className="App">
          <div className="TopPic"><TopPic></TopPic></div>
            <div className="TopBar"><TopBar></TopBar></div>
                <div className="Summ"><Summary></Summary></div>
                <div className="Pro"><Project></Project></div>
                <div className="Award"></div>
                <div className="Stacks"></div>
                <div className="Education"></div>
                <div className="Contact"></div>
          <div className="Footer">Copyright 김진섭, All Rights Reserved.</div>
      </div>
  );
}

export default App;
