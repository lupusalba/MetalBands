const img = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.iheart.com%2Fv3%2Fcatalog%2Falbum%2F64593428%3Fops%3Dfit(480%252C480)&f=1&nofb=1";

const BandHero = () => {
  return (
    <div className="BandHero gridItem">
      <img src={img} alt="img"  className="brandHeroImg"/>
    </div>
  )
}

export default BandHero
