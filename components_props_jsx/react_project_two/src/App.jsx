import UserCard from './components/UserCard';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import './App.css';

function App() {
  return (
    <div className='container'>
      <UserCard name="Abhishek Bharti"  desc="desc1" image={img1} />
      <UserCard name="Satyam Dubey"  desc="desc2" image={img2} />
      <UserCard name="Aditya kumar" desc="desc3"image={img3} />
    </div>
  );
}

export default App;
