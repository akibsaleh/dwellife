import { useLocation } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle';

const ConfirmPayment = () => {
    const location = useLocation();
    console.log(location.state);
    return ( 
        <div className='flex flex-col grow h-full items-center'>
            <PageTitle title={'Confirm Payment'} subtitle={'Fill out the form to confirm payment'} />
            <div className='w-full flex flex-col items-center'>
                <p>Check Out form here</p>
            </div>
        </div>
     );
}
 
export default ConfirmPayment;