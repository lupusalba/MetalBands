import BandHero from './BandHero'
import BandData from './BandData'

const Band = ({item}) => {
  return (
    <div className="Band">
      <BandHero />
      <BandData item={item} />
    </div>
  )
}

export default Band
