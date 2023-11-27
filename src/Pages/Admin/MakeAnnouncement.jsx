import PageTitle from '../../Components/PageTitle';

const MakeAnnouncement = () => {
  return (
    <div className="max-w-1440 w-full flex flex-col items-center">
      <PageTitle
        title={'Make Announcement'}
        subtitle={'Fill out the form below to publish an announcement'}
      />
      <div className='w-full flex flex-col items-center grow'>
        <form className='max-w-screen-sm w-full mx-auto flex flex-col gap-y-5'>
            <input type="text" placeholder="Type Announcement Title Here" className="input input-bordered w-full" />
            <textarea placeholder="Type Announcement Description Here" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
            <button type="submit" className='btn btn-primary btn-outline w-fit text-lg'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
