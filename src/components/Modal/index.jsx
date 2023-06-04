import './styles.css';

export function Modal(props) {
  return (
    <div className="modal-overlay" onClick={props.close}>
      <div className="modal" onClick={(ev) => ev.stopPropagation()}>
        <div className="modal-header">
          <h3>{props.title}</h3>
          <button className="close-icon" onClick={props.close}>
            <img src="/images/close-icon.svg" />
          </button>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        <div className="modal-footer">
          <button className="confirm-button" onClick={props.submit}>
            Criar
          </button>
        </div>
      </div>
    </div>
  )
}
