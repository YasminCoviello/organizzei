import './styles.css';

function Profile(props) {
  const imgSrc = props.pictureUrl
    ? props.pictureUrl
    : '/images/user.svg'

  return (
    <button className="profile-wrapper" onClick={props.onClick}>
      <img className="profile-picture" src={imgSrc} alt="Foto de perfil" />  
      <div className="profile-info">
        <h4>{props.name}</h4>
        <p>{props.email}</p>
      </div>
      <img src="/images/arrow-right.svg" alt="Seta para a direita" />
    </button>
  )
}

export default Profile;