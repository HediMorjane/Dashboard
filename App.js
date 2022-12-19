
import './App.css';
import './main';
import {Line,Bar,Doughnut,Pie} from "react-chartjs-2"

const data = {
  labels: ["Rouge", "Bleu", "Vert", "Violet", "Orange", "Jaune"],
  datasets: [
    {
      label:"Couleurs Préférées en France",
      data:["23","21","32","12","15","9"],
      backgroundColor: ["red","blue","green","violet","orange","yellow"],
    },
  ],
}

const options ={
  maintainAspectRatio: false,
}

function App() {
  return (
    <div className="App">
      <div className="container">
        
        
        <div className='card'>
          <p options={options}>Proute</p>
        </div>
        <div className='card'>
          <p options={options}>Proute</p>
        </div>

        <div className='card'>
          <p options={options}>Proute</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
