import { useState, useEffect } from "react";
import axios from "axios";

const MyEnrolledClasses = (classPaid) => {
  console.log(classPaid);
  // const { id } = classPaid._id;
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  console.log(enrolledClasses);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/enrolled-classes/`) // Replace with the actual URL of your backend API endpoint
      .then((response) => {
        setEnrolledClasses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Enrolled Classes</h2>
      {enrolledClasses.length === 0 ? (
        <p>No enrolled classes</p>
      ) : (
        <table className="table shadow-2xl w-[90%] mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Class Photo</th>
              <th className="px-4 py-2">Class Name</th>
              <th className="px-4 py-2">Instructor</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map((classItem) => (
              <tr key={classItem?._id}>
                <td className="px-4 py-2">
                  <img className="w-16" src={classItem?.classImage} alt="" />
                </td>
                <td className="px-4 py-2">{classItem?.className}</td>
                <td className="px-4 py-2">{classItem?.instructor.name}</td>
                <td className="px-4 py-2">$ {classItem?.classPrice}</td>
                <td className="px-4 py-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyEnrolledClasses;
