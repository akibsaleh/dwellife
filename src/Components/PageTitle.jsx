/* eslint-disable react/prop-types */
import {motion} from 'framer-motion';
const PageTitle = ({title, subtitle}) => {
    return ( 
        <div className='w-full text-center py-6 flex flex-col items-center prose lg:prose-xl'>
            <motion.h5 className='font-medium pb-2 !mt-0'>{subtitle}</motion.h5>
            <motion.h1 className='uppercase font-black !py-0 !my-0'>{title}</motion.h1>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: [0, 2, 1] }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
             className='w-40 h-1 !my-6 bg-gradient-to-r from-secondary via-primary to-accent rounded-badge'></motion.div>
        </div>
     );
}
 
export default PageTitle;