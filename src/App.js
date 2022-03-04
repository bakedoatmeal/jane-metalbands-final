import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading'
import MetalMeta from './components/MetalMeta';
import Band from './components/Band';
import data from './metal.json'

function App() {

  const bands = data.map((band) => {
    return (
      <Band band={band} key={band.band_name}/>
    )
  })

  return (
    <div className="App">
      <Heading/>
      <MetalMeta/>
      <div className="Bands"> 
        {bands}
      </div>
    </div>
  );
}

export default App;
