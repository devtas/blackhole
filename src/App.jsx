import { useState } from 'react'
import Blackhole from './Blackhole'
import Star from './Star'
import { randomNumber, randomNumberTo100 } from './utils/numbers'

function App() {
  const [zoom, setZoom] = useState(.4)
  // const [holes, setHoles] = useState(1)
  const stars = 1000;

  return (
    <div className="view">
      <div className="universe" style={{transform: `scale(${zoom})`}} >
        <Blackhole />

        {Array(stars).fill(1).map((v, i) => {
          return <Star key={i} style={{transform: `scale(${randomNumber()}) translateX(${randomNumberTo100()}rem) translateY(${randomNumberTo100()}rem)`}} />
        })}
      </div>

      <div className="navigator">
        <p>M87</p>
        <button onClick={() => setZoom(zoom + (zoom/3))}>+ ZOOM</button>
        <button onClick={() => setZoom(zoom - (zoom/3))}>- ZOOM</button>
      </div>
    </div>
  )
}

export default App
