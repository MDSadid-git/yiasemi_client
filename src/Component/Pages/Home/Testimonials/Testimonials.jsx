import React, { useEffect, useState } from "react";
import SectionTitle from "../../../ComponentShered/SectionTitile/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    fetch("./review.json")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  });
  console.log(reviews);
  return (
    <div className="max-w-screen-xl mx-auto my-5 px-5">
      <SectionTitle heading="What Our Client Say" subHeading="Testimonial" />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((data) => (
            <SwiperSlide key={data._id}>
              <div className="flex flex-col items-center my-20">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={data.rating}
                  readOnly
                />
                <p className="mx-16 my-5">{data.details}</p>
                <h3 className="text-3xl text-brand font-semibold">
                  {data.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
