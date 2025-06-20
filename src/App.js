import './App.css';
import Bar from './components/Bar.js'
import Display from './components/Display';
import Underbar from './components/Underbar.js';
import MyGlobe from './components/MyGlobe.js';

function App() {
  return(
    <div className="App">
      <Bar/>
      <MyGlobe/>
      <Display/>
      <Underbar/>
    </div>

  );
}

export default App;
