import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../ComponentShered/SectionTitile/SectionTitle';
import SheardMenu from '../../../ComponentShered/SheardMenu/SheardMenu';

const PopluerMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>
           {
            const popularItem = data.filter(item=> item.category === "popular")
            setMenu(popularItem)
           })
    })
    // console.log(menu)
    return (
        <section className='max-w-screen-xl mx-auto my-5 px-5'>
            <SectionTitle heading='Check it Out' subHeading='From Our Menu'/>
            <div className='grid md:grid-cols-2 gap-2'>

            {menu.map(item=> <SheardMenu key={item._id} item={item}></SheardMenu>)}
            </div>
            
        </section>
    );
};

export default PopluerMenu;