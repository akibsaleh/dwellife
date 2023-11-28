import { useForm } from 'react-hook-form';
import PageTitle from '../../Components/PageTitle';
import useAdmin from '../../CustomHooks/useAdmin';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import { toast } from 'react-toastify';

const MakeAnnouncement = () => {
   const date = new Date();
   let year = date.getFullYear();
   let month = date.getMonth() + 1;
   let day = date.getDate();
   let currentDate = `${day}-${month}-${year}`;
   console.log(currentDate);

  const isAdmin = useAdmin();
  const axiosSecure = useAxiosSecure();
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const handleOnSubmit = async (data) => {
    const response = await axiosSecure.post('/api/announcements', data);
    if(response?.data?.insertedId) {
      toast.success('Announcement Published');
      reset();
    } else {
      toast.error('Failed to publish announcement');
    }
  };
  if(isAdmin) return (
    <div className="max-w-1440 w-full flex flex-col items-center">
      <PageTitle
        title={'Make Announcement'}
        subtitle={'Fill out the form below to publish an announcement'}
      />
      <div className='w-full flex flex-col items-center grow'>

        <form onSubmit={handleSubmit(handleOnSubmit)} className='max-w-screen-sm w-full mx-auto flex flex-col gap-y-5'>

            <input type="text" placeholder="Type Announcement Title Here" className="input input-bordered w-full" {...register('title', {required: 'Announcement Title is required'})} />

            {errors.title && <p className='text-red-500'>{errors.title.message}</p>}

            <textarea placeholder="Type Announcement Description Here" className="textarea textarea-bordered textarea-lg w-full" {...register('desc', {required: 'Announcement description is required'})} ></textarea>

            {errors.desc && <p className='text-red-500'>{errors.desc.message}</p>}

            <input type="text" placeholder="current date" className="input input-bordered w-full" hidden {...register('date')} value={currentDate} />

            <button type="submit" className='btn btn-primary btn-outline w-fit text-lg'>Submit</button>
        </form>
      </div>
    </div>
  );
  return (
    <div className="max-w-1440 w-full flex flex-col items-center">
      <PageTitle
        title={'Make Announcement'}
        subtitle={'Fill out the form below to publish an announcement'}
      />
      <div className='w-full flex flex-col items-center grow'>
        <p>You are not an admin</p>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
