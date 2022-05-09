import Name from './BandName'
import BandStyle from './BandStyle'
import Founded from './BandFounded'
import Origin from './BandOrigin'
import Corner from './ImageCorners'
import CornerYellow from '../Images/corner.png'

const BandData = ({item}) => {
  return (
    <div className="BandData gridItem"  style={{transform: "rotateY(180deg)"}}>

      <Name name={item[1]} />
      <BandStyle bStyle={item[6]}  />
      <Founded founded={item[3]}  />
      <Origin origin={item[4]}  />

      <Corner imageSource={CornerYellow} />

    </div>
  )
}

export default BandData
