import data from '.././metal.json'
import react from 'react'

const MetalMeta = () => {
  const bands = data
  return (
    <>
      <p>Metal Bands 🤘</p>
      <p>Bands: {data.length}</p>
    </>
  )
}

export default MetalMeta