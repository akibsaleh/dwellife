import PageTitle from '../Components/PageTitle';
import ApartmentCard from '../Components/ApartmentCard';
import useGetQuery from '../CustomHooks/useGetQuery';
import { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const Apartments = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useGetQuery('/apartments', 'apartments', { page: page });
  const lastPage = Math.floor(data?.total / 6);
  const apartments = data?.apartments;

  if (error)
    return (
      <div className="w-full flex justify-center items-center grow h-full">
        <p className="text-xl">Failed to load apartments</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="w-full flex justify-center items-center grow h-full">
        <progress className="progress w-56"></progress>
      </div>
    );

  return (
    <div className="w-full flex flex-col justify-start items-center h-full min-h-screen pb-14 gap-y-10 px-5 lg:px-0">
      <PageTitle
        title={'Apartments'}
        subtitle={'Check out the details of all the available apartments below'}
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start">
        {apartments.map((apartment) => (
          <ApartmentCard
            key={apartment._id}
            apartment={apartment}
          ></ApartmentCard>
        ))}
      </div>
      <div className="w-full flex justify-center items-center py-3">
        <div className="join">
          <button
            className="join-item btn"
            onClick={() => page > 1 && setPage(page - 1)}
          >
            <HiOutlineChevronLeft />
          </button>
          {[...Array(lastPage).keys()].map((item, idx) => (
            <button
              className={`join-item btn ${page === item + 1 ? 'btn-active' : ''}`}
              key={idx}
              onClick={() => setPage(item + 1)}
            >
              {item + 1}
            </button>
          ))}
          <button className="join-item btn" onClick={() => lastPage > page && setPage(page + 1)}>
            <HiOutlineChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
