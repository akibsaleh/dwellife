import { useContext } from 'react';
import AboutSection from '../Components/AboutSection';
import Banner from '../Components/Banner/Banner';
import SectionTitle from '../Components/Banner/sectionTitle';
import ContactSection from '../Components/ContactSection/ContactSection';
import CouponsSection from '../Components/Couponsection/CouponsSection';
import Features from '../Components/Features';
import { AuthContext } from '../Providers/Provider';


const Home = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className='max-w-1440 mx-auto flex flex-col items-center justify-start'>
      <Banner />
      <SectionTitle title={'Signature Amenities'} subtitle={'Elevate Your Living Experience with Our Exclusive Features'} />
      <Features />
      <AboutSection />
      {(user?.email) ? <CouponsSection /> : ''}
      <ContactSection/>
    </div>
  );
};

export default Home;
