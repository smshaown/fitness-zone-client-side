import Logo from "../Page/Shared/Navbar/Logo";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    // <footer className="py-6 bg-white mt-12 text-gary-500 shadow-2xl ">
    //   <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
    //     <div className="grid grid-cols-12">
    //       <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
    //         <a
    //           rel="noopener noreferrer"
    //           href="#"
    //           className="flex justify-center space-x-3 md:justify-start"
    //         >
    //           <div className="flex items-center justify-center w-36 h-12 ">
    //             <img src={logo} alt="logo" />
    //           </div>
    //         </a>
    //       </div>
    //       <div className="col-span-6 text-center md:text-left md:col-span-3">
    //         <p className="pb-1 text-lg font-medium">About Us</p>
    //         <ul>
    //           <li>
    //             <a
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:dark:text-violet-400"
    //             >
    //               Blog
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:dark:text-violet-400"
    //             >
    //               Careers
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:dark:text-violet-400"
    //             >
    //               Teach For Us
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:dark:text-violet-400"
    //             >
    //               Press Center
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:dark:text-violet-400"
    //             >
    //               Scholarships
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-span-6 text-center md:text-left md:col-span-3">
    //         <p className="pb-1 text-lg font-medium">Plans</p>
    //         <ul>
    //           <li>
    //             <a
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:dark:text-violet-400"
    //             >
    //               Student Solutions
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:dark:text-violet-400"
    //             >
    //               Teacher Solutions
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:dark:text-violet-400"
    //             >
    //               Study.com for Schools
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:dark:text-violet-400"
    //             >
    //               Working Scholars®
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               rel="noopener noreferrer"
    //               href="#"
    //               className="hover:dark:text-violet-400"
    //             >
    //               Solutions Online tutoring
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="grid justify-center pt-6 lg:justify-between">
    //       <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
    //         <span>©2023 All rights reserved</span>
    //         <a rel="noopener noreferrer" href="#">
    //           <span>Privacy policy</span>
    //         </a>
    //         <a rel="noopener noreferrer" href="#">
    //           <span>Terms of service</span>
    //         </a>
    //       </div>
    //       <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
    //         <a
    //           rel="noopener noreferrer"
    //           href="#"
    //           title="Email"
    //           className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             className="w-5 h-5"
    //           >
    //             <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
    //             <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    //           </svg>
    //         </a>
    //         <a
    //           rel="noopener noreferrer"
    //           href="#"
    //           title="Twitter"
    //           className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 50 50"
    //             fill="currentColor"
    //             className="w-5 h-5"
    //           >
    //             <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
    //           </svg>
    //         </a>
    //         <a
    //           rel="noopener noreferrer"
    //           href="#"
    //           title="GitHub"
    //           className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 24 24"
    //             className="w-5 h-5"
    //           >
    //             <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
    //           </svg>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="footer footer-center p-10 bg-base-200 text-base-content ">
      <div>
        <Logo />
        <p className="font-bold">
          Fitness Zone Ltd. <br />
          start the company 1999
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
