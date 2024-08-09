import React from 'react';

const SheardMenu = ({item}) => {

    
    
    // const {name, image, price, recipe} = item.item;
    return (
        <div className='flex space-x-2 my-5'>
            <img src={item?item.image:""} alt="" className='w-[150px] rounded-l-full rounded-t-lg'/>
            <div>
                <div className='md:flex justify-between'>

                <h3 className='font-semibold text-lg'>{item?item.name:""} ---</h3>
            <h2 className='text-[#0587C7] font-bold'>${item?item.price:""}</h2>
                </div>
                <p>{item?item.recipe:""}</p>
            </div>
        </div>
    );
};

export default SheardMenu;