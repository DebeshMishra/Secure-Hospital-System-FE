
import { useSelector } from 'react-redux';
import './Dashboard.css'


const Dashboard = () => {

  const userInfo = useSelector((state) => state.user);

  return (
    <>
      <div className="jumbotron">
        <h1>Welcome</h1>
        <h3>{userInfo.userData.user.firstName}</h3>
      </div>
      <div className='info'>
        <h3>This is the CSE 545 - Software Security Project</h3>
        <p>Developed By Group - 3</p>
        <p>This application is not a mobile friendly application. So please view in desktop for better UI interaction.</p>
      </div>
    </>
  )
};

export default Dashboard;