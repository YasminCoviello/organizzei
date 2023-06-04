import './styles.css';

function ListButton(props) {
  return (
    <button className={`list-button-wrapper selected-${props.selected}`} onClick={props.onClick}>
      <div className="top-content">
        <img src={props.iconSrc} alt="Ícone da lista" />
        <h4 className="list-button-title">
          {props.title}
        </h4>
      </div>

      <p className="list-button-description">
        {props.description}
      </p>
      <img className="arrow-icon" src="/images/arrow-right.svg" alt="Seta para direita" />
    </button>
  )
}

export default ListButton;
