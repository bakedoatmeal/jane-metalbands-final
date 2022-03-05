import react from 'react'
import Like from './Like'
import './Band.css'

const Band = ({band}) => {

  const getFans = (fanNumber) => {
    return (fanNumber * 1000).toLocaleString('en')
  }

  const allStyles = band.style.split(',')
  const styles = allStyles.map((style) => {
    return (
      <li>{style}</li>
    )
  })

  return (
    <div className='Band'>
      <p className='band-name'>{band.band_name}</p>
      <div className='band-info'>
        <p>Formed: {band.formed} {band.origin} Fans: {getFans(band.fans)} Split: {band.split}
        </p>
      </div>

      <ul>
        {styles}
      </ul>
      {band.split === "-" ? <Like/> : ''}
    
    </div>
  )
}

export default Band