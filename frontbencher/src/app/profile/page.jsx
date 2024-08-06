"use client"
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar/Departmentnavbar';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [student, setStudent] = useState({
    name: "Sayan Das",
    email: "sayandas@example.com",
    rollNo: "16902821021",
    currentSemester: "7",
    photo: "/sayan.jpg", // Ensure you have an image in the public/images directory
    sgpa: [
      { semester: "1", sgpa: 8.5 },
      { semester: "2", sgpa: 8.9 },
      { semester: "3", sgpa: 8.2 },
      { semester: "4", sgpa: 8.7 },
      { semester: "5", sgpa: 8.6 },
      { semester: "6", sgpa: 8.8 },
    ]
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSGPAChange = (index, value) => {
    const newSgpa = [...student.sgpa];
    newSgpa[index].sgpa = value;
    setStudent(prevState => ({
      ...prevState,
      sgpa: newSgpa
    }));
  };

  const handleSave = () => {
    // Save the changes (e.g., send to a server)
    setIsEditing(false);
  };

  return (
    <>
      <Head>
        <title>Student Profile - {student.name}</title>
      </Head>
      <Navbar alwaysSolid/>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col items-center justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-2xl w-full sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-blue-600 shadow-lg transform sm:skew-y-0 sm:rotate-6 rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto text-center">
              <div className="flex flex-col items-center space-y-4">
                <img src={student.photo} alt="Profile Photo" className="w-32 h-32 rounded-full object-cover shadow-lg" />
                <div>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        className="text-3xl font-semibold text-center"
                      />
                      <input
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        className="text-gray-600 mt-1"
                      />
                    </>
                  ) : (
                    <>
                      <h1 className="text-3xl font-semibold">{student.name}</h1>
                      <p className="text-gray-600">{student.email}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="mt-6">
                {isEditing ? (
                  <>
                    <p className="text-lg font-medium">
                      Roll No: <input type="text" name="rollNo" value={student.rollNo} onChange={handleChange} className="ml-2"/>
                    </p>
                    <p className="text-lg font-medium">
                      Current Semester: <input type="text" name="currentSemester" value={student.currentSemester} onChange={handleChange} className="ml-2"/>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg font-medium">Roll No: {student.rollNo}</p>
                    <p className="text-lg font-medium">Current Semester: {student.currentSemester}</p>
                  </>
                )}
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Semester-wise SGPA</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border-collapse">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-300">Semester</th>
                        <th className="py-2 px-4 border-b border-gray-300">SGPA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {student.sgpa.map((sem, index) => (
                        <tr key={index}>
                          <td className="py-2 px-4 border-b border-gray-300 text-center">{sem.semester}</td>
                          <td className="py-2 px-4 border-b border-gray-300 text-center">
                            {isEditing ? (
                              <input
                                type="number"
                                value={sem.sgpa}
                                onChange={(e) => handleSGPAChange(index, e.target.value)}
                                className="text-center w-16"
                              />
                            ) : (
                              sem.sgpa
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-6">
                {isEditing ? (
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={handleEditToggle}
                    className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-200"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
