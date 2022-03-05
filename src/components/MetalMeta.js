import data from '.././metal.json'
import react from 'react'

const MetalMeta = () => {
  const bands = data

  let totalFans = 0
  for (let i=0; i < bands.length; i = i + 1) {
    totalFans += bands[i].fans
  }

  const formattedFans = (totalFans * 1000).toLocaleString('en');

  return (
    <>
      <p>Metal Bands 🤘</p>
      <p>Bands: {data.length}</p>
      <p>Total fans!! {formattedFans}</p>
    </>
  )
}

export default MetalMeta