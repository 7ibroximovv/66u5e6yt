import  './card.css'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.odam.img} alt="kard" />
        <button className='btn'>Add To Cart</button>
        <h3>{props.odam.name}</h3>
        <h4>{props.odam.price} $</h4>
        <h4>Rating {props.odam.reting}</h4>
    </div>
  )
}

export default Card