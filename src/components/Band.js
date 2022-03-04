import react from 'react'
import Like from './Like'
import './Band.css'

const Band = ({band}) => {
  return (
    <div className='Band'>
      <p className='band-name'>{band.band_name}</p>
      <div className='band-info'>
        <p>Formed: {band.formed} {band.origin} Fans: {band.fans} Split: {band.split}
        </p>
      </div>

      {band.split === "-" ? <Like/> : ''}
    
    </div>
  )
}

export default Band