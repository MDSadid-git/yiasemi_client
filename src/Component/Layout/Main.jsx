
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-screen-xl mx-auto'>
           

            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;