import React from 'react';
import Image1 from "../../../src/assets/images/fullTime1.jpg";

const FullTimeCurse = () => {
    return (
        <div>
            <h2 className='mt-12 mb-12 font-bold'>Full Time Courses</h2>
            <div>
                <div>
                    <div>
                        <img src={Image1} alt="" />
                    </div>
                    <h2>Abstracting from the Image</h2>
                    <p>Time: 8:45 am – 12:30 pm</p>
                    <P>Days of Week: Monday, Friday</P>
                    <p>Days of Week: Monday, Friday</p>
                    <h3>$250/monthly</h3>
               </div>                 
            </div>
        </div>
    );
};

export default FullTimeCurse;