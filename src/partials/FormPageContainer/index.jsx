import './styles.css';

function FormPageContainer(props) {
  return (
    <div className="wrapper">
      <div className="left">
        <img
          src="/images/background.jpg" 
          alt="Imagem de fundo"
          className="background"
        />
      </div>
      <div className="container">
        <form className="form">
          <img 
            src="/images/logo.png"
          />

          {props.children}
        </form>
      </div>
    </div>
  );
}

export default FormPageContainer;
