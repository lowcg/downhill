'use client'
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({setMode}) => {
  const [formData, setFormData] = useState({
    name: '',
    semester: '',
    roll: '',
    collegeMail: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name==='semester'&&value?Number.parseInt(value):value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res= await axios.post('http://localhost:8000/register/student',formData)
      setMode(true);
   } catch (error) {
       console.log(error)
   }

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='rounded-2xl py-12 px-12 border border-neutral-200 space-y-8 bg-pure-white'>
      <h1 className='font-geistSemiBold text-5xl'>Sign Up</h1>
      <h2 className='text-red-400'>*Only for Students</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className='w-full px-4 py-2 border rounded-lg border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-neutral-50'/>
      </div>
      <div>
        <label>Semester:</label>
        <input type="text" name="semester" value={formData.semester} onChange={handleChange} required className='w-full px-4 py-2 border rounded-lg border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-neutral-50'/>
      </div>
      <div>
        <label>University Roll:</label>
        <input type="text" name="roll" value={formData.roll} onChange={handleChange} required className='w-full px-4 py-2 border rounded-lg border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-neutral-50'/>
      </div>
      <div>
        <label>College Mail ID:</label>
        <input type="text" name="collegeMail" value={formData.collegeMail} onChange={handleChange} required className='w-full px-4 py-2 border rounded-lg border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-neutral-50'/>
      </div>
      <div>
        <label>Mail ID:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} required className='w-full px-4 py-2 border rounded-lg border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-neutral-50'/>
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className='w-full px-4 py-2 border rounded-lg border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-neutral-50'/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required className='w-full px-4 py-2 border rounded-lg border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-neutral-50'/>
      </div>
      <button type="submit" className='bg-orange rounded-lg py-1 px-4'>Submit</button>
    </form>
  );
};

export default SignUp;
