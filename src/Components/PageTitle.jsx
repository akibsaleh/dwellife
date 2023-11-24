/* eslint-disable react/prop-types */
const PageTitle = ({title, subtitle}) => {
    return ( 
        <div className='w-full text-center py-6 flex flex-col items-center'>
            <h5 className='font-medium pb-2 text-sm'>{subtitle}</h5>
            <h1 className='uppercase font-black !py-0 !my-0'>{title}</h1>
            <div className='w-40 h-1 !my-6 bg-gradient-to-r from-secondary via-primary to-accent rounded-badge'></div>
        </div>
     );
}
 
export default PageTitle;