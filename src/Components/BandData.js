import Name from './BandName'
import BandStyle from './BandStyle'
import Founded from './BandFounded'
import Origin from './BandOrigin'
import Fans from './BandFans'

const BandData = ({item}) => {
  return (
    <div>
      <p>BandData</p>

      <Name name={item[1]} />
      <BandStyle bStyle={item[6]}  />
      <Founded founded={item[2]}  />
      <Origin origin={item[4]}  />

    </div>
  )
}

export default BandData
