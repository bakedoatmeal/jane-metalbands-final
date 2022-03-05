import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading'
import MetalMeta from './components/MetalMeta';
import Band from './components/Band';
import data from './metal.json'
import {useState} from 'react'

function App() {

  const [query, setQuery] = useState('');

  const bands = data.map((band) => {
    return (
      <Band band={band} key={band.band_name}/>
    )
  })

  const bandSearch = data.filter(obj => obj.band_name.includes(query) || obj.style.includes(query)).map((band, i) => {
		return (
      <Band band={band} key={band.band_name}/>
		)
	})

  return (
    <div className="App">
      <Heading/>
      <MetalMeta/>
      <form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
      <div className="Bands"> 
        {bandSearch}
      </div>
    </div>
  );
}

export default App;
