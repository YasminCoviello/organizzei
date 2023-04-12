import './styles.css';

function CardColumn(props) {
  return (
    <div className={`card-column ${props.variant}`}>
      <h3>
        {props.title}
      </h3>
      <div className="cards">
        {props.children}
      </div>
    </div>
  )
}

export default CardColumn; 