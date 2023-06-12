import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Image1 from "../../src/assets/images/slider1.jpeg";
import Image2 from "../../src/assets/images/slider2.jpeg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Cover = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div>
          <div className="absolute w-1/2 top-48 left-[30%] space-y-2 text-center lg:w-2/5 md:w-1/2 xl:w-1/2">
  <motion.h2
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    className="text-6xl font-bold text-white lg:text-5xl md:text-5xl xl:text-5xl"
  >
    Pursue your passion!{" "}
    <span className="text-orange-400">Create</span>
  </motion.h2>
  <motion.h3
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    className="text-white font-bold text-center text-6xl lg:text-5xl md:text-5xl xl:text-5xl mr-8"
  >
    your life
  </motion.h3>
  {/* <motion.p
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    className="lg:text-center md:text-center xl:text-center mr-12 text-white "
  >
    It is a long established fact that a reader will be distracted
    by the readable content layout readable English.ratione, id
    soluta aspernatur nulla minus.
  </motion.p> */}
  <motion.div
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    className="text-center mr-16"
  >
    <button className="bg-white p-2 rounded text-xl font-semibold text-orange-400 hover:border-r-4 border-orange-400">
      Buy Now
    </button>
  </motion.div>
</div>

            <div
              style={{
                backgroundImage: `linear-gradient(140deg, #181818 0%, rgba(24, 24, 24, 0.822917) 24.48%, rgba(24, 24, 24, 0) 100%), url(${Image1})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "80vh",
                width: "100%",
              }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <div className="absolute w-1/2 top-48 left-[30%] space-y-2 text-center lg:w-2/5 md:w-1/2 xl:w-1/2">
  <motion.h2
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    className="text-6xl font-bold text-white lg:text-5xl md:text-5xl xl:text-5xl"
  >
   Founded by Artists and Supporting   {" "}
    <span className="text-orange-400">Artists</span>
  </motion.h2>
  <motion.h3
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    className="text-white font-bold text-center text-6xl lg:text-5xl md:text-5xl xl:text-5xl mr-8"
  >
    Since
  </motion.h3>
  {/* <motion.p
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    className="lg:text-center md:text-center xl:text-center mr-12 text-white "
  >
    It is a long established fact that a reader will be distracted
    by the readable content layout readable English.ratione, id
    soluta aspernatur nulla minus.
  </motion.p> */}
  <motion.div
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    className="text-center mr-16"
  >
    <button className="bg-white p-2 rounded text-xl font-semibold text-orange-400 hover:border-r-4 border-orange-400">
      Buy Now
    </button>
  </motion.div>
</div>

            <div
              style={{
                backgroundImage: `linear-gradient(140deg, #181818 0%, rgba(24, 24, 24, 0.822917) 24.48%, rgba(24, 24, 24, 0) 100%), url(${Image2})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "80vh",
                width: "100%",
              }}
            ></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Cover;
