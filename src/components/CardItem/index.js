// Write your code here.
import './index.css'

const ColorCards = props => {
  const {property} = props
  const {title, description, className, imgUrl} = property
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="imagebox">
        <img src={imgUrl} />
      </div>
    </div>
  )
}

export default ColorCards
