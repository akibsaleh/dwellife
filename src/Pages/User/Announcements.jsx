import { useQuery } from '@tanstack/react-query';
import PageTitle from '../../Components/PageTitle';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import { SlCalender } from "react-icons/sl";

const Announcements = () => {
  const axiosSecure = useAxiosSecure();
  const {
    isloading,
    error,
    data: announcements = [],
  } = useQuery({
    queryKey: ['announcements'],
    queryFn: async () => {
      const response = await axiosSecure.get('/api/announcements');
      return response.data;
    },
  });

  if (isloading)
    return (
      <div className="max-w-1440 w-full flex flex-col items-center">
        <PageTitle
          title={'Announcements'}
          subtitle={''}
        />
        <div className="w-full flex flex-col justify-center items-center">
          <progress className="progress w-56"></progress>
        </div>
      </div>
    );

    if (error)
    return (
      <div className="max-w-1440 w-full flex flex-col items-center">
        <PageTitle
          title={'Announcements'}
          subtitle={''}
        />
        <div className="w-full flex flex-col justify-center items-center">
          <p className='text-2xl font-bold'>Failed to load data from database</p>
        </div>
      </div>
    );
  return (
    <div className="max-w-1440 w-full flex flex-col items-center">
      <PageTitle
        title={'Announcements'}
        subtitle={''}
      />
      <div className="w-full flex flex-col items-center gap-y-10">
        {announcements.map((announcement) => 
            <div key={announcement?._id} className='prose lg:prose-lg bg-base-300 shadow-lg p-10 w-full max-w-3xl'>
                <h3>{announcement?.title}</h3>
                <p>{announcement?.desc}</p>
                <p className='flex items-center'><SlCalender className='mr-3 text-xl' />{announcement?.date}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Announcements;
