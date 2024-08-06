"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/auth", formData);
      if (res.data.ok) {
        localStorage.setItem("auth_token", res.data.data.accessToken);
        router.push("profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl py-20 px-32 border border-gray-200 bg-white shadow-lg space-y-10 w-full max-w-md"
      >
        <h1 className="font-geistBlack text-5xl text-center text-gray-800">
          Sign In
        </h1>
        <div className="space-y-4">
          <label className="block text-gray-600">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-600">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex justify-center">
          <Link href={"/profile"} className="w-full">
            <button
              type="submit"
              className="bg-orange hover:bg-orange/80 text-white rounded-lg py-2 px-4 mt-4 w-full transition duration-300"
            >
              Sign In
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
