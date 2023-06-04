import AddButton from '../AddButton';
import './styles.css';

function CardColumn(props) {  
  return (
    <div className={`card-column ${props.variant}`}>
      <div className="card-column-header">
        <h3>
          {props.title}
        </h3>

        {
          props.variant === 'to-do'
            ? (
              <AddButton align='right' onClick={props.openModal}>
                + criar
              </AddButton>
            ) : null
        }
      </div>
      <div className="cards">
        {props.children}
      </div>
    </div>
  )
}

export default CardColumn; 