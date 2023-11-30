/* eslint-disable react/prop-types */
const ProfileInformation = ({agreement}) => {
  return (
    <>
      <div className="w-full flex items-center text-left px-10 text-lg border-t border-base-300">
        <p className="w-2/5 text-lg font-semibold border-r border-base-300 py-5 mr-5">{agreement?.status === 'pending' ? 'Requesting' : 'Rented'} Apartment Info</p>
        <p className="w-1/5">Floor: {agreement?.floor}</p>
        <p className="w-1/5">Block: {agreement?.block}</p>
        <p className="w-1/5">Apartment No: {agreement?.apartment}</p>
      </div>
      <div className="w-full flex items-center text-left px-10 text-lg border border-base-300">
        <p className="w-2/5 text-lg font-semibold border-r border-base-300 py-5 mr-5">Agreement {agreement?.status === 'pending' ? 'request' : 'accept'} date</p>
        <p className="w-3/5 text-left">{agreement?.date}</p>
      </div>
    </>
  );
};

export default ProfileInformation;
