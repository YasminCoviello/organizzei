import './styles.css'

function Card(props) {
  return (
    <div className="card-container">
      <h4 className="title">
        {props.title}
      </h4>
      <p className="description">
        {props.description}
      </p>
      <div className="actions">
        {
          props.variant === "to-do"
            ? (
              <div 
                className='blank-btn'
              />
            ) : (
              <button className="button contained" onClick={() => props.returnCard(props.id)}>
                <img src="/images/arrow-left.svg" alt="Seta para esquerda" />
              </button>
            )
        }
        <button className="button contained" onClick={() => props.deleteCard(props.id)}>
          <img src="/images/trash.svg" alt="Lixeira" />
        </button>

        {
          props.variant === "done"
            ? (
              <div 
                className='blank-btn'
              />
            ) : (
              <button className="button contained" onClick={() => props.advanceCard(props.id)}>
                <img src="/images/arrow-right.svg" alt="Seta para direita" />
              </button>
            )
        }
      </div>
    </div>
  )
}

export default Card;
