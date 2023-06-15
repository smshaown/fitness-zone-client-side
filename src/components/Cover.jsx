import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Image1 from "../../src/assets/images/slider-img1.jpg";
import Image2 from "../../src/assets/images/slider-img2.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Cover = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       
        <SwiperSlide>
          <div>
          <div className="hero min-h-screen" style={{backgroundImage: `url(${Image2}`}}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                className="font-bold text-white"
              >
              Welcome to Fitness Zone
              </motion.h1>
             
            <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                className="mb-5 text-5xl font-bold mt-5"
              >
               <span  className="text-[#C7D300]">Be Stronger </span> <span className="text-white">than your excuses!</span>
              </motion.h1>
              
              <p className="mb-5">Achieve your health & fitness goals at any stage.</p>
              <button className="bg-[#C7D300] btn text-white border-0 font-bold">Get Started</button>
            </div>
          </div>
        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <div className="hero min-h-screen" style={{backgroundImage: `url(${Image1}`}}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                className="font-bold text-white"
              >
              Welcome to Fitness Zone
              </motion.h1>
             
            <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                className="mb-5 text-5xl font-bold mt-5"
              >
               <span  className="text-[#C7D300]">Build Your  </span> <span className="text-white">Body Strong</span>
              </motion.h1>
              
              <p className="mb-5">Trust The Grounds Guys professionals to take care of your </p>
              <button className="bg-[#C7D300] btn text-white border-0 font-bold">Get Started</button>
            </div>
          </div>
        </div>
          </div>
        </SwiperSlide>
        



      



      </Swiper>
    </>
  );
};

export default Cover;
