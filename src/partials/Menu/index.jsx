import Calendar from 'react-calendar';
import Divider from '../../components/Divider';
import Profile from '../../components/Profile';
import './styles.css';
import { DateContext } from '../../contexts/date-context';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth-context';

function Menu(props) {
  const { setDate } = useContext(DateContext);
  const { user, logout } = useContext(AuthContext);

  const [isOpened, setIsOpened] = useState(true);

  const toggleIsOpened = () => setIsOpened(prev => !prev);

  return (
    <div className={`menu-wrapper opened-${isOpened}`}>
      <div className="top-content">
        <div className="logo-and-action">
          <img src="/images/logo.png" alt="Organizzei" />
          <button className={`drawer-action opened-${isOpened}`} onClick={toggleIsOpened}>
            <img src="/images/arrow-left.svg" alt="Arrow" />
          </button>
        </div>
        <Calendar onChange={setDate} className="menu-calendar" />
        <br/>
        <Divider />
        <br />
        {props.children}
      </div>
      <Profile
        onClick={logout}
        name={user.name}
        email={user.email}
        pictureUrl={user.imgSrc}
      />
    </div>
  )
}

export default Menu;
