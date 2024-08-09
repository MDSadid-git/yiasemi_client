import React from 'react';

const SectionTitle = ({heading="", subHeading=""}) => {
    return (
        <div className='md:w-3/12 mx-auto my-10 text-center'>
            <h2 className='text-[#0587C7] mb-2 font-semibold'>---{heading}---</h2>
            <h3 className='text-3xl font-bold border-y-2 my-2 py-2'>{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;