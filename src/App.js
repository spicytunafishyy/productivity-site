import logo from './logo.svg';
import './App.css';
// import './pages/Footer.css';
import Footer from './pages/Footer';
import NavBar from './pages/NavBar';
import Graph from './Graph';
import Fab from './pages/Fab';

function App() {

  

  return (
    <div>
      <NavBar/>
      <h1 className="graphTitle">Your Availability Throughout This Week</h1>
      <div className="graphCont">
      <Graph className="graph"></Graph>
      </div>
      <Fab></Fab>
      <Footer className = "foot"/>
    </div>
  );
}

export default App;
