import logo from '../assets/images/home.png'
import Header from '../Components/Header';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-black bg-opacity-60">
      <img
        src={logo}
        alt="Example"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0  mix-blend-multiply"></div>
      <div className="relative z-10">
        <Header></Header>
      </div>
    </div>
    );
};

export default Home;