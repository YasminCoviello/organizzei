import './styles.css';

function Profile(props) {
  return (
    <button className="profile-wrapper">
      <img className="profile-picture" src={props.pictureUrl} alt="Foto de perfil" />
      <div className="profile-info">
        <h4>{props.name}</h4>
        <p>{props.email}</p>
      </div>
      <img src="/images/arrow-right.svg" alt="Seta para a direita" />
    </button>
  )
}

export default Profile;