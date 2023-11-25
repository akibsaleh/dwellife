import featureOne from '../assets/featureOne.webp'
import featureTwo from '../assets/featureTwo.webp'
import featureThree from '../assets/featureThree.webp'
const Features = () => {
  return (
    <div className="grid grid-cols-3 max-w-1440 w-full h-auto my-20">
      <div className="w-full flex flex-col justify-end">
        <img src={featureOne} className='w-64 place-self-center z-10' />
        <div className="bg-neutral h-[240px] w-full flex text-center items-end z-0 -mt-40 rounded-s-3xl">
          <p className='w-full font-bold text-4xl !mb-11 text-neutral-content'>Elegant Comfort</p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-end">
      <img src={featureTwo} className='w-64 place-self-center z-10' />
        <div className="bg-neutral h-[240px] w-full flex items-end z-0 -mt-40 text-center">
          <p className='w-full font-bold text-4xl !mb-11 text-neutral-content'>Intelligent Design</p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-end">
      <img src={featureThree} className='w-64 place-self-center z-10' />
        <div className="bg-neutral h-[240px] w-full flex items-end z-0 -mt-40 text-center rounded-e-3xl">
          <p className='w-full font-bold text-4xl !mb-11 text-neutral-content'>Peaceful Retreat</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
