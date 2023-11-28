import AboutSection from '../Components/AboutSection';
import Banner from '../Components/Banner/Banner';
import SectionTitle from '../Components/Banner/sectionTitle';
import ContactSection from '../Components/ContactSection/ContactSection';
import CouponsSection from '../Components/Couponsection/CouponsSection';
import Features from '../Components/Features';


const Home = () => {
  return (
    <div className='max-w-1440 mx-auto flex flex-col items-center justify-start'>
      <Banner />
      <SectionTitle title={'Signature Amenities'} subtitle={'Elevate Your Living Experience with Our Exclusive Features'} />
      <Features />
      <AboutSection />
      <CouponsSection />
      <ContactSection/>
    </div>
  );
};

export default Home;
