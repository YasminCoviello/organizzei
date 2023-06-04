import './styles.css';

function AddButton(props) {
  const { align = 'left' } = props;

  return (
    <button className={`add-button-wrapper ${align}`} {...props}>
      {props.children}  
    </button>
  )
}

export default AddButton;
