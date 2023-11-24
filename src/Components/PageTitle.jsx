/* eslint-disable react/prop-types */
const PageTitle = ({title, subtitle}) => {
    return ( 
        <div className='w-full text-center py-6'>
            <h5 className='font-medium pb-2 text-sm'>{subtitle}</h5>
            <h1 className='uppercase font-black !py-0 !my-0'>{title}</h1>
        </div>
     );
}
 
export default PageTitle;