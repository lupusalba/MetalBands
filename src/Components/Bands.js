import Band from './Band'
import data from '../data'

const elems = data.map(d => {
  {console.log(d)}
  return (
    <Band
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
