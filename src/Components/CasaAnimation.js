import BandData from "./BandData"
import BandHero from "./BandHero"
import CornerBlack from '../Images/cornerBlack.png'
import Corner from './ImageCorners'

const CasaAnimation = ({ item }) => {
  return (
    <div className="wrapper">
      <div className="book">
        <span className="page turn">{<BandData item={item} />}</span>
        <span className="cover"></span>
        <span className="page">{<BandHero />}</span>

        <span className="cover turn">
        {item[1]}
        {<Corner imageSource={CornerBlack} cover="true" />}
        </span>
      </div>
    </div>
  )
}

export default CasaAnimation
