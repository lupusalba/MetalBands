import Band from './Band'
import data from '../data'
import CasaAnimation from './CasaAnimation'

const elems = data.map(d => {
  {console.log(d)}
  return (
    <CasaAnimation
      key={d[0]}
      item={d}
    />
    
  )
})

const Bands = () => {
  return (
    <div className="container">
      {elems}
    </div>
  )
}

export default Bands
