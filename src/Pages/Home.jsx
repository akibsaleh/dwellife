import Banner from '../Components/Banner/Banner';
import Features from '../Components/Features';


const Home = () => {
  return (
    <div className='max-w-1440 mx-auto flex flex-col items-center justify-start'>
      <Banner />
      <Features />
    </div>
  );
};

export default Home;
