import Calendar from 'react-calendar';
import Divider from '../../components/Divider';
import Profile from '../../components/Profile';
import './styles.css';
import { DateContext } from '../../contexts/date-context';
import { useContext } from 'react';

function Menu(props) {
  const { setDate } = useContext(DateContext);

  return (
    <div className="menu-wrapper">
      <div className="top-content">
        <img src="/images/logo.png" alt="Organizzei" />
        <Calendar onChange={setDate} className="menu-calendar" />
        <br/>
        <Divider />
        <br />
        {props.children}
      </div>
      <Profile
        name="Marciane Vulcão"
        email="amarciane@gmail.com"
        pictureUrl="https://media.licdn.com/dms/image/D4D03AQEpfLPNouEGIA/profile-displayphoto-shrink_200_200/0/1673219139609?e=1686787200&v=beta&t=dCpTq6KP89ajN5OXSgUArjI4Vc6R7r3ievIgC2sQnug"
      />
    </div>
  )
}

export default Menu;
