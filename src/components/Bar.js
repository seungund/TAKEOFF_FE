import logo from '../assets/user.png';
import './Bar.css';

function Bar(){
  const username = "LEE"
  return (
    <div className="barBackGround">
      <button className="barButton">flight</button>
      <button className="barButton">add flight</button>
      <div className="userName">Hello {username}</div>
      <div className="userLogoButton">
        <img src={logo} alt="User icon" />
      </div>
    </div>
  );
}

export default Bar;
