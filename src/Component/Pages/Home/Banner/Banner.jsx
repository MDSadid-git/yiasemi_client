import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../Assets/home/01.jpg"
import img2 from "../../../Assets/home/02.jpg"
import img3 from "../../../Assets/home/03.png"



const Banner = () => {
    return (
        <div className="-mt-24">
             <Carousel>
            
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                   
                </div>
                <div>
                    <img src={img3} />
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;